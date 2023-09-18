import {React, useState} from "react";
import "./Principal.css";

export default function Principal({login}){
    const [validation, setValidation] = useState({
        mail:"" ,
        password:"" 
    }) 

    function usuario(event){
        let {name,value} = event.target;
        setValidation({...validation, [name]: value})
    }

    function boton(evento){
        evento.preventDefault();
        login(validation.mail, validation.password);
    }

return(
    <div className="mi-componente">

        <h1>18.</h1>

        <form onSubmit={boton}>
        <label>Mail</label>
        <input className="mi-input" type="text" placeholder="Mail..." name="mail" value={validation.mail} onChange={usuario}/>

        <label>Password</label>
        <input  className="mi-input" type="text" placeholder="Password..." name="password" value={validation.password} onChange={usuario}/>

        <button className="mi-button" >Verificar</button>
        </form>
    </div>
)

}