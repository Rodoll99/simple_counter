import './App.css'
import Viewer from './components/viewer'
import Controller from './components/controller'
function App() {
  return (
  <div className='App'>
    <h1>Simple Counter</h1>
    <section>
      <Viewer></Viewer>
    </section>
    <section>
      <Controller></Controller>
    </section>
  </div>
  )
}

export default App
