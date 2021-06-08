import React from 'react'
import axios from "axios"
export default function Login(props) {

    let user={email:"",passward:""}

    function getData({target}){
        user[target.name]=target.value;
        console.log(user)
      
    }



   async function sendData(e){
        e.preventDefault()
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signin",user)

      console.log(data)
        if( data.message=="success")
        {
            localStorage.setItem("token", data.token)
            props.history.push("/home")
        }else{
            localStorage.clear()
        }

    }

  
    return (
        <div>
              <div className="container my-5 py-5">
        <div className="col-md-5 m-auto text-center">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <input onChange={getData} placeholder="Enter email" name="email" type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <input onChange={getData} placeholder="confirm Password" name="password" type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-info w-100">SignIn</button>
            </form>
        </div>
    </div>
        </div>
    )
}
