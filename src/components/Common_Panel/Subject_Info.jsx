import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Footer from "../Footer/Footer";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Subject_Info = () => {

  const {classId, className, subjectId, sectionId} = useParams();
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <Link to="/home/subjects"
          style={{ position: "relative", right: "550px", cursor: "pointer" }}
        >
          <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
        </Link>
        <div className="font-extrabold text-2xl">{className}th Class</div>
        <div>
            <NotificationsOutlinedIcon style={{ scale: "1.8", cursor:"pointer", position:"relative", left:"550px" }} />
        </div>
      </div>

      <div className="mt-16 text-2xl font-extrabold px-72">Science</div>

      <div className="mt-10 px-72">
        <div className="grid grid-cols-4 gap-20">
          <Link to={`/home/attendance/${classId}/${subjectId}/${sectionId}`}
            className="rounded-xl cursor-pointer"
            style={{
              width: "223px",
              height: "246px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              backgroundColor: "rgba(246, 247, 250, 1)",
            }}
            // onClick={()=>window.location.reload()}
          >
            <div
              style={{
                width: "100%",
                height: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="rounded"
                src="/biology.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="px-3 mt-5 flex items-center justify-between">
              <div className="font-bold">Attendance</div>
              <div className="rounded-full flex justify-center items-center" style={{backgroundColor:"rgba(248, 236, 255, 1)", width:"31px", height:"31px"}}>
                <ArrowForwardIosOutlinedIcon style={{transform:"scale(0.8)", color:"rgba(196, 103, 255, 1)"}} />
              </div>

            </div>
          </Link>
          <Link to={`/home/lecture/${subjectId}`}
            className="rounded-xl cursor-pointer"
            style={{
              width: "223px",
              height: "246px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              backgroundColor: "rgba(246, 247, 250, 1)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="rounded"
                src="/biology.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="px-3 mt-5 flex items-center justify-between">
              <div className="font-bold">Science</div>
              <div className="rounded-full flex justify-center items-center" style={{backgroundColor:"rgba(248, 236, 255, 1)", width:"31px", height:"31px"}}>
                <ArrowForwardIosOutlinedIcon style={{transform:"scale(0.8)", color:"rgba(196, 103, 255, 1)"}} />
              </div>

            </div>
          </Link>
          <Link to={`/home/notes/${subjectId}`}
            className="rounded-xl cursor-pointer"
            style={{
              width: "223px",
              height: "246px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              backgroundColor: "rgba(246, 247, 250, 1)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="rounded"
                src="/biology.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="px-3 mt-5 flex items-center justify-between">
              <div className="font-bold">Handwritten Notes</div>
              <div className="rounded-full flex justify-center items-center" style={{backgroundColor:"rgba(248, 236, 255, 1)", width:"31px", height:"31px"}}>
                <ArrowForwardIosOutlinedIcon style={{transform:"scale(0.8)", color:"rgba(196, 103, 255, 1)"}} />
              </div>

            </div>
          </Link>
          <Link to={`/home/assignments/${classId}/${subjectId}/${sectionId}`}
            className="rounded-xl cursor-pointer"
            style={{
              width: "223px",
              height: "246px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              backgroundColor: "rgba(246, 247, 250, 1)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="rounded"
                src="/biology.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="px-3 mt-5 flex items-center justify-between">
              <div className="font-bold">Assignments</div>
              <div className="rounded-full flex justify-center items-center" style={{backgroundColor:"rgba(248, 236, 255, 1)", width:"31px", height:"31px"}}>
                <ArrowForwardIosOutlinedIcon style={{transform:"scale(0.8)", color:"rgba(196, 103, 255, 1)"}} />
              </div>

            </div>
          </Link>
          <Link to={`/home/qna/${classId}/${subjectId}`}
            className="rounded-xl cursor-pointer"
            style={{
              width: "223px",
              height: "246px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              backgroundColor: "rgba(246, 247, 250, 1)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="rounded"
                src="/biology.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="px-3 mt-5 flex items-center justify-between">
              <div className="font-bold">Stulyfe Q/A sample</div>
              <div className="rounded-full flex justify-center items-center" style={{backgroundColor:"rgba(248, 236, 255, 1)", width:"31px", height:"31px"}}>
                <ArrowForwardIosOutlinedIcon style={{transform:"scale(0.8)", color:"rgba(196, 103, 255, 1)"}} />
              </div>

            </div>
          </Link>
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Subject_Info;
