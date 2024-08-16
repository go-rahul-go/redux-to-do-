
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import combineReducers from "./services/reducers/rootReducer.js"

const store = configureStore({
    reducer: combineReducers
})

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>


)
