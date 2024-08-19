import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";


const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/about">
						About
					</NavLink>
					<NavLink to="/List">
						List
					</NavLink>
					<NavLink to="/addappointment">
						Add Appointment
					</NavLink>
					<NavLink to="/getappointment">
						Inquire/or Delete Appointment
					</NavLink>
					<NavLink to="/updappointment">
						Upd Appointment
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};
   
 
export default Navbar; 