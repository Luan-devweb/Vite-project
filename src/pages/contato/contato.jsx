import React, { createElement, useEffect, useState } from "react";
import Header from "../../componrnts/header/header";
import './contato.css'
import Footer from "../../componrnts/footer";



function Contato(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mgs, setMgs] = useState(false);
    function enviarForm(){
      
      if(nome.trim() && email.trim()){
        setMgs(true);
        setTimeout(() => {
          setMgs(false);
          setTimeout(() =>{
            window.location.reload();
          },1000)
        }, 3000);
      }else if(!nome.trim() && email.trim()){
        alert('Preencha Campo "Nome"')
      }else if(!email.trim() && nome.trim()){
        alert('Preencha Campo "Email"')
      }else{
        alert('Preencha todos os campos obrigatorio!')
      }
  
    }
     
    return(
      <>
        <div className="mgsEnviada"><div style={{ height: mgs ? "25px" : "0px", transition: "height 0.5s ease-in-out", padding: mgs ? "5px" : "0px" }}>Menssagem enviada com sucesso!</div></div>
        <Header active = {true}/>
        <div className="contato-conteiner">
          <h1>Entre em Contato com Batman</h1>
          <div className="Contato">
            <div className="form">

              <label htmlFor="name">Nome</label>
              <input type="name" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
              <label htmlFor="e-mail">Email</label>
              <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="text">Assunto</label>
              <textarea placeholder="Digite seu assunto"/>
            </div>
            <div className="bottonContato">
              <button id="enviar" onClick={() => {enviarForm()}} >Enviar</button>
            </div>
            <div id="exemploForm">
              <h3 style={{fontSize: "25px", color:"#fff"}}>Exemplo de dados necessários</h3>
              <li>Nome do visitante</li>
              <li>E-mail para contato</li>
              <li>Mensagem opcional</li>
              
            </div>
          </div>
          
          <Footer/>
        </div>

      </>
        
      
    );
}
export default Contato