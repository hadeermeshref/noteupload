import React from 'react'
import axios from "axios"
export default function Register(props) {

    let user={first_name:"",last_name:"",email:"",passward:""}

    function getUser({target}){
        user[target.name]=target.value;
        console.log(user)
    }

   async  function sendData(e){
        e.preventDefault()
        //here i will call data
  let {data} = await axios.post("https://route-egypt-api.herokuapp.com/signup",user)

     console.log(data)
     if(data.message=="success"){
      props.history.push("/login")
     }
    }

    return (
        <>
           <div className="container my-5 py-5">
        <div className="col-md-5 m-auto text-center">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <input onChange={getUser} placeholder="Enter your first name" name="first_name" type="text" className=" form-control" />
                </div>

                <div className="form-group">
                    <input onChange={getUser} placeholder="Enter your last name" name="last_name" type="text" className=" form-control" />
                </div>

                <div className="form-group">
                    <input onChange={getUser} placeholder="Enter email" type="email" name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <input onChange={getUser} placeholder="Enter you password" type="password" name="password" className="form-control" />
                </div>
                <div className="form-group">
                    <input onChange={getUser} placeholder="confirm Password" type="password" name="confirmPassword" className="form-control" />
                </div>
                <button type="submit" className="btn btn-info w-100">SignUp</button>
            </form>
        </div>
    </div>
        </>
    )
}
