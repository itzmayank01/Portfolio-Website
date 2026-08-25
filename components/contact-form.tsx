'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { profile } from '@/lib/site-data'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Portfolio enquiry from ${name || 'someone'}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const fieldClass =
    'mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30'
  const labelClass =
    'block text-xs font-bold uppercase tracking-wider text-slate-400'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 shadow-xl backdrop-blur"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email ID"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="cf-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can I help you?"
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-95"
        >
          <Send className="h-4 w-4 stroke-[2.5]" />
          Send Message
        </button>
      </div>
    </form>
  )
}
