import './index.scss'
import { Link } from 'react-router-dom'
import React from 'react';

export default  function index() {
    document.title = 'Login'
    return(
        <div className="mt">
            <div className="mae">
        <div className="cabeçalho">
          
            <img src='/assets/image/logo1.svg' className="log" alt=""/>
            <div className='btns'>
            <Link style={{textDecoration: 'none'}} className="btn1" to="/">
               <p className="text"> INICIO</p>
            </Link>
            <Link style={{textDecoration: 'none'}} className="btn1" to="/cadastro"> <p className="text">CADASTRO </p> 
        </Link >
        </div>
        </div>
        <div className="body">
        <div className="faixa">
            <h1>FAÇA SEU LOGIN</h1>
            <div className="linha">
            <div className="tex">
               <p className='text-1'>
                E-MAIL
                </p>
               <input className="te" type="text"/> 
            </div>
            <div className="tex-2"> 
               
                <p className='text-1'>
                SENHA
                </p>
                <input className="te"type="text"/>
              </div>
            </div>
            <div className='btns'>
           <Link style={{textDecoration: 'none'}} className="btn-2" to="/usuario">PRONTO</Link>
        </div>
        </div>
        
    </div>
    </div>
        </div>
    );
    
}
