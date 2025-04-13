import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
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
)
