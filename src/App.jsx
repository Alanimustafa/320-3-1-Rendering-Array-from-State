import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { learnerArray } from './data/data'



function App() {
  const learnersList = learnerArray.map((learner) => {
    return (
      console.log(learner)
    )
  })
}

export default App
