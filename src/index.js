import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./fonts/fonts.css"
import {Provider} from "react-redux"
import store from "./BLL/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)