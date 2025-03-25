
import './App.css'
import Counter from './count'
import Batsman from './Batsman'
import Bowler from './Bowler'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'
import Players from './Players'



const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>res.json())

const fetchFriends = async () => {
  const res = await  fetch ('https://jsonplaceholder.typicode.com/users')
  return res.json();
}


function App() {
  
  const postPromise = fetchPosts();

  const friendsPromise = fetchFriends();


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

      <Players></Players>
      
      <Suspense fallback = { <p>Processing Post details...</p>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>
      
      <Suspense fallback={<p>Friends are coming for treat...</p>}>
      <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      
      <Suspense fallback= {<p>Loading...</p>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      
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
