import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import "./Assets/Sass/main.scss"

ReactDOM.render(
  <React.StrictMode>
    <div className="todo">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
