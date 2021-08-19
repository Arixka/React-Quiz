import "./App.css"
import { useState, useContext } from "react"
import MainMenu from "./components/MainMenu"
import EndScream from "./components/EndScream"
import Quiz from "./components/Quiz"
import { QuizContext } from "./helpers/QuizContext"

function App() {
	const [gameState, setGameState] = useState("menu")

	return (
		<div className="App">
			<h1>
				Quiz App
			</h1>

			<QuizContext.Provider value={{ gameState, setGameState }}>
				{gameState === "menu" && <MainMenu />}
				{gameState === "quiz" && <Quiz />}
				{gameState === "finish" && <EndScream />}
			</QuizContext.Provider>
		</div>
	)
}
//overflow-hidden m-6 sm:v-52 lg:w-1/2 justify-cente
export default App
