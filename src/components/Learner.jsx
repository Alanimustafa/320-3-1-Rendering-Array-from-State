import { useState } from "react"
import "../styles/Learner.css"
import { learnerArray } from "../data/data.jsx"

export default function Learner() {
    const [learner, setLearner] = useState({ learnerArray })
    // console.log(learnerArray)
    return (
        <>
            {learnerArray.map((learner, index) => (
                <div key={index}>
                    <h1>{learner.name}</h1>
                    <h4>{learner.bio}</h4>
                    <ul>
                        {learner.scores.map((score, index) => (
                            <li key={index}>
                                <h5>Date</h5>
                                <p>{score.date}</p>
                                <h5>Score</h5>
                                <p>Score: {score.score}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}
