'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          if (lastEntry) {
            console.log('LCP:', lastEntry.startTime)
            // Send to analytics service
            if (window.gtag) {
              window.gtag('event', 'LCP', {
                value: Math.round(lastEntry.startTime),
                event_category: 'Web Vitals',
                event_label: window.location.pathname,
              })
            }
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime)
            if (window.gtag) {
              window.gtag('event', 'FID', {
                value: Math.round(entry.processingStart - entry.startTime),
                event_category: 'Web Vitals',
                event_label: window.location.pathname,
              })
            }
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // CLS (Cumulative Layout Shift)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          console.log('CLS:', clsValue)
          if (window.gtag) {
            window.gtag('event', 'CLS', {
              value: Math.round(clsValue * 1000) / 1000,
              event_category: 'Web Vitals',
              event_label: window.location.pathname,
            })
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // INP (Interaction to Next Paint)
        const inpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            const inp = entry.processingStart - entry.startTime
            console.log('INP:', inp)
            if (window.gtag) {
              window.gtag('event', 'INP', {
                value: Math.round(inp),
                event_category: 'Web Vitals',
                event_label: window.location.pathname,
              })
            }
          })
        })
        inpObserver.observe({ entryTypes: ['interaction'] })

        // Cleanup
        return () => {
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
          inpObserver.disconnect()
        }
      } catch (error) {
        console.warn('Performance monitoring failed:', error)
      }
    }
  }, [])

  return null
}
