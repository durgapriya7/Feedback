import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.jsx';
import Navbar from './Pages/Navbar.jsx';
import Footer from './Pages/Footer.jsx';
import Feedback from './Feedback/Feedback.jsx'; 
import Student from './student/Student.jsx';
import Trainer from './Trainer/Trainer.jsx';
import AdminLogin from './components/Admin/AdminLogin.jsx'; 
import AdminDashboard from './components/Admin/AdminDashboard.jsx'; 
import AddUser from './components/Admin/AddUser.jsx';
import UpdateUser from './components/Admin/UpdateUser.jsx';
import DeleteUser from './components/Admin/DeleteUser.jsx';
import GetUser from './components/Admin/GetUser.jsx';


const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-user" element={<AddUser />} />
          <Route path="/admin/update-user/:id" element={<UpdateUser />} />
          <Route path="/admin/delete-user/:id" element={<DeleteUser />} />
          <Route path="/admin/users" element={<GetUser />} />
         
        

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
