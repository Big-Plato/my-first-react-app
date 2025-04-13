import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import Greeting from "./Greeting.jsx"

function MyButton() {
  return(
    <button>
      I am a button
    </button>
  )
}

const user = {
  name: "Luis Octávio",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
}
=======
import Greeting from './Greeting.jsx'
>>>>>>> 607e86cb6ff0f176885271143c721bed7d50db68

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
<<<<<<< HEAD
    <h1>{user.name}</h1>
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'Foto de ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize,
      }}
      />
    < MyButton />
  </StrictMode>
=======
  </StrictMode>,
>>>>>>> 607e86cb6ff0f176885271143c721bed7d50db68
)
