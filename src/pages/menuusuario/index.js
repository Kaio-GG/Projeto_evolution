import { Link } from "react-router-dom"
import './index.scss'
import React from 'react';


export default function index (){
    return(
        <div className="mae-usuario">
        <div className="cabeçalho">
            <div className="cbl_org">
            <img  src="../../assets/image/foto-usuario.svg" className="img" alt=""/>
            <div className="tl-1">
                NOME DO USUARIO
                <div className="linha"></div>
            </div>
            </div>
            <div className="btns">
              <Link  className="btn1" style={{textDecoration: 'none'}} to="/publicar">
                PUBLICAR PRODUTO
              </Link> 
              <Link  className="btn2" style={{textDecoration: 'none'}} to="/teladeinicio">
                INICIO
            </Link> 
            </div>
    </div>
    <div className="body">
        <div className="tl">
           MEUS PRODUTOS
            <div className="linha"></div>
        </div>
        <div className="faixa-1">
            <div className="anuncio">
                <img className="imag" src="../../assets/image/console-exe1.png" alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src="../../assets/image/console-exe1.png" alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration: 'none'}} to="/telaanuncio">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-5">
                <img className="imag" src="../../assets/image/console-exe1.png" alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
        </div>
            <div className="faixa-2">
                <div className="anuncio-2">
                    <img className="imag" src="../../assets/image/celular-exe.svg" alt=""/>
                    <div className="ali">
                    <div className="quad">
                        <p> Preço <br/>
                            2.374,90</p>
                    </div>
                    <div className="quad-2">
                        <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                    </div>
                    </div>
                </div>
                <div className="anuncio-2">
                    <img className="imag" src="../../assets/image/celular-exe.svg" alt=""/>
                    <div className="ali">
                    <div className="quad">
                        <p> Preço <br/>
                            2.374,90</p>
                    </div>
                    <div className="quad-2">
                        <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                    </div>
                    </div>
                </div>
                <div className="anuncio-5">
                    <img className="imag" src="../../assets/image/celular-exe.svg" alt="" />
                    <div className="ali">
                    <div className="quad">
                        <p> Preço <br/>
                            2.374,90</p>
                    </div>
                    <div className="quad-2">
                        <Link className="a1" style={{textDecoration: 'none'}} to="../publicar/index.html">Nintendo Switch </Link> 
                    </div>
                    </div>
                </div>
                </div>
    </div>
    </div>
    );
}