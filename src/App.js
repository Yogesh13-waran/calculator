import "./App.css"
import { useState } from "react"


const App=()=> {
  const [calc,setcalc]=useState("")
  const [res,setres]=useState("")
  const ops=["/","*","+","-","."];
  const updcalc=value=>{
    if(ops.includes(value) && calc=== "" ||
    ops.includes(value) && ops.includes(calc.slice(-1))
    ){return}
   
    setcalc(calc+value)
    if(!ops.includes(value)){
      setres(eval(calc+value).toString())
    }
  }

  const digits=()=>{
    let nums=[]
    for(let i=1;i<10;i++){
      nums.push(
        <button onClick={()=>updcalc(i.toString())} key={i}>{i}</button>
      )
    }
    return nums
  }
  const cal=()=>{
    setcalc(eval(calc).toString());
  }
  const del=()=>{
    if(cal == ''){
      return 0
    }
    const value=calc.slice(0,-1)
    setcalc(value)
  }
  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          {res?<span>({res})</span>: ""}
          {calc}
        </div>
        <div className="operators"> 
        <button onClick={()=>updcalc("+")}>+</button>
        <button onClick={()=>updcalc("-")}>-</button>
        <button onClick={()=>updcalc("*")}>*</button>
        <button onClick={()=>updcalc("/")}>/</button>
        <button onClick={del}>DEL</button>


        </div>
        <div className="digits">
          {digits()}
        <button onClick={()=>updcalc("0")}>0</button>
          <button onClick={()=>updcalc(".")}>.</button>
        <button onClick={cal}>=</button>


         


        </div>

      </div>
     
    </div>
  );
}

export default App;
