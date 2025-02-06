import { useState } from "react"
import "../styles/Learner.css"
import { learnerArray } from "../data/data.jsx"

export default function Learner(props) {
    // const [learner, setLearner] = useState({ learnerArray })
    // console.log(learnerArray)
    return (
        <>
            {learnerArray.map((learner, index) => (
                <div key={index}>
                    <h1>{learner.name}</h1>
                    <h4>{learner.bio}</h4>
                </div>
            ))}
        </>
    )
}
