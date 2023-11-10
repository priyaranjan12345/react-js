import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const empName = " Abc"

// const reactElement = React.createElement(
//   'a',
//   {
//     href: "https://google.co",
//     tartget: '_blank'
//   },
//   "click me to visit google",
//   empName
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // reactElement
)
