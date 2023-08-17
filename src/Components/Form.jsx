import { useState } from 'react'

const Form = () => {

    const [espectador, setEspectador] = useState({
        nombre: '',
        pista: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false) 

    const handleSubmit = () => {
        if(espectador.nombre.length > 3  && espectador.pista.length >= 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    

    console.log(espectador)
  return (
    <div>
        <label>Nombre del espectador</label>
        <input type="text" value={espectador.nombre}
            onChange={(event) => setEspectador({...espectador, nombre: event.target.value})}
        />
        <label>Nombre de la pista</label>
        <input type="text" value={espectador.pista}
            onChange={(event) => setEspectador({...espectador, pista: event.target.value})}
        />
        <button onClick={handleSubmit}>Enviar</button>
        {show && <h3 style={{backgroundColor: 'green'}}>Tu reserva para la pista {espectador.pista} fue realizada con exito</h3>}
        {error && <h4 style={{backgroundColor: 'red'}}>Por favor chequea que la información sea correcta.</h4>}
    </div>
  )
}

export default Form