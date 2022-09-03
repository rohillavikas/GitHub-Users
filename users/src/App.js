import React, {useState, useEffect} from 'react';
import './App.css';
import Users from './components/Users';

function App() {

  const [data, setData] = useState([])

const funcApi  =async()=>{
  const URL = await fetch("https://api.github.com/users")
  const res = await URL.json()
  setData(res)
  console.log(res);
}


  useEffect(()=>{
    funcApi()
  },[])


  return (
    <div>
    <Users data={data}/>
    </div>
      
    
    
  )
}

export default App;
