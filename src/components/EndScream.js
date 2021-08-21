import { useContext } from 'react'
import { QuizContext } from '../helpers/QuizContext'
import { Questions } from '../helpers/Questions'

import '../App.css'

const EndScream = () => {

  const { score, setScore, setGameState } = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0)
    setGameState('menu')
  }

  return (
    <div className="finish">

      <h1>Quiz Finished</h1>

      <h3> {score} / {Questions.length} </h3>

      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScream
