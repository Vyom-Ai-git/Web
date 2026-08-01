/**
 * Vyom Analytics Stub
 *
 * In production, swap the console.log calls for your chosen provider:
 *   - GA4:      window.gtag('event', name, props)
 *   - Plausible: window.plausible(name, { props })
 *
 * Set VITE_ANALYTICS_PROVIDER='ga4' | 'plausible' | 'none' in .env
 */

type EventProps = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    plausible?: (event: string, opts?: { props?: EventProps }) => void
  }
}

export function trackEvent(name: string, props?: EventProps): void {
  if (import.meta.env.DEV) {
    // Visible in browser devtools during local development
    console.log(`[Analytics] ${name}`, props ?? {})
    return
  }

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, props)
    } else if (typeof window.plausible === 'function') {
      window.plausible(name, { props })
    }
  } catch {
    // Silently fail — analytics must never break the user experience
  }
}

// ─── Named event helpers ──────────────────────────────────────────────────────
export const track = {
  ctaClick: (label: string) => trackEvent('cta_clicked', { label }),
  formSubmit: (form: string) => trackEvent('form_submitted', { form }),
  newsletterSubscribe: () => trackEvent('newsletter_subscribed'),
  scrollMilestone: (pct: number) => trackEvent('scroll_milestone', { percent: pct }),
  filterChange: (category: string) => trackEvent('filter_changed', { category }),
} as const
