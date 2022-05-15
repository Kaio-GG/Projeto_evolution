import { Link } from "react-router-dom";
import './index.scss'
import React from 'react';





export default function cadastro() {
    return(
        <div className="mae-cadastro">
        <div className="cabeçalho">
            <img src="../../assets/image/logo1.svg" className="log" alt=""/>
            <Link style={{textDecoration: "none"}} className="btn1" href="../teladeinicio/index.html">
               <p className="text"> INICIO</p>
            </Link>
            <Link style={{textDecoration: "none"}} className="btn" href="../login/index.html">
                <p className="text"> LOGIN</p>
             </Link>
        </div>
        <div className="body">
            <div className="faixa">
                <h1 className="text">CADASTRO</h1>
                <p className="text">
                    PORQUE SE CADATRAR ? <br/>
                <br/>
                SE VOCE TEM VONTADE DE ANUNCIAR SEUS PRODUTOS <br/> 
                <br/>
                OU VIZUALIZAR PROMOÇÕES QUE SE ENCAIXAM NO SEU <br/>
                <br/>
                PERFIL DE COMPRA , COM O SEU CADASTRO ISSO É <br/>
                <br/>
                POSSIVEL . VOCE PRECISA APENAS COLOCAR SUAS <br/>
                <br/>
                INFORMAÇÕES NOS CAMPOS ABAIXO : <br/>
                <br/>
                </p>
            <div className="org">
                <div  className="caixas">
                    <p>NOME</p>
                    <input className="te" type="text"/>
                    <p>SOBRENOME</p>
                    <input className="te" type="text"/>
                    <p>CONTATO</p>
                    <input className="te" type="text"/>
                    <p>E-MAIL</p>
                    <input className="te" type="text"/>
                    <p>SENHA</p>
                    <input className="te-2"type="text"/>
                </div>
            
            <div className="caixa-2">
                <h3 className="text">IMAGEM DO USUARIO</h3>
                <img className="img" src="../../assets/image/foto-usuario.svg"  alt=""/>
                <Link style={{textDecoration: "none"}} className="btn-2" href="../menuusuario/index.html">PRONTO</Link>
            </div>
        </div>
        </div>
        </div>
    </div>
    );
    
}