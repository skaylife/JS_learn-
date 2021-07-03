import "./styles.css";
import Child from './functional';
import Test from './Test';
import Test2 from './Test2';
import React, {useState} from 'react';

export default function App() {
  //refs
  const refRange = React.createRef();
  const refDiv = React.createRef();
  // const refF = React.createRef();
  const refC = React.createRef();
  //state
  const [s1, setS1] = useState(50)


  function changeHandler(event) {
    let a = event.target.value;
    console.log(a);
    setS1(a)
  }

  function changeButton() {
    let elem = refRange.current;
    console.log(elem.value);
    let div = refDiv.current;
    console.log(div.innerHTML);
    div.innerHTML = 444;
    div.style.background = 'orange';
    refC.current.go()
  }

  return (

    <>
    <div>
      <input type="range" onChange={changeHandler}/>
    </div>
    <div>
      <input type="range" ref={refRange}/>
    </div>
    <div>
      <div ref={refDiv}>some text</div>
    </div>
    <div>
      <button onClick={changeButton}>Push</button>
    </div>
    <Child p1={s1}/>
    {/* <Test  ref={refF}/> */}
    <Test2  ref={refC}/>
    </>

  );
}
