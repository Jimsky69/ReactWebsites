import React from "react";
import { useState } from "react";
import './addappointment.css';

 
function AddAppointment () {
  const [clinicid, setclinicid] = useState(0);
  const [appointmentdate, setappointmentdate] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [patientid, setpatientid] = useState(0);
  const [appointmentstarttime, setappointmentstarttime] = useState("");
  const [appointmentendtime, setappointmentendtime] = useState("");
  const [message, setMessage] = useState("");  
  const handleSubmit = async (e) => {
   
        e.preventDefault();
        try {
           
            let res = await fetch("/api/outputs/Insertoutput", {
          
            method: "POST",
           
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
          
          if (res.status === 200) {
            setclinicid("");
            setappointmentdate("");
            setfirstname("");
            setlastname("");
            setpatientid("");
            setappointmentstarttime("");
            setappointmentendtime("");
            setMessage("Appointment created!");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
    
      return (
        <div className="AddAppointment">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-25">
              <label for="clinicid">Clinic ID</label>
              </div>
              <div class="col-75">
                <input type="text"
                value={clinicid}
                placeholder="Clinic ID"
                onChange={(e) => setclinicid(e.target.value)}
                />
              </div>
           </div>

           <div class="row">
              <div class="col-25">
              <label for="appointmentdate">Appointment Date</label>
              </div>
              <div class="col-75">
                <input type="text"
                value={appointmentdate}
                placeholder="Appointment date"
                onChange={(e) => setappointmentdate(e.target.value)}
                />
              </div>
           </div>

           <div class="row">
              <div class="col-25">
              <label for="firstname">First Name</label>
              </div>
              <div class="col-75">
                <input type="text"
                value={firstname}
                placeholder="First Name"
                onChange={(e) => setfirstname(e.target.value)}
                />
              </div>
           </div> 

           <div class="row">
              <div class="col-25">
              <label for="lastname">Last Name</label>
              </div>
              <div class="col-75">
                <input type="text"
                value={lastname}
                placeholder="Last Name"
                onChange={(e) => setlastname(e.target.value)}
                />
              </div>
           </div> 

           <div class="row">
              <div class="col-25">
              <label for="patientid">Patient ID</label>
              </div>
              <div class="col-75">
                <input type="text"
                value={patientid}
                placeholder="patient ID"
                onChange={(e) => setpatientid(e.target.value)}
                />
              </div>
           </div> 
              
           <div class="row">
              <div class="col-25">
              <label for="appointmentstarttime">Appointment Start Time</label>
              </div>
              <div class="col-75">
                <input type="text"
                value={appointmentstarttime}
                placeholder="Appointment start time "
                onChange={(e) => setappointmentstarttime(e.target.value)}
                />
              </div>
           </div> 

           <div class="row">
              <div class="col-25">
              <label for="appointmentendtime">Appointment End Time</label>
              </div>
              <div class="col-75">
                <input type="text"
                value={appointmentendtime}
                placeholder="Appointment end time "
                onChange={(e) => setappointmentendtime(e.target.value)}
                />
              </div>
           </div> 

            <div class="row">
            <button type="submit">Create</button>
            </div>

            
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      );

}
export default AddAppointment;
