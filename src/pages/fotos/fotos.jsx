import React, { useState, useEffect, useRef } from "react";
import Header from "../../componrnts/header/header";
import './fotos.css';
import Footer from "../../componrnts/footer";

function Fotos() {
  const [fotos, setFotos] = useState(0);
  const [inseriFoto, setInseriFoto] = useState(false);
  
  const urlPeolpe = {
    1 : "https://as2.ftcdn.net/v2/jpg/05/61/44/59/1000_F_561445942_7AFG5FhiZYxR4WEJLxmkM8pnvJAuPLKZ.jpg",
    2 : "https://i.pinimg.com/736x/46/62/9b/46629bb7d855d0e412270dc7b6bc7790.jpg",
    3 : "https://i.pinimg.com/736x/90/15/3f/90153ff25fcf7724d92a0815491a7e55.jpg",
    4 : "https://i.pinimg.com/736x/56/b6/b8/56b6b8919a1039703ee4091ead4d795f.jpg",
    5 : "https://i.pinimg.com/736x/59/7d/71/597d71ee5512a420266cb466e738f0c9.jpg",
    6 : "https://i.pinimg.com/736x/db/3f/d3/db3fd3ebcf1c17ac16ed73b34da95384.jpg",
    7 : "https://i.pinimg.com/736x/b6/5f/58/b65f5854913181d2a403a502f5e187eb.jpg",
    8 : "https://i.pinimg.com/736x/e0/6e/e9/e06ee905e9bce973f94180e728a692f5.jpg",
    9 : "https://i.pinimg.com/736x/cd/69/60/cd6960de4a80d04ac48584a7376d5eb2.jpg",
    10 : "https://i.pinimg.com/236x/07/e9/80/07e980cbaa3e747465e3ccf878a6e6da.jpg",
    11 : "https://i.pinimg.com/736x/e9/87/e1/e987e15d59971c80ccbe946d715d7176.jpg",
    12 : "https://i.pinimg.com/736x/30/55/f3/3055f3b7ba0349cb7e32771375732f04.jpg",
    13 : "https://i.pinimg.com/736x/2b/42/89/2b4289209f3a35bc7c05ad322ce29a77.jpg",
    14 : "https://i.pinimg.com/736x/4f/19/16/4f1916ca414dc1f6981b313403aae6b5.jpg",
    15 : "https://i.pinimg.com/736x/9f/0a/ff/9f0affcd7cbac87045afd35c3161bb97.jpg",
    16 : "https://i.pinimg.com/736x/f9/b4/0a/f9b40a6643d88407f95701d392dd95dd.jpg",
    17 : "https://i.pinimg.com/736x/4b/85/ad/4b85add5a5dfe705d99f33e4fb3c87d7.jpg",
    18 : "https://i.pinimg.com/736x/8e/97/e1/8e97e1af7812430b440dc9986fe1add3.jpg",
    19 : "https://i.pinimg.com/736x/f3/76/e9/f376e99789f1fb5db494864fbcadbe43.jpg",
    20 : "https://i.pinimg.com/474x/2c/40/4d/2c404d81dbb517ce4a8cebaed2b6d1f0.jpg",
  };

  // Atualiza o estado inseriFoto quando fotos muda
  useEffect(() => {
    if (fotos > 0) {
      setInseriFoto(true);
    }
  }, [fotos]);

  return (
    <div className="conteiner-fotos">
      <Header />

      {/* Div de Exibição da Foto */}
      {inseriFoto && (
        <div id="verFotos" className="verFotos" onClick={() => setInseriFoto(false)}>
          <img src={urlPeolpe[fotos]} alt="Foto selecionada" />
        </div>
      )}

      {/* Lista de Fotos */}
      <div className="fotos">
        {Object.keys(urlPeolpe).map((key) => (
          <img
            key={key}
            src={urlPeolpe[key]}
            alt={`Imagem ${key}`}
            onClick={() => setFotos(Number(key))}
          />
        ))}
      </div>

      <Footer name="fotos" />
    </div>
  );
}

export default Fotos;
