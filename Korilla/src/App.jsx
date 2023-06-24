import { useState } from 'react'
import './App.css'
import Receipt from './components/Receipt'
import Order from './components/Order'

function App() {
  console.log(Receipt)
  return (
    <div className = "app">
        <div className='receip-cotent'>
              <Order Receipt = {Receipt} />  
        </div>


    </div>

      
  )
}

export default App
