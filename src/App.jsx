import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./components/Authentication/Category";
import Login from "./components/Authentication/Login";
import Forgot_Password from "./components/Authentication/Forgot_Password";
import Otp from "./components/Authentication/Otp";
import Reset from "./components/Authentication/Reset";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Teacher_Panel/Profile";
import Subjects from "./components/Common_Panel/Subjects";
import Subject_Info from "./components/Common_Panel/Subject_Info";
import Lecture from "./components/Common_Panel/Lecture";
import Lecture_Info from "./components/Common_Panel/Lecture_Info";
import Chapter_Details from "./components/Common_Panel/Chapter_Details";
import Notes from "./components/Common_Panel/Notes";
import QnA from "./components/Common_Panel/QnA";
import Assignments from "./components/Common_Panel/Assignments";
import Attendance from "./components/Common_Panel/Attendance";
import Home from "./components/Routing/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Category />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot_password" element={<Forgot_Password />} />
          <Route exact path="/otp" element={<Otp />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>

      {/* <Category /> */}
      {/* <Login /> */}
      {/* <Forgot_Password /> */}
      {/* <Otp /> */}
      {/* <Reset /> */}
      {/* <Profile /> */}
      {/* <Subjects /> */}
      {/* <Subject_Info /> */}
      {/* <Lecture /> */}
      {/* <Lecture_Info /> */}
      {/* <Chapter_Details /> */}
      {/* <Notes /> */}
      {/* <QnA /> */}
      {/* <Assignments /> */}
      {/* <Attendance /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
