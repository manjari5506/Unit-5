//import { useState } from 'react'
import './App.css'
import { Form } from './components/form'
import { Table } from './components/table'

function App() {


  return (
    <div className="App">
      <Form/>
      {<Table/> }
    </div>
  )
}

export default App