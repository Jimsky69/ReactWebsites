import React from "react";
import { useEffect} from "react"
import { useState } from "react"
import './list.css';

// const List = () => {
// 	return <h1>List here </h1>;
// };

    
// jmf
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
    const AppointmentTable = (props) => {
       
        const {clinicID, appointmentDate, firstName, lastName, patientID} = props 
        return (<table id="AppList">
                <tbody>
                <tr> 
                       <th>CLINIC ID</th>
                       <th>APPOINTMENT Date</th>
                       <th>FIRSTNAME</th>
                       <th>LASTNAME</th>
                       <th>PATIENT ID</th>
                </tr>

                   {Row ((row) => { 
               
                   return
                    <Row clinicID = {row.clinicID}
                    appointmentDate = {row.appointmentDate}
                    firstName = {row.firstName}
                    lastName = {row.lastName} 
                    patientID = {row.patientID}/>

                 })}

                </tbody>
        </table>
        )}


        function List() {
            // const [records, SetRecords] = useState([])
            const [records, setRecords] = useState([])
            useEffect(()=>
            {
                fetch('http://localhost:8085/api/outputs/GetAppointmentList')
                .then(response => response.json())
                .then(data => setRecords( records))
                .catch(err => console.log(err))
            }, []);

            var appointDetails = "";
            appointDetails = records.map( (row, index) => {
                return (
                    <table className="AppList">
                        <tbody> 

                    <tr> 
                       <th>CLINIC ID</th>
                       <th>APPOINTMENT Date</th>
                       <th>FIRSTNAME</th>
                       <th>LASTNAME</th>
                       <th>PATIENT ID</th>
                    </tr>

                        <tr Key={index}>
                            <td>{row.clinicID}</td>
                            <td>{row.appointmentDate}</td>

                        </tr>
                        </tbody>
                        </table>
                )

            })
            // return (
  
                    //  <AppointmentTable data = {rows} /> 

           // )

        }
        export default List;
          
        // jmf

    // return (
    //     <div>
    //         <ul>
    //             {records.map (
    //                    // <li key={index}>{list.clinicID} | {list.firstName} </li>
    //                    <li key={index}>{list.clinicID} | {list.appointmentDate} | {list.firstName} | {list.lastName} | {list.patientID} </li>

    //             )) }
    //         </ul>
    //     </div>
        

{/* <table id="AppList">
                 <div id="th">  
                <tr> 
                       <th>CLINIC ID</th>
                       <th>APPOINTMENT Date</th>
                       <th>FIRSTNAME</th>
                       <th>LASTNAME</th>
                       <th>PATIENT ID</th>
                </tr>
                </div>


                    <div id = "td">
                        <ul>
                        {records.map ((list) => (
                         <li> {list.firstName} | {list.lastName} | {list.patientID} </li>
                        )) }
                        </ul>
                    </div>

               
                    </table>
                 */}