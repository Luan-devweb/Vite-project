import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './comet.css';
import Footer from "../../componrnts/footer";
import Header from "../../componrnts/header/header";


function Comentario(){
    
    
    return(
      <div className="borycoment">
        <Header/>
        <nav className="inicio">
          <nav className="foto1"></nav>
          <nav className="foto2"></nav>
          <nav className="foto3"></nav>
        </nav>
        <p className="tagP">Comentários</p> 
        
        <ul id="Comentario">
            <li className="ana">
              <b>Ana Silva</b><br />
              Batman 2022 é uma obra-prima visual! A cinematografia e os efeitos especiais elevaram a experiência a um nível completamente novo.
            </li>
            <li className="carlos">
              <b>Carlos Oliveira</b><br />
              Robert Pattinson's performance as Batman was surprising. He brought an emotional depth to the character that we hadn't seen before.
            </li>
            <li className="mariana">
              <b>Mariana Costa</b><br />
              Os vilões neste filme são arrepiantes! O enredo é cativante e mantém você na ponta da cadeira do início ao fim.
            </li>
            <li className="ricardo">
              <b>Ricardo Santos</b><br />
              A trilha sonora é simplesmente épica. Cada nota contribui para a atmosfera sombria e intensa do universo do Batman.
            </li>
            <li className="Isabel">
              <b>Isabel Pereira</b><br />
              A abordagem mais sombria e realista de Gotham City deu ao filme uma sensação autêntica. A cidade é quase um personagem por si só.
            </li>
            <li className="joao">
              <b>João Lima</b><br />
              The chemistry between Batman and Catwoman (played by Zoë Kravitz) is palpable. I loved the dynamic between the characters.
            </li>
            <li className="patricia">
              <b>Patrícia Mendes</b><br />
              The complex narrative with unexpected twists keeps you thinking even after the cinema lights come on. A plot worthy of the Dark Knight.
            </li>
            <li className="pedro">
              <b>Pedro Almeida</b><br />
              As cenas de ação são de tirar o fôlego. A coreografia e a execução são impecáveis, mostrando um Batman mais habilidoso do que nunca.
            </li>
            <li className="beatriz">
              <b>Beatriz Santos</b><br />
              O design de produção é fenomenal. Cada detalhe, desde os trajes até os cenários, contribui para a estética visual única do filme.
            </li>
            <li className="lucas">
              <b>Lucas Silva</b><br />
              Batman 2022 é uma reinvenção bem-sucedida do mito do Batman. Uma mistura perfeita de elementos clássicos e inovações contemporâneas que 
              promete agradar tanto aos fãs quanto aos novatos no universo do Homem-Morcego.
           </li>
        </ul>
        <form id="coment" action="/comentarios">
           <input style={{display: 'block'}} type="text" name="Comente" id="adcoment" placeholder ="Adcione seu Comentario!"/>
           <button className="comentenviar">Enviar</button>
        </form>
       <Footer/>
      </div>
      
    );
}
export default Comentario