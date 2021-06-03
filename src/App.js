import React, { useState} from 'react';

import './App.css';

import Articulo from './componentes/Titulo';

const data = [{
  id:1,
  nombre : 'PROD 1',
  precio: 123,
  url: 'https://miro.medium.com/max/650/1*5hUCDXcPEN7UXqGGmC-cIg.jpeg',
  stock: 222
},
{
  id:2,
  nombre : 'PROD 2',
  precio: 123,
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF09NpP7Fb8hpoEyAZULKJp3u8Poi-BOqp39RyjlkF31xBcf52dJgZceY2MYLMG0U-lQI&usqp=CAU',
  stock: 222
},
{
  id:3,
  nombre : 'PROD 3',
  precio: 123,
  url: 'https://d1ih8jugeo2m5m.cloudfront.net/2019/11/04-La-identidad-de-marca-en-la-fotografa-de-producto-1024x683.jpg',
  stock: 222
},
{
  id:4,
  nombre : 'PROD 4',
  precio: 123,
  url: 'https://1.bp.blogspot.com/-5ETJCHwnQSI/Xq56kQJzp7I/AAAAAAAAiMg/ViyAq04RrF8XtY7Z6sSbSejPRYO79z99ACK4BGAsYHg/w480-h640/olena-sergienko-perfume-channel.jpg',
  stock: 222
},
];

function App() {

  const [ contador, setContador ] = useState( 0 );
  
  const incrementar  = (id) =>{
    console.log('Id producto: ', id);
    setContador ( contador + 1);   
  }

  return (

   <> 

     <div className="App">

         
    CARRITO

     <h2>{contador}</h2>
     
     </div>

     <div className="App">

  { data.map( (item) =>
    <Articulo onIncremento={incrementar} item={item} id={item.id} />
  ) }
        

     </div>

   </>

  );
}

export default App;
