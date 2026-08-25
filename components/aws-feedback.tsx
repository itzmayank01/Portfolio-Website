'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown, CheckCircle2, MessageSquare } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function AwsFeedback() {
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null)

  return (
    <section className="px-4 py-12 relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="hover-lift relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#93c5fd] via-[#bfdbfe] to-[#c7d2fe] dark:from-[#1e3a8a]/40 dark:via-[#1e293b]/70 dark:to-[#312e81]/40 border border-border/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Did you find what you were looking for today?
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Let us know so we can improve your cloud architecture and project collaboration experience.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {feedback ? (
                  <div className="flex items-center gap-2 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 px-5 py-3 text-sm font-bold text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Thank you for your feedback!</span>
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setFeedback('yes')}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-6 py-3 text-sm font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                      <span>Yes</span>
                      <ThumbsUp className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeedback('no')}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 text-white dark:bg-white/80 dark:text-slate-950 px-6 py-3 text-sm font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                      <span>No</span>
                      <ThumbsDown className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
