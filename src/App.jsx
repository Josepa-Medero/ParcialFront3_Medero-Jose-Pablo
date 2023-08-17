import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {

  const [fecha, setFecha] = useState(false)

  let pilotos = [
    {id: 1, nombre: 'Mariano Buenahora', tipo: 'Piloto de cachilas'},
    {id: 2, nombre: 'Michael Schumacher', tipo: 'Piloto de carga aérea'},
    {id: 3, nombre: 'Juan Manuel Fangio', tipo: 'Piloto turístico'},
  ]

  return (
    <>
      <h1 style={{color: 'yellow'}}>Venta de tickets para carrera</h1>
      {pilotos.map((piloto) => <Card key={piloto.id} piloto={piloto} setFecha={setFecha}/>)}
      {fecha && <Form/>}

    </>
  )
}

export default App
