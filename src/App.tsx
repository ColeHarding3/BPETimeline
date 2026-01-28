import { Chrono } from "react-chrono"

function App() {
  const items = [
    {
      title: "September 8, 2015",
      cardTitle: "BPE Discord Founded",
      cardDetailedText: "First readable message sent by CD: \"killando who r u\""
    },
    {
      title: "January 1, 2026",
      cardTitle: "2b2t Arc",
      cardDetailedText: "The legendary 2b2t arc begins."
    }
  ]

  return (
    <div className="h-screen w-screen">
      <Chrono
        items={items}
        mode="HORIZONTAL"
        theme={{
          primary: "#4F46E5",
          secondary: "#EEF2FF",
          cardBgColor: "#FFFFFF",
          titleColor: "#1F2937",
          titleColorActive: "#4F46E5",
        }}
      />
    </div>
  )
}

export default App
