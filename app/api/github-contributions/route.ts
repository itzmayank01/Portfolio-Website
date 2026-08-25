import { profile } from '@/lib/site-data'

// Public, no-auth contributions API. Returns the last ~year of daily
// contribution counts for the user, so we can render a live heatmap that
// tracks the real GitHub profile.
const username = profile.github.replace(/\/+$/, '').split('/').pop() ?? 'itzmayank01'

export async function GET() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      // Revalidate hourly: keeps the graph "live" without hammering upstream.
      { next: { revalidate: 3600 } },
    )

    if (!res.ok) {
      return Response.json(
        { error: 'upstream_error', status: res.status },
        { status: 502 },
      )
    }

    const data = (await res.json()) as {
      total?: Record<string, number>
      contributions?: { date: string; count: number; level: number }[]
    }

    return Response.json(
      {
        total: data.total?.lastYear ?? 0,
        contributions: data.contributions ?? [],
      },
      {
        headers: {
          'Cache-Control':
            'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    )
  } catch {
    return Response.json({ error: 'fetch_failed' }, { status: 502 })
  }
}
