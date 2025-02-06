import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { learnerArray } from './data/data'
import Learner from './components/Learner'



function App() {
  const [learners, setLearner] = useState(learnerArray) // The initial state of the learners array is set to the learnerArray from the data.js file
  console.log("Learners Array ", learners);
  return (
    <>
      <div className="studentScore">
        <h1>Student Score</h1>
        {learners.map((learner, index) => (
          <Learner key={index} learner={learner} />
        ))}
      </div>
    </>
  )
}

export default App
