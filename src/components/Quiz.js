import { useState } from "react"
import { QuizApi } from "../helpers/QuizApi"

const Quiz = () => {
	const [currQuestion, setcurrQuestion] = useState(0)

	const { question, incorrect_answers, correct_answer } = QuizApi[currQuestion]
	console.log(correct_answer)
	const answers = [...incorrect_answers, correct_answer]
	return (
		<div className="quiz">
			<h3>{question}</h3>
			<ul>
				{answers.map((elem) => (
					<button key={elem}>{elem}</button>
				))}
			</ul>
		</div>
	)
}

export default Quiz
