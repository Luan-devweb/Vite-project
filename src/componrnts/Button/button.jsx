import React from "react";
import './styles.css'

function Button({name, active, onClick, teste}){
    
    
    return(
      <div className= 'conteinerButton'> 
        <button onClick={() => onClick(20 + teste)} className={active ? 'button' : 'buttonFalse'} >{name}</button>
        ejdnhjwb frhjbhhbwhjfbwubw wrfhjwubujfuw
      </div>
      
    );
}
export default Button