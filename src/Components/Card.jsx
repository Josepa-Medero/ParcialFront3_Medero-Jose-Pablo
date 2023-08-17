import React from "react";


const Card = ({piloto, setFecha}) => {
    
    return (
      <div >
          <h2 style={{backgroundColor: 'brown'}}>{piloto.nombre}</h2>
          <h4>{piloto.tipo}</h4>
          <button style={{backgroundColor: 'orange'}} onClick={() => setFecha(true)}>Confirmar fecha</button>
      </div>
    )
  }
  
  export default Card