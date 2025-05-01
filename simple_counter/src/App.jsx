import './App.css'
import Viewer from './components/viewer'
import Controller from './components/controller'
import { useState ,useEffect, useRef } from 'react'

function App() {

  const [count,setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef();

  // useEffect
  // 두번째 인수로 전달한 배열에 의존함. 배열안에 무엇을 넣느냐에따라 결과가 달라지므로
  // 의존성배열 (deps) 라고 부름

  // 과정
  // 1.마운트 : 탄생
  useEffect(()=> {
    console.log("mount");
  },[])

  // 2.업데이트 : 변화 , 리렌더링 , deps 제외
  useEffect(()=> {
    console.log("update")
  })

  // 3.언마운트 : 죽음


 
 

  const onClickButton = (value) => {
    setCount(count + value);
    // console.log 를사용해도 되지않느냐? 싶겠지만 , 변경되기 이전의 값만을 계속 띄움
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


