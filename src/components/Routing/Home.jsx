import React, { useState } from "react";
// import SideNavBar from "./SideNavigationBar/SideNavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Profile from "../Teacher_Panel/Profile";
import Subjects from "../Common_Panel/Subjects";
import Subject_Info from "../Common_Panel/Subject_Info";
import Lecture from "../Common_Panel/Lecture";
import Lecture_Info from "../Common_Panel/Lecture_Info";
import Chapter_Details from "../Common_Panel/Chapter_Details";
import QnA from "../Common_Panel/QnA";
import Assignments from "../Common_Panel/Assignments";
import Attendance from "../Common_Panel/Attendance";
import Footer from "../Footer/Footer";
import Notes from "../Common_Panel/Notes";
import Circular from "../Common_Panel/Circular";
import PdfView from "../Common_Panel/PdfView";
import RemarkSubmission from "../Common_Panel/RemarkSubmission";
import Feed from "../Common_Panel/feed/Feed";
import PdfViewer from "../Common_Panel/PdfSetup";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Profile />} />
        <Route exact path='/subjects/:classId/:className/:classActive/:sectionId' element={<Subjects />} />
        <Route exact path='/subjects_info/:classId/:className/:subjectId/:sectionId' element={<Subject_Info />} />
        <Route exact path='/lecture/:subjectId' element={<Lecture />} />
        <Route exact path='/lecture_info/:chapterId/:subjectId' element={<Lecture_Info />} />
        <Route exact path='/chap_Details/:topicId/:chapterId' element={<Chapter_Details />} />
        <Route exact path='/notes/:subjectId' element={<Notes />} />
        <Route exact path='/qna/:classId/:subjectId' element={<QnA />} />
        <Route exact path='/assignments/:classId/:subjectId/:sectionId' element={<Assignments />} />
        <Route exact path='/attendance/:classId/:subjectId/:sectionId' element={<Attendance />} />
        <Route exact path='/circular' element={<Circular />} />
        <Route exact path='/notespdfview' element={<PdfView />} />
        <Route exact path='/assignmentpdfview' element={<PdfView />} />
        <Route exact path='/questionpdfview' element={<PdfView />} />
        <Route exact path='/answerpdfview' element={<PdfView />} />
        <Route exact path='/remarksubmission' element={<RemarkSubmission />} />
        <Route exact path='/feed' element={<Feed />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
