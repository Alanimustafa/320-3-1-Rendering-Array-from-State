import { useState } from "react"
import "../styles/Learner.css"
import { learnerArray } from "../data/data.jsx"
import Score from "./Score.jsx"

export default function Learner({ learner }) {
    // console.log(learnerArray)
    console.log(learner)
    return (
        <>

            <div className="learnerContainer">
                <h2>{learner.name}</h2>
                <h4>{learner.bio}</h4>
                <h3>Scores:</h3>
                {learner.scores.map((score, index) => (
                    <Score key={index} scores={score} />
                ))}
            </div>
        </>
    )
}
