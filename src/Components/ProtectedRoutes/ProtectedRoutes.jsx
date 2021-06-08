import React from 'react'
import jwt_decode from "jwt-decode";
import { Redirect ,Route} from 'react-router';

export default function ProtectedRoutes(props) {
  
    let token = localStorage.getItem('token')

    try {
        let decoded = jwt_decode(token);
        console.log(decoded)
        
    } catch (error) {
        localStorage.clear()
    }


    if (token) {
       return  <Route {...props}/>
    }else{
      return  <Redirect to="/login"/>
    }
}
