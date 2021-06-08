import React, {useEffect, useState} from 'react'
import axios from "axios"
import jwt_decode from "jwt-decode";
import $ from "jquery"
export default function Home() {

    let [notes,setNotes]=useState( [] )
    let [again,setAgain]=useState( 0 )
    
    let token = localStorage.getItem('token')
     let userID
    try {
        let decoded = jwt_decode(token);//fakeet el token
        userID=decoded._id

        // console.log(decoded)
        
    } catch (error) {
        localStorage.clear()
    }




     useEffect(async () => {
        let{data}=await axios.get("https://route-egypt-api.herokuapp.com/getUserNotes",{
            headers:{

                userID,
                token

            }
         })
           
        

        if(data.message == "success"){
                setNotes(data.Notes)
        }
     }, [again])

     console.log(notes);

    //  get notes
    let note ={title:"",desc:"",userID:userID,token}
    function getNotes({target}){
     note[target.name]=target.value
     console.log(note)
    }

    //  /send data of add note
    async  function sendData(e){
        e.preventDefault()
        e.target.reset()
        
        //here i will call data
  let {data} = await axios.post("https://route-egypt-api.herokuapp.com/addNote",note)
    console.log(data)
    if(data.message=="success"){
        setAgain(Math.random())
        $("#exampleModal").modal('hide')
    }
}





    return (
        <>
          <div className="container my-5">
        <div className="col-md-12 m-auto text-right">
            <a className="add p-2 btn" data-toggle="modal" data-target="#exampleModal">
                <i className="fas fa-plus-circle"></i> Add  New</a>
        </div>
    </div>


    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form  onSubmit={sendData}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
                    </div>
                    <div className="modal-body">
                        <input onChange={getNotes} placeholder="Type Title" name="title" className="form-control" type="text"/>
                        <textarea onChange={getNotes} className="form-control my-2" placeholder="Type your note" name="desc" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-info"><i className="fas fa-plus-circle"></i> Add Note</button>
                    </div>
                </div>
            </div>
        </form>
    </div>



    {/* <!-- ==========================Notes=============================== --> */}

    <div className="container">
        <div className="row">
            {notes?.map((value,index) => {
                return <div key={index} className="col-md-4 my-4">

                <div className="note p-4">
                    <h3 className="float-left">Title </h3>
                    <a href="#"><i className="fas fa-edit float-right edit"></i></a>
                    <a href="#"> <i className="fas fa-trash-alt float-right px-3 del"></i></a>
                    <span className="clearfix"></span>
                    <p> hadeer Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam dolores eius asperiores ipsa nihil, itaque dicta et at deleniti esse saepe architecto neque necessitatibus quos, pariatur consequuntur maxime accusantium. </p>
                </div>
            </div>

            })}

        </div>
    </div>



        </>
    )
}
