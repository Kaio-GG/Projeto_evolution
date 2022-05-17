import './index.scss'
import { Link } from 'react-router-dom'
import React from 'react';

export default  function index() {
    return(
        <div className="mt">
            <div className="mae">
        <div className="cabeçalho">
            <img src='' className="log" alt=""/>
            <Link style={{textDecoration: 'none'}} className="btn1" to="/">
               <p className="text"> INICIO</p>
            </Link>
        </div>
        <div className="body">
        <div className="faixa">
            <h1>FAÇA SEU LOGIN</h1>
            <div className="linha">
            <div className="tex">
               <h1>
                e-mail
                </h1>
               <input className="te" type="text"/> 
            </div>
            <div className="tex-2"> 
               
                <h1>
                senha
                </h1>
                <input className="te"type="text"/>
              </div>
            </div>
           <Link style={{textDecoration: 'none'}} className="btn-2" to="/usuario">PRONTO</Link>
        </div>
        <Link style={{textDecoration: 'none'}} className="btn" to="/cadastro"> <p className="text">FAZER NOVO CADASTRO </p> 
        </Link >
    </div>
    </div>
        </div>
    );
    
}
