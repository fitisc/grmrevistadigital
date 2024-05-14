import React from 'react'
import { useState } from "react"

const UserForm = () => {
    const [barrio, setBarrio] = useState("")
    const [dni, setDni] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleChange = (e) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (barrio === "" || dni === "" || password === "" ){
            setError(true)
            return
        }
        setError(false)
    }

    fetch = ("https:localhost:8080/api/user/save").then(function(response)).catch(error => {response.status});
    console.log()
  return (
    <div>
    <form className='login_form' action="" method="post" onSubmit={handleSubmit}>
        <label >Barrio</label>
        <input 
        type="text" 
        name="barrio" 
        id="barrio"
        value={barrio}
        onChange={e => setBarrio(e.target.value)}
        />

        <label >DNI</label>
        <input 
        type="text" 
        name="dni" 
        id="dni"
        value={dni}
        onChange={e => setDni(e.target.value)}
        />

        <label >Contraseña</label>
        <input 
        type="current-password" 
        name="password" 
        id="password" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        />

        <button value="ingresar">Ingresar</button>
        
    </form>
    {error && <p>Algun campo esta vacio</p> }
</div>
  )
}

export default UserForm