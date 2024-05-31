import React, { useState } from 'react'
import '../css/login.css';

//import UserForm from './UserForm'
const Login = ({setUser}) => {

   
  const [barrio, setBarrio] = useState("")
  const [dni, setDni] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()

      if (barrio === "" || dni === "" || password === "" ){
          setError(true)
          return
      }
      setError(false)
      setUser([dni])
  }

  
  console.log()
return (
  <div>
    <h1>Login</h1>
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
  {error && <p>"Algun campo esta vacio"</p> }
</div>
)}
export default Login