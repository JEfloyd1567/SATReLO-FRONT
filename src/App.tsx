import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bootstrapLogo from './assets/bootstrap-logo-shadow.png'
import fontAwesomeLogo from './assets/Font_Awesome_logomark_blue.svg.png'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="#" target="_blank">
          <img src={bootstrapLogo} alt="Bootstrap 5 Logo" className='logo' />
        </a>
        <a href="#" target="_blank">
          <img src={fontAwesomeLogo} alt="Font Awesome Logo" className='logo' />
        </a>
      </div>
      <h1>Vite + React + Bootstrap 5 + Font Awesome</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Remove default CSS files to use Bootstrap 5</p>
        <FontAwesomeIcon icon={faCoffee}/>
      </div>
    </div>
  )
}

export default App
