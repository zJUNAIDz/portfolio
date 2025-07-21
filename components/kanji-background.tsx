"use client"

const KANJI = [
  '学', // Study/Learn
  '校', // School
  '時', // Time/Hour
  '書', // Write/Book
  '語', // Language/Word
  '話', // Speak/Talk
  '聞', // Hear/Listen
  '読', // Read
  '見', // See/Look
  '作', // Make/Create
  '使', // Use
  '新', // New
  '古', // Old
  '高', // High/Expensive
  '安', // Cheap/Safe
  '多', // Many
  '少', // Few
  '大', // Big
  '小', // Small
  '長', // Long/Leader
  '短', // Short
  '明', // Bright/Clear
  '暗', // Dark
  '楽', // Fun/Comfort
]

export function KanjiBackground() {
  return (
    <div className="kanji-grid">
      {KANJI.map((kanji, index) => (
        <div
          key={`${kanji}-${index}`}
          className="kanji-item"
          style={{
            transform: `rotate(${(index % 4 - 2) * 15}deg)`,
            animationDelay: `${index * 0.1}s`
          }}
        >
          {kanji}
        </div>
      ))}
    </div>
  )
}
