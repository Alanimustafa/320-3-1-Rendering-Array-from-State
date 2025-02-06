import { useState } from "react"
import "../styles/Learner.css"


export default function Score(props) {
    // const [learner, setLearner] = useState({ learnerArray })
    return (
        <>
            <ul> Score Detail
                {props.scores.map((score, index) => (
                    <li key={index}>
                        <h5>Date</h5>
                        <p>{score.date}</p>
                        <h5>Score</h5>
                        <p>{score.score}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}