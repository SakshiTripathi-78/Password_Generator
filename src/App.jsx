import { useState  , useCallback, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VantaBackground from './VantaBackground'

function App() {
  const[length, setlength] = useState(8)
  const[includeNum, setincludeNum]= useState(false)
  const[includeSymbol, setincludeSymbol]= useState(false)
  const[Password, setPassword]= useState("")

   const passwordGen= useCallback(()=>{
   
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(includeNum){
      str+="0123456789"
    }
    if(includeSymbol){
      str+= "!@#$%^&*()"
    }
    for( let i=1;i<=length;i++){
      let charPointer=Math.floor(Math.random() * str.length + 1)
      console.log(`val:${charPointer}`)
      pass+=str.charAt(charPointer)
    }
    setPassword(pass) 
   }
    ,[length , includeNum , includeNum , setPassword])
  
   
   
    useEffect(()=>{
      passwordGen()
    },[length , includeNum , includeSymbol , setPassword ,passwordGen])
   

  return (
    
    <div class="container">
      <h1>Generate your Password:</h1>
      <div class="primary">
        <input class="pass" 
        type="text" 
        value={Password}
        readOnly
        placeholder="Password"
        />
        <button className="copy">copy</button>

      </div>
      <div class="secondary">
        
        <input 
        onChange={(e)=>{
          setlength(e.target.value)
         }}
         
         type="range" min={0} max={30}
         value={length} 
         />     
         
         <label>lenght:{length}
        </label>
       
       <input
      
       
        defaultChecked={includeNum}
        onChange={()=>{
          setincludeNum((prev)=>!prev)
         }}
        type="checkbox"/> <label>includeNum</label>
        <input 
         
        defaultChecked={includeSymbol} 
        onChange={()=>{
          setincludeSymbol((prev)=>!prev)
         }}
        type="checkbox"/><label>includeSymbol</label>
      </div>
      <div className="App">
      <VantaBackground />
      <div style={{ position: "relative", zIndex: 1, padding: "2rem" }}>
        {/* <h1 style={{ color: "white" }}>Welcome to My Page</h1> */}
       </div>
       </div>
    </div>
  )
}

export default App
