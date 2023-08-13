import React, { useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ProgressBar from "@ramonak/react-progress-bar";
import CheckIcon from "@mui/icons-material/Check";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Get_Topics } from "../API_Handling/HandlingSlice";
import { useDispatch, useSelector } from "react-redux";
import { Get_Chapters } from "../API_Handling/HandlingSlice";

const Lecture_Info = () => {
  const { chapterId, subjectId } = useParams();
  const dispatch = useDispatch();
  const chap = useSelector((state) => state.API_Management.Get_Chapters );
  const res_chap = chap.filter((item)=>item.chapter_id===chapterId);
  useEffect(() => {
    console.log(chapterId);
    console.log(res_chap)
    dispatch(Get_Topics(chapterId));
    dispatch(Get_Chapters(subjectId));
    // dispatch(Get_Chapters(chapterId));
  }, []);
  const res = useSelector((state) => state.API_Management.Get_Topics);

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <Link
          to="/home/lecture"
          style={{ position: "relative", right: "550px", cursor: "pointer" }}
        >
          <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
        </Link>
        <div className="font-extrabold text-2xl">{res_chap.map((item)=>item.chapter_name)}</div>
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

      <div className="mt-16 px-72">
        <div className="grid grid-cols-2 gap-20">
          <div
            className="rounded-xl relative"
            style={{
              height: "266px",
              width: "498px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(246, 247, 250, 1)",
            }}
          >
            <div
              className="text-xs font-bold rounded-xl flex items-center justify-center"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "rgba(239, 31, 68, 1)",
                backgroundColor: "rgba(255, 218, 225, 1)",
                height: "1.5rem",
                width: "4rem",
              }}
            >
              Pending
            </div>

            <div className="flex mt-5">
              <div className=" ml-5">
                <img className="rounded-2xl" style={{height:"9rem"}} src={res_chap.map((item)=>item.chapter_image)} alt="" srcset="" />
              </div>
              <div className="ml-3 mt-5 flex flex-col">
                <div className="font-bold text-xl">{res_chap.map((item)=>item.chapter_name)}</div>
                <div className="flex items-center">
                  <div className="mt-2">
                    <AccessAlarmsIcon
                      style={{
                        transform: "scale(0.8)",
                        color: "rgba(140, 140, 140, 1)",
                      }}
                    />
                  </div>
                  <div
                    className="flex items-center mt-3 text-sm"
                    style={{ color: "rgba(140, 140, 140, 1)" }}
                  >
                    {res_chap.map((item)=>item.total_time)}
                  </div>
                  <div
                    className="ml-6 mt-2"
                    style={{
                      height: "35px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  ></div>
                  <div
                    className="ml-6 flex items-center mt-3 text-sm"
                    style={{ color: "rgba(140, 140, 140, 1)" }}
                  >
                    {res_chap.map((item)=>item.no_topic)} Topic
                  </div>
                </div>
                <div
                  className="font-bold rounded flex items-center justify-center mt-4 text-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    width: "12rem",
                    height: "2rem",
                    color: "rgba(197, 197, 197, 1)",
                  }}
                >
                  Initiated on {res_chap.map((item)=>item.date_created)}
                </div>
              </div>
            </div>

            <div className="ml-5 mt-3 mr-5">
              <div>
                <ProgressBar completed={40} height="12px" />
              </div>
              <div className="flex justify-between text-sm mt-2">
                <div style={{ color: "rgba(102, 112, 133, 1)" }}>
                  40% complete
                </div>
                <div style={{ color: "rgba(102, 112, 133, 1)" }}>1/4</div>
              </div>
              <div
                className="mt-1 text-sm"
                style={{ color: "rgba(102, 112, 133, 1)" }}
              >
                1/4
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-2xl font-extrabold px-72">Topics</div>

      <div className="mt-7 px-72 grid grid-cols-2 gap-10">
        {res.map((item) => (
          <Link
            to={`/home/chap_Details/${item.topic_id}/${chapterId}`}
            className="rounded-xl"
            style={{
              width: "496px",
              height: "96px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex items-center h-full ml-4">
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  color: "rgba(199, 201, 217, 1)",
                  backgroundColor: "rgba(246, 247, 250, 1)",
                  height: "65px",
                  width: "65px",
                }}
              >
                1
              </div>
              <div className="flex flex-col">
                <div className="font-bold ml-3">{item.topic_name}</div>
                <div className=" flex items-center font-bold ml-2 mt-1">
                  <AccessAlarmsIcon
                    style={{
                      transform: "scale(0.8)",
                      color: "rgba(140, 140, 140, 1)",
                    }}
                  />
                  <div
                    className="text-sm"
                    style={{ color: "rgba(140, 140, 140, 1)" }}
                  >
                    {item.time}
                  </div>
                </div>
              </div>
              <div
                className="rounded-full flex items-center justify-center ml-28"
                style={{
                  color: "rgba(199, 201, 217, 1)",
                  backgroundColor: "rgba(227, 255, 224, 1)",
                  height: "65px",
                  width: "65px",
                }}
              >
                <CheckIcon
                  style={{
                    transform: "scale(1.6)",
                    color: "rgba(78, 212, 66, 1)",
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Lecture_Info;
