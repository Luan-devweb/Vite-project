import React, { useContext } from "react";
import { UserContext } from "../../context/usetContext";

function Profile(){

    const {login} = useContext(UserContext)
    return(
        <div>
           {
            login ? 'Faça seu login para mais informações' : 'Olá, Boa tarde!!!'
           }
        </div>
    );
}

export default Profile;