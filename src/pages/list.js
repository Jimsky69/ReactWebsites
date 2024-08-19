import React from "react";
import { useEffect} from "react"
import { useState } from "react"
import './list.css'
   const  Row = (props) => {
        const {clinicID, appointmentDate, firstName, lastName, patientID} = props 
        return (<tr> 
                <td>{clinicID}</td>
                <td>{appointmentDate}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{patientID}</td>
             </tr>)
        }
    
        function List() {
            
            const [records, setRecords] = useState([])
            useEffect(()=>
            {
                 fetch('/api/outputs/GetAppointmentList')
                .then(response => response.json())
                .then(data => setRecords( data))
                .catch(err => console.log(err))
            }, []);

           
            return (
                <table id="AppList">
                    <tbody>   
                    <tr> 
                       <th>CLINIC ID</th>
                       <th>APPOINTMENT Date</th>
                       <th>FIRSTNAME</th>
                       <th>LASTNAME</th>
                       <th>PATIENT ID</th>
                    </tr>
                      
                        {records.map((row, index) => (
                          
                          <Row clinicID = {row.clinicID}
                            appointmentDate = {row.appointmentDate}
                            firstName = {row.firstName}
                            lastName = {row.lastName} 
                            patientID = {row.patientID}/>

                         ))}

                </tbody>
                </table>

            )
       
        }
        export default List;
          