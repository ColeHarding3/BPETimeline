import { Chrono } from "react-chrono"

function App() {
  const items = [
    {
      title: "2015",
      cardTitle: "BPE Founded",
      cardDetailedText: "The BPE group was established in 2015."
    },
    {
      title: "January 1, 2026",
      cardTitle: "2b2t Arc",
      cardDetailedText: "The legendary 2b2t arc begins."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            BPE Timeline
          </h1>
          <p className="text-xl text-gray-700">
            A journey through our history
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <Chrono
            items={items}
            mode="HORIZONTAL"
            cardHeight={200}
            theme={{
              primary: "#4F46E5",
              secondary: "#EEF2FF",
              cardBgColor: "#FFFFFF",
              titleColor: "#1F2937",
              titleColorActive: "#4F46E5",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
