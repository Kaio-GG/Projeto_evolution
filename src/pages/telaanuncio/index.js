import './index.scss';
import { Link } from "react-router-dom";

export default function index() {
    return(
        <main className="mae-anuncio">
        <div className="cabeçalho">
            <img src='' className="log" alt=""/>
            <div className="btns">
          
              <Link  className="btn1" style={{textDecoration: 'none'}} href="/home">
                 INICIO
              </Link> 
              <Link 
               className="btn2" style={{textDecoration: 'none'}}href="login">
                LOGIN
             </Link> 
        </div>
    </div>
    <div className="faixa">
        <div className="anuncio-1">
            <div className="tex">INFORMAÇÃO</div>
            <div className="dt">
            <div className="t2">Nome:</div>
            <div className="t3">LG Velvet</div>
            <div className="t2">Preço:</div>
            <div className="t3">2.999,00</div>
            <div className="t2">Contato:</div>
            <div className="t3">11 957705490</div>
        </div>
    </div>
        <div>
            <img className="anuncio" src="../../../a" alt=""/>
    </div>
</div>
    <div className="anuncio-3">
        <h1>DESCRIÇÃO</h1>
      <p> 
           Descrição do produto O LG 
          Velvet é um smartphone que po
          ssui design sofisticado e conta com
           uma grande tela de 6.8” P
           -OLED para que sua experiênci
           a seja de cinema, com um a
           primorado som com tecnologia 3D e Inte
           ligência Artificial. Tudo para 
           que o usuário tenha a máxima qualid
           ade de som e imagem.
      </p>
    </div>
    </main>
    )
    
}