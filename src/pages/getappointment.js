import React from "react";
import { useState } from "react";
import './getappointment.css';

var recfound = false;

function GetAppointment()
{
  const [clinicid, setclinicid] = useState("");
  const [message, setMessage] = useState("");
  const [records, setRecords] = useState([]);
  if (clinicid==="") {
    recfound=false
  };
   const Click_Find = async (e)  =>
    {
      e.preventDefault();
      try {
       await fetch('/api/outputs/Getoutputbyid/' + clinicid)
             .then(response => {
              setMessage("")
              if (response.status === 404) {
                 setMessage("not found!");
                 records.appointmentDate="";
                 records.firstName="";
                 records.lastName="";
                 records.patientID="";
                 records.appointmentStartTime="";
                 records.appointmentEndTime="";
                 recfound=false;
                 return response.json();
              }    
                recfound=true;
                return response.json();
             })
             .then(data => setRecords( data))
            
            
             .catch(err => console.log(err))
          }
          catch (err) {
            console.log(err);
            
         }
    }
    
    const Click_Del = () =>
     {
            if (window.confirm('Are you sure you wish to delete this item?') === true ) 
              {
                Del_Rec(); 
              }  
    }

    const Del_Rec = async (e)  =>
    {
            try {
            
            let res = await fetch('/api/outputs/deleteoutputbyid/' + clinicid, {method: 'DELETE', 
              headers: {"Content-Type" : "application/json" }});
                  
                    if (res.status === 404) {
                       setMessage("not found!");
                       records.appointmentDate="";
                       records.firstName="";
                       records.lastName="";
                       records.patientID="";
                       records.appointmentStartTime="";
                       records.appointmentEndTime="";
                    } else {    
                    setMessage("DELETED!")};
                      
                }
                catch (err) {
                  console.log(err);
                  
               }          
    }
   
  return (
      <div className="GetAppointment">
      <form >
        <div className="row">
          <div className="col-25">
          <label for="clinicid">Clinic ID</label>
          </div>
          <div className="col-75">
            <input type="text"
             value={clinicid}
             placeholder="enter the clinic ID here"
             onChange={(e) => setclinicid(e.target.value)}
            />
          </div>
       </div>

       <div className="row">
          <div className="col-25">
          <label for="appointmentdate">Appointment Date</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={records.appointmentDate}
            id="appointmentDate"
            readOnly
            />
          </div>
       </div>

       <div className="row">
          <div className="col-25">
          <label for="firstname">First Name</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={records.firstName}
            readOnly            
            />
          </div>
       </div> 

       <div className="row">
          <div className="col-25">
          <label for="lastname">Last Name</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={records.lastName}
            readOnly
            
            />
          </div>
       </div> 

       <div className="row">
          <div className="col-25">
          <label for="patientid">Patient ID</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={records.patientID}
            readOnly
            />
          </div>
       </div> 
          
       <div className="row">
          <div className="col-25">
          <label for="appointmentstarttime">Appointment Start Time</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={records.appointmentStartTime}
            readOnly
            />
          </div>
       </div> 

       <div className="row">
          <div className="col-25">
          <label for="appointmentendtime">Appointment End Time</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={records.appointmentEndTime}
            readOnly            
            />
          </div>
       </div> 

        <div className="row">
        <button onClick={Click_Find} id="get_id"> Find </button>
        <button disabled={!recfound} onClick={Click_Del} id="del_id"> Delete </button>
       
        </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
     
      
    
}

export default GetAppointment;