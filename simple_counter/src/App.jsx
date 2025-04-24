import './App.css'
import Viewer from './components/viewer'
import Controller from './components/controller'
import { useState } from 'react'
function App() {

  const [count,setCount] = useState(0);

  return (
  <div className='App'>
    <h1>Simple Counter</h1>
    <section>
      <Viewer count = {count}></Viewer>
    </section>
    <section>
      <Controller></Controller>
    </section>
  </div>
  )
}

export default App


