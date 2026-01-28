function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            BPE Timeline
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Exploring Byte Pair Encoding through interactive visualization
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This project provides an interactive timeline and visualization of Byte Pair Encoding (BPE),
              a data compression technique commonly used in natural language processing and tokenization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
