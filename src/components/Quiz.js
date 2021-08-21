import { useState, useContext } from 'react'
import { QuizContext } from '../helpers/QuizContext'
import { Questions } from '../helpers/Questions'

const Quiz = () => {
	const { score, setScore, setGameState } = useContext(QuizContext)
	const [currQuestion, setcurrQuestion] = useState(0)
	const [optionChosen, setOptionChosen] = useState('')

	const chooseOption = option => {
		setOptionChosen(option)
	}

	const nextQuestion = () => {
		if (Questions[currQuestion].correct_answer === optionChosen) {
			setScore(score + 1)
		}
		setcurrQuestion(currQuestion + 1)
	}

	const finishQuiz = () => {
		if (Questions[currQuestion].correct_answer === optionChosen) {
			setScore(score + 1)
		}
		setGameState('finish')
	}

	return (
		<div className='quiz'>
			<h3>{Questions[currQuestion].question}</h3>
			<div className='options'>
				<button onClick={() => chooseOption('answer_a')}>
					{Questions[currQuestion].answer_a}</button>
				<button onClick={() => chooseOption('answer_b')}>
					{Questions[currQuestion].answer_b}</button>
				<button onClick={() => chooseOption('answer_c')}>
					{Questions[currQuestion].answer_c}</button>
				<button onClick={() => chooseOption('answer_d')}>
					{Questions[currQuestion].answer_d}</button>
			</div>
			{currQuestion === Questions.length - 1 ? (
				<button  onClick={finishQuiz} >
					Finish Quiz
				</button>
			) : (
				<button onClick={nextQuestion} >
					Next Question
				</button>
			)}
		</div>
	)
}

export default Quiz
