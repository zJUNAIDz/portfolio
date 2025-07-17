"use client"

// Software Engineering related kanji with meanings
const SOFTWARE_ENGINEERING_KANJI = [
  '開', // Open/Development
  '発', // Development/Progress
  '設', // Design/Setup
  '計', // Plan/Measure
  '構', // Structure/Build
  '築', // Build/Construct
  '制', // System/Control
  '作', // Create/Make
  '建', // Build/Construct
  '管', // Manage/Control
  '理', // Logic/Reason
  '処', // Process/Handle
  '演', // Performance/Execution
  '算', // Calculate/Compute
  '機', // Machine/Mechanism
  '能', // Function/Ability
  '効', // Effect/Efficiency
  '率', // Rate/Efficiency
  '最', // Most/Optimal
  '適', // Suitable/Optimal
  '化', // Transform/Optimize
  '改', // Improve/Reform
  '良', // Good/Excellent
  '品', // Product/Quality
]

export function KanjiBackground() {
  return (
    <div className="kanji-grid">
      {SOFTWARE_ENGINEERING_KANJI.map((kanji, index) => (
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
