import React from "react";
import './styles.css'
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.jpeg';

function Header({active}){



  return(
     <header style={{borderBottom: active? '2px solid #777007' : 'none'}}>
       <img src={Logo}  id='logo' alt="" />
       <nav>
        <ul className="ulHeader">
          <Link style={{textDecoration: 'none'}} to="/">
            <li className="listHeader">Home</li>
          </Link>

          <Link style={{textDecoration: 'none'}} to ="/contato">
            <li className="listHeader" >Contato</li>
          </Link>

          <Link style={{textDecoration: 'none'}} to="/fotos">
            <li className="listHeader">Fotos</li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/comentarios">
            <li className="listHeader">Comentário</li>
          </Link>
          
           
           
        </ul>
       </nav>
     </header>
    )
 
}



export default Header;