import { Link } from "react-router-dom";
import './index.scss'
import React from 'react';



export default function index() {
    document.title = 'Publicar'
    return(
        <div className="mae-publicar">
        <div className="cabeçalho">
            <img src="../../assets/image/logo1.svg" className="log" alt=""/>
            <div className="btns">
          
              <Link  className="btn1" style={{textDecoration: 'none'}} to="/">
                 INICIO
              </Link> 
              <Link 
               className="btn2" style={{textDecoration: 'none'}} to="/usuario">
                HOME
             </Link> 
        </div>
    </div>
    <div className="body">
        <div className="faixa">
        <div className="org">
        <h1 className="text">Coloque uma foto do seu produto</h1>
        <button className="btn-f1" type="submit">TROCAR FOTO</button>
        <p className="text">Atenção essa foto será publica </p>
        <h3 className="text">Telefone para contato :</h3>
        <input className="te" type="text"/>
        </div>
        <div className="quad">
          TROQUE A FOTO
        </div>
        </div>
        <div className="faixa-2">
            <div>   
                <h3>Digite o nome do produto:</h3>
                <input className="te-2" type="text"/>
                <h3>Digite o valor do produto:</h3>
                <input className="te-2" type="text"/>
                <h3>Qual o tipo do seu Produto</h3>
                <input className="te-2" type="text"/>
            </div>
            <div className="org-2">
                <h3>Coloque a descrição do produto:</h3>
                <input className="te-3" type="text"/>
                <button className="btn-f1">PRONTO</button>
            </div>
        </div>
    </div>

</div>  
    )
}