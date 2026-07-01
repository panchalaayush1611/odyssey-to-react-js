import { useState } from 'react'
import Card from './Card'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 gap-6">
      <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
        Testing TailwindCSS
      </h1>
      <Card />
    </div>
  )
}

export default App
