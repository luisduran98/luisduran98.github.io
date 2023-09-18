import {React, useState, useEffect} from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Principal from "./redux/Principal";
import Home from "./redux/Home";


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false)

  const cordenadasUno = "andreasaenz@gmail.com";
  const cordenadasDos = "2/9";

  function login(mail, password){
    if(mail === cordenadasUno && password === cordenadasDos )
    setAccess(true);
    navigate('/Home')
    } 

    useEffect(()=>{
      !access && navigate('/')
    },[access,navigate])

    const homePag = location.pathname === '/'

  return (
    <div>
      {!homePag && <Home/>}
      <Routes>
        <Route path="/" element= {<Principal login={login} cordenadasDos= {cordenadasDos} cordenadasUno= {cordenadasUno}/>}/>
      </Routes>
    </div>
  );
}

export default App;
