import { useState } from "react";
import './updappointment.css';

var recfound = false;

function UpdAppointment () {

  const [clinicid, setclinicid] = useState("");
  const [appointmentdate, setappointmentdate] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [patientid, setpatientid] = useState("");
  const [appointmentstarttime, setappointmentstarttime] = useState("");
  const [appointmentendtime, setappointmentendtime] = useState("");
  const [message, setMessage] = useState("");
  
  if (clinicid==="") {
    recfound=false
    
  };
 
    const Click_Find = (e)  =>
    {
      
      e.preventDefault();
      try {
      
  
          fetch('/api/outputs/Getoutputbyid/' + clinicid)
             .then(response => {
              setMessage("")
              if (response.status === 404) {
                 setMessage("not found!");
                
              }    
                recfound=true;
                return response.json();
             })
             .then(data => (setappointmentdate(data.appointmentDate) +
                           setfirstname(data.firstName) +
                           setlastname(data.lastName) +
                           setpatientid(data.patientID) +
                           setappointmentstarttime(data.appointmentStartTime) +
                           setappointmentendtime(data.appointmentEndTime)
                          )
            )
                        
             .catch(err => console.log(err));
          }
          catch (err) {
            console.log(err);  
         }    
    }
    
    const Click_Upd = (e) =>
     {
           
            if (window.confirm('Are you sure you wish to Update this item?') === true ) 
              {
                Upd_Rec(e); 
              }  
    }
    
    const Upd_Rec = async (e)  =>
    {
            e.preventDefault();
            try  
            {   
                let res = await fetch("/api/outputs/Updoutputbyid/" + clinicid, {
                    
                method: "PUT",
                     
                headers: {"Content-Type" : "application/json" },
                     
                body: JSON.stringify({
                          clinicid        :clinicid,
                          appointmentdate :appointmentdate, 
                           firstname       :firstname , 
                           lastname        :lastname , 
                           patientid       :patientid, 
                           appointmentstarttime :appointmentstarttime, 
                           appointmentendtime    :appointmentendtime
                      }),
                    });
                    //const resJson = await res.json();
                    if (res.status === 204) {
                      setclinicid("");
                      setappointmentdate("");
                       setfirstname("");
                       setlastname("");
                       setpatientid("");
                       setappointmentstarttime("");
                       setappointmentendtime("");
                      setMessage("UPDATED !!");
                    } else {
                      setMessage("Some Update error occured");
                    }
            } catch (err) {
                    console.log(err);
            }                  
    }    

  return (
     
      <div className="UpdAppointment">
      <form >
        <div className="row">
          <div className="col-25">
          <label for="clinicid">Clinic ID</label>
          </div>
          <div className="col-75">
            <input type="text"
             disabled={recfound}
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
            value={appointmentdate}
            onChange={(e) => setappointmentdate(e.target.value)}
            />
          </div>
       </div>

       <div className="row">
          <div className="col-25">
          <label for="firstname">First Name</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={firstname}         
            onChange={(e) => setfirstname(e.target.value) }
            />
          </div>
       </div> 

       <div className="row">
          <div className="col-25">
          <label for="lastname">Last Name</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={lastname}         
            onChange={(e) => setlastname(e.target.value)}
            />
          </div>
       </div> 

       <div className="row">
          <div className="col-25">
          <label for="patientid">Patient ID</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={patientid}         
            onChange={(e) => setpatientid(e.target.value)}
            />
          </div>
       </div> 
          
       <div className="row">
          <div className="col-25">
          <label for="appointmentstarttime">Appointment Start Time</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={appointmentstarttime}         
            onChange={(e) => setappointmentstarttime(e.target.value) }
            />
          </div>
       </div> 

       <div className="row">
          <div className="col-25">
          <label for="appointmentendtime">Appointment End Time</label>
          </div>
          <div className="col-75">
            <input type="text"
            value={appointmentendtime}         
            onChange={(e) => setappointmentendtime(e.target.value) }
            />
          </div>
       </div>  
  
        <div className="row">
        <button onClick={Click_Find} id="get_id"> Find </button>
        <button disabled={!recfound} onClick={Click_Upd} id="upd_id"> Update </button>
        </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
    
}

export default UpdAppointment;