/* eslint-disable react/prop-types */
import { useState } from 'react'

const Bigga = ({text}) => {
  return (<h1> {text} </h1>)
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Anecdote = (props) => {
  return (
    <>
      <p>{props.text}</p>
      <p>Has {props.votes} votes</p>
    </>
      
  )
}

const Winner = ({votes, anecdotes}) => {
  const mostVotes = Math.max(...votes)
  const winIndex = votes.indexOf(mostVotes)
  const winner = anecdotes[winIndex]

  if (mostVotes === 0) {
    return (
      <p> No Votes Yet </p>
    )
  } else {
    return (
      <>
        <p>{winner}</p>
        <p>Has {mostVotes} votes</p>
      </>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const handleNext = () => {
    const newIndex = Math.floor(Math.random() * 8)
    setSelected(newIndex)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <>
      <Bigga text={"QUOTE OF THE DAY"}/>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}/>
      <Button text={"Next"} handleClick={handleNext}/>
      <Button text={"Vote"} handleClick={handleVote}/>
      <Bigga text={"MOST VOTES TODAY"} />
      <Winner anecdotes={anecdotes} votes={votes} />
    </>
  )
}

export default App