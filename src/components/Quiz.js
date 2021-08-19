import { useState } from "react"
import { QuizApi } from "../helpers/QuizApi"

const Quiz = () => {
	const [currQuestion, setcurrQuestion] = useState(0)

	console.log(QuizApi[currQuestion])
  const {question} =QuizApi[currQuestion]

	return (
		<div className="quiz">
			<h3 >{question}</h3>
		</div>
	)
}

export default Quiz
