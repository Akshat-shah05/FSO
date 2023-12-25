/* eslint-disable react/prop-types */

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const son = {
    name: "Akshat", 
    age: 18}

  const mom = {
    name: "bela",
    age: 49
  }
  const dad = {
    name: "chirayu", 
    age: 51
  }
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={son.name} age={son.age}/>
      <Hello name={mom.name} age={mom.age}/>
      <Hello name={dad.name} age={dad.age}/>
    </div>
  )
}

export default App
