import { useState } from "react"
import { Chrono } from "react-chrono"

type TimelineMode = "HORIZONTAL" | "VERTICAL" | "VERTICAL_ALTERNATING" | "HORIZONTAL_ALL"

function App() {
  const [mode, setMode] = useState<TimelineMode>("HORIZONTAL")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const items = [
    {
      title: "September 8, 2015",
      cardTitle: "BPE Discord Founded",
      cardDetailedText: "First readable message sent by CD: \"killando who r u\""
    },
    {
      title: "October 27, 2019",
      cardTitle: "Hashinshin Gatekeeps Cole from Diamond 1 promos",
      cardDetailedText: "Cole is autofilled adc ezreal. Hashinshin played Aatrox top and went 4/16. They lost the game, and Cole did not make it to diamond 1 promos."
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
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="px-4 py-2 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        >
          Change Layout
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {modes.map((m) => (
              <button
                key={m.value}
                onClick={() => {
                  setMode(m.value)
                  setDropdownOpen(false)
                }}
                className={`w-full px-4 py-2 text-left font-medium transition-colors ${
                  mode === m.value
                    ? "bg-indigo-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}
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
