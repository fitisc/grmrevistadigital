import React, {useState} from 'react'
import Admin from '../admin/Admin';
import Home from './Home';
import Login from './Login';
import '../css/main.css'

const Main = () => {
  const [user, setUser]= useState([])

  return (
    <div>
       {
      user.id = "admin" ? <Admin/> :   <Home />
    }
    {
      user.length > 0 ? <Login setUser={setUser}/> :   <Home />
    }
    
   
    
    </div>
  )
};

export default Main