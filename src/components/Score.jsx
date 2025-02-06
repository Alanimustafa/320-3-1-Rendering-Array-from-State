import { useState } from "react"
import "../styles/Learner.css"


export default function Score({ scores }) {
    return (
        <>
        
            <p>
                Date: {scores.date} | Score: {scores.score}
            </p>

        </>
    )
}