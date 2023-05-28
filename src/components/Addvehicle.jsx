import React, { useRef, useState } from 'react'
import {Link} from "react-router-dom"
function Addvehicle() {  
    let [vstatus,setVstatus]=useState(false);
  let  vname=useRef();
  let  vmodel=useRef();
   let vprice=useRef();
   let vcolor=useRef();
 const handelAdd=(e)=>{
    e.preventDefault();
    let newvehicle={ 
        vname:vname.current.value,
        vmodel:vmodel.current.value,
        vcolor:vcolor.current.value,
        vprice:vprice.current.value
}
    
    fetch("http://localhost:9091/addvehicle",{method:"POST",
                                         headers:{"Content-Type":"application/json"},
                                        body:JSON.stringify(newvehicle)
                                    }
                                    )
    .then(()=>{
        setVstatus(true);console.log(newvehicle);
    })
                                         
    
 }

  return (
    <div>
        <div className="inputs">
            <form onSubmit={handelAdd} className='addform'>
                <input type="text" placeholder='Add vehicle name' ref={vname} />
                <input type="text" placeholder='Add vehicle model'  ref={vmodel}/>
                <input type="text" placeholder='Add vehicle  color' ref={vcolor} />
                <input type="text" placeholder='Add vehicle price' ref={vprice} />
                <input type="submit" className='addbtn' value="Add vehicle" />
            </form>
            <div>
            {vstatus&& <h1> Vehicle added succesfully</h1>}
            </div>
        </div>
        <h1 style={{textAlign:"center"}}><button><Link to="/">Back to home</Link></button></h1>

    </div>
  )
}

export default Addvehicle