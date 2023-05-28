import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Vehicledetails() {
    let [details,setDetails]=useState();
  useEffect(()=>{
    var requestOptions = {
        method: 'GET',
        headers:{"ContentType": "application/json"}
       
      };
      
      fetch("http://localhost:9091/getdetails", requestOptions)
        .then(response => response.json())
        .then((data)=>{
          setDetails(data);
          console.log(data);
        })
        .catch(error => console.log('error', error));

    })


  return (
    <div>
        <div className="deatils">
          {details&& details.map((car)=>{ return <div className="details_info">
            <p>Name  :{car.vname}</p>
            <p>Model :{car.vmodel}</p>
            <p>Color :{car.vcolor}</p>
            <p>Price  :{car.vprice}</p>
          </div> }) }

        </div>

    </div>
  )
}

export default Vehicledetails