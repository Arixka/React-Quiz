import { useContext } from "react"
import { QuizContext } from "../helpers/QuizContext"
import '../App.css'

const MainMenu = () => {

	const { gameState, setGameState } = useContext(QuizContext)


	return (
		<div className="menu">
			<button  onClick={() => setGameState("quiz")}>Start Quiz</button>
		</div>
	)
}

export default MainMenu
