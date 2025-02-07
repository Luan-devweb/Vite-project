
import React from "react";
import Header from "../../componrnts/header/header";
import './styles.css';
import VideoTrailer from "../../assets/trailer.mp4";
import Cards from "../../componrnts/cards";
import Footer from "../../componrnts/footer";


function Home(){
  
    
    return(
      <>
        <Header/>
        <div id="banner"></div>
        <div id="trailer-conteniner">
          <div className="content">
            <video controls className="trailer">
              <source src={VideoTrailer}></source>
              Seu navegador não suporta o elemento video.
            </video>
            <div id="sinopse">
              <p className="description">
                The Batman é um filme de super-herói estadunidense, 
                baseado no personagem Batman da editora DC Comics,
                um "reboot" da franquia Batman produzido pela DC Films, 
                6th & Idaho e Dylan Clark Productions, e dirigido por Matt Reeves, 
                roteirista junto com Peter Craig.
              </p>
              <button className="button">Comprar ingresso</button>
            </div>
          </div>
        </div>
        <Cards/>
        <Footer/>
        
        
      </>
    );
}
export default Home