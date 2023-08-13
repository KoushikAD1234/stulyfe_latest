import React, { useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Player } from "video-react";
import "/node_modules/video-react/dist/video-react.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Get_Topics, Get_chapter_Notes, Get_chapter_details } from "../API_Handling/HandlingSlice";
import PdfView from "./PdfView";

// import "~video-react/styles/scss/video-react";

const Chapter_Details = () => {
  const {topicId, chapterId} = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(Get_chapter_details(topicId));
    dispatch(Get_Topics(chapterId));
    dispatch(Get_chapter_Notes(topicId));
    
  }, [])

  const res_topic = useSelector((state)=>state.API_Management.Get_Topics);
  const res_filter = res_topic.filter((item)=>item.topic_id==topicId);
  const response = useSelector((state)=>state.API_Management.Get_chapter_details);
  const pdf = useSelector((state)=>state.API_Management.Get_chapter_Notes);
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <Link to = "/home/lecture_info"
          style={{ position: "relative", right: "550px", cursor: "pointer" }}
        >
          <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
        </Link>
        <div className="font-extrabold text-2xl">{res_filter.map((item)=>item.topic_name)}</div>
        {/* <div className="font-extrabold text-2xl">{response.map((item)=>(item.video_id))}</div> */}
        <div>
          <SearchOutlinedIcon
            style={{
              scale: "1.8",
              cursor: "pointer",
              position: "relative",
              left: "550px",
            }}
          />
        </div>
      </div>

      <div className="px-72 py-10">
        <div className="">
          <Player
            playsInline
            poster={response.video_image}
            src={response.video}
          />
        </div>
        <div className="mt-5 text" style={{ color: "rgba(157, 159, 160, 1)" }}>
          <PdfView pdf={pdf.notes_masters.map((item)=>(item.note))} />
        </div>

        <div className="rounded mt-5 font-bold flex justify-center items-center cursor-pointer mb-16" style={{color:"white", backgroundColor:"rgba(196, 103, 255, 1)", width:"300px", height:"60px"}}>
            Completed
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Chapter_Details;
