import React, {useState} from 'react'

import Home from './Home';
import Login from './Login';
import '../css/main.css'

const Main = () => {
  const [user, setUser]= useState([])

  return (
    <div>
    {
      user.length > 0 ? <Login setUser={setUser}/> :   <Home />
    }
    
   
    
    </div>
  )
};

export default Main