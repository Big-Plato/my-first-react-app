import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from "./Greeting.jsx"
import ShoppingList from "./Test.jsx"

function MyButton({count, onClick}) {
  // You can put 'useState' and make a variable (thing one) that has its value passed in a parameter and a second thing that modificate the first value passed. Here, we have count that it is set to 0.
  const [count, setCount] = useState(0);

  // You can put functions inside components to handle events or other things
  function handleClick() {
    // alert('You clicked me!');
    setCount(count + 1);
  }

  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

// It is possible to 'escape' from components to retrieve a information in a JavaScript object.
const user = {
  name: "Luis Octávio",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
}

// There is two ways how we can achieve a return in a component that has multiple elements: 1 - Put the elements inside the '<> </>'; 2 - Put the elements in div (these elements have to be a parent)
function Test() {
  return(
    <div>
      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  )
}

function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} /> 
      <MyButton count={count} onClick={handleClick} /> 
    </div>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      </div> */
      <MyApp />}
  </StrictMode>,
)
