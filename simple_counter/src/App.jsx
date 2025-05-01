import './App.css'
import Viewer from './components/viewer'
import Controller from './components/controller'
import { useState ,useEffect } from 'react'

function App() {

  const [count,setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect
  // 두번째 인수로 전달한 배열에 의존함. 배열안에 무엇을 넣느냐에따라 결과가 달라지므로
  // 의존성배열 (deps) 라고 부름
 
  useEffect(()=> {
    console.log(`count:${count} / input: ${input}`);
  },[count ,input])

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
  <div className='App'>
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e)=>{
        setInput(e.target.value)
      }}></input>
    </section>
    <section> 
      <Viewer count = {count}></Viewer>
    </section>
    <section>
      <Controller onClickButton={onClickButton}></Controller>
    </section>
  </div>
  )
}

export default App


