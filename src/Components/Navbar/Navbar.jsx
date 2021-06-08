import React from 'react'
import jwt_decode from "jwt-decode";
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {

    let {pathname} = useLocation()
   //to decode token an show fname,lname
   let token = localStorage.getItem('token')
   let decoded
   try {
        decoded = jwt_decode(token);
       console.log(decoded)
       
   } catch (error) {
       localStorage.clear()
   }

//    logout   //
    function logout(){
        localStorage.clear()
    }

    return (
        <>
               <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="/">Notes</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
             { pathname != '/home' ? <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>:   <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                    <span className="nav-link ">welcome : {decoded?.first_name} {decoded?.last_name}</span>
                      </li>
                  
                    <li className="nav-item">
                        
                        <NavLink onClick={logout} className="nav-link" to="/login">LogOut</NavLink>
                       
                    </li>

          
                </ul>}
            </div>
        </div>
    </nav>
        </>
    )
}
