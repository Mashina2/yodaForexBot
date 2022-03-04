//package imports
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter,Routes,Route,} from "react-router-dom";

//compoment imports
import Home from './components/Home.js';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

 //css import 
 import './App.css'


export default function App() {
  const [data,setData] = useState([{}])

  // async function getData(){
  //   axios.get('/mem').then(data => console.log(data.data)).catch(error=>console.log(error))
  // }
  // useEffect(async()=>{
  //  getData()
  // },[])
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/login' element={<Login></Login>}/>
          <Route exact path='/dash' element={<Dashboard></Dashboard>}/>
        </Routes>
      </div>
    </BrowserRouter>  
  )
}
