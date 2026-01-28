import { useState } from "react"
import { Chrono } from "react-chrono"

type TimelineMode = "HORIZONTAL" | "VERTICAL" | "VERTICAL_ALTERNATING" | "HORIZONTAL_ALL"

function App() {
  const [mode, setMode] = useState<TimelineMode>("HORIZONTAL")

  const items = [
    {
      title: "September 8, 2015",
      cardTitle: "BPE Discord Founded",
      cardDetailedText: "First readable message sent by CD: \"killando who r u\""
    },
    {
      title: "November 15, 2025",
      cardTitle: "2B2T Arc begins",
      cardDetailedText: "Cole solo starts running on the highway. Cam joins 11/28/2025. CD joins 11/29/2025. Italia joins 11/30/2025. Cole founded the BPE Base on 12/01/2025, approximately 23 million blocks away from spawn, taking about 30 hours to travel to by elytra bounce."
    }
  ]

  const modes: { label: string; value: TimelineMode }[] = [
    { label: "Horizontal", value: "HORIZONTAL" },
    { label: "Vertical", value: "VERTICAL" },
    { label: "Alternating", value: "VERTICAL_ALTERNATING" },
    { label: "Horizontal All", value: "HORIZONTAL_ALL" }
  ]

  return (
    <div className="h-screen w-screen bg-black">
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        {modes.map((m) => (
          <button
            key={m.value}
            onClick={() => setMode(m.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === m.value
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="h-full w-full">
        <Chrono
          items={items}
          mode={mode}
          darkMode
        />
      </div>
    </div>
  )
}

export default App
