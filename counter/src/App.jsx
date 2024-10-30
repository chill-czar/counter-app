import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  // let counter = 55;
  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    // setCounter(counter - 1)
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      alert("You can't remove value")
    }
  }

  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value : {counter} </h2>


      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value</button>

      <p>footer: {counter} </p>

    </>
  )
}

export default App
