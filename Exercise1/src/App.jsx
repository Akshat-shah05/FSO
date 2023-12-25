/* eslint-disable react/prop-types */
import { useState } from "react"

const History = ({ allClicks }) => {
  return (
    <div> {allClicks.length === 0 ? <p> No Clicks</p> : <p>{allClicks.join(' ')}</p>} </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeft = (val) => {
    const lr = () => {
      setAll(allClicks.concat('L '.repeat(val)))
      setLeft(val)
    }
    return lr
  }

  const handleRight = (val) => {
    const hr = () => {
      setAll(allClicks.concat('R '.repeat(val)))
      setRight(val)
    }
    return hr
  }

  const reset = () => {
    setAll([])
    setLeft(0)
    setRight(0)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeft(left + 3)} text={"left"}/>
      <Button handleClick={handleRight(right + 2)} text={"right"}/>
      {right}
      <History allClicks={allClicks}/>
      <Button handleClick={reset} text={"reset"}/>
    </div>
  )
}

export default App