import { useState } from "react"
import "../styles/Learner.css"


export default function Score({ scores }) {
    return (
        <>
            <p>
                date: {scores.date} | score: {scores.score}
            </p>

        </>
    )
}