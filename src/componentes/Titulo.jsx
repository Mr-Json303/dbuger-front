import React from 'react';

import './Titulo.css';

function Titulo(props) {

    const { item , onIncremento } = props;
  
    const incrementar  = () =>{
        onIncremento(item.id); 
      }

      // console.log(item.id);

    return( 
        <>   
        <h2 className="base">  {item.nombre} <br />  
        <img src={item.url}  width="300" />
        <br /> 
        $ {item.precio} 
        <br /> 
        <button className="boton" type="button" onClick={() => incrementar()} > INCREMENTAR</button>
         </h2>
    </>
    );
  
  }

export default Titulo;

