import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function App(){
  const [url ,setUrl]=useState('https://rickandmortyapi.com/api/character/?name=')
  const [info, setInfo] = useState({})
  const [results,setResults] = useState([])
  const [search,setSearch] = useState("")

  useEffect(()=>{
  axios.get(`${url}${search}`).then((result)=>{
    console.log(result);
    setInfo(result.data.info)
    setResults(result.data.results)
  }).catch((error)=>{
    console.log('error')
  })
  },[search])

  useEffect(()=>{
    console.log('url:',url)
    console.log('info:',info)
    console.log('setResults:',results)
  },[url,info,results,search]);

return(
  <>
<form>
  <input type="text" onChange={(e)=>{
    setSearch(e.target.value)
  }}/>
</form>
<div className="card">
  {results.map((result,index)=>(
    <>
    <img src={result.image} alt={`photo of ${result.name}`} />
      <p key={index}>{result.name}</p>
      </>
  ))}
</div>
</>
);
}

export default App;