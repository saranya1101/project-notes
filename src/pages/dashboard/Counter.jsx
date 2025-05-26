import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-indigo-100"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="bg-white/80 backdrop-blur-md border border-stone-300 rounded-3xl shadow-2xl p-10 w-full max-w-md text-center hover:shadow-fuchsia-300 transition duration-300">
        <h2 className="text-3xl font-bold text-fuchsia-700 mb-6 drop-shadow-sm">
          Counter
        </h2>
        <button
          onClick={handleClick}
          className="bg-fuchsia-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-fuchsia-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-300"
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}