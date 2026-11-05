import { useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"

function App(){
  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]

  })
  console.log(wordToGuess)
    return (
    <div
      style={{
        maxWidth: "880px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center"}}>Lose Win</div>
      <HangmanDrawing  />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App