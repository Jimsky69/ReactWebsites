import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import GetAppointment from "./pages/getappointment";
import Contact from "./pages/contact";
import List from "./pages/list";
import AddAppointment from "./pages/addappointment";
import UpdAppointment from "./pages/updappointment";


 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/getappointment" element={<GetAppointment />} />
                <Route path="/contact"element={<Contact />}/>
                <Route path="/list"element={<List />}/>
                <Route path="/addappointment"element={<AddAppointment />}/>
                <Route path="/updappointment"element={<UpdAppointment />}/>

            </Routes>
        </Router>
    );
}

export default App;