"use client"

import { useState, useEffect } from "react"

const QUOTES = [
  {
    japanese: '「完璧を求めすぎると、何も終わらない。」',
    english: '"Seeking perfection too much, nothing gets finished."'
  },
  {
    japanese: '「学び続ける者だけが、生き残る。」',
    english: '"Only those who keep learning survive."'
  },
  {
    japanese: '「小さな進歩も、進歩だ。」',
    english: '"Small progress is still progress."'
  },
]

function FlippingQuote({ quote, index, delay }: { 
  quote: typeof QUOTES[0], 
  index: number, 
  delay: number 
}) {
  const [showJapanese, setShowJapanese] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowJapanese(prev => !prev)
    }, 7000) // Flip every 7 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`quote-item quote-${index + 1} quote-flipper`}
      style={{
        animationDelay: `${delay}s`
      }}
    >
      <div className={`quote-content ${showJapanese ? 'show-japanese' : 'show-english'}`}>
        <div className="quote-side quote-japanese">
          {quote.japanese}
        </div>
        <div className="quote-side quote-english">
          {quote.english}
        </div>
      </div>
    </div>
  )
}

export function QuotesBackground() {
  return (
    <div className="quotes-background">
      {QUOTES.map((quote, index) => (
        <FlippingQuote
          key={index}
          quote={quote}
          index={index}
          delay={index * 0.8}
        />
      ))}
    </div>
  )
}
