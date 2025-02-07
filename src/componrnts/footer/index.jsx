import React from "react";
import Logo from '../../assets/bat-logo.jpg';
import './styles.css';

function Footer(name){
    return (
      
        <footer style={{ backgroundColor: name === 'fotos' ? 'transparent' : '#000'}}>
          <img src={Logo} alt="" style={{width: '100px'}}/>
          <span> Todos os direitos reservados ©</span>
          <span> Desenvolvido por: Luan Rodrigues</span>
          
        </footer>
      
        
    );
}
export default Footer;