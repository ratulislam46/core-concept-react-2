
import './App.css'
import Counter from './count'
import Batsman from './Batsman'
import Bowler from './Bowler'

function App() {
  function handleClick(){
    alert("I am clicked")
  }
  const handleClick3 = () =>{
    alert("I am clicked 3")
  }
  const handleAdd5= (num) =>{
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Bowler></Bowler>
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onClick="handleClick()">Click Me </button> */}
      <button onClick={function handleClick(){alert('Cliked 1')}}>Click Me </button>

      <button onClick={handleClick}>Click Me 2</button>

      <button onClick={handleClick3}>Click me</button>

      <button onClick={() => alert('clicked 4')}>Click me</button>

      <button onClick={()=>{handleAdd5(8)}}>Click add 5</button>
      
    </>
  )
}

export default App
