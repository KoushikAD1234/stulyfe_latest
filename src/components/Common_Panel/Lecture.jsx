import React, { useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ProgressBar from "@ramonak/react-progress-bar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Get_Chapters } from "../API_Handling/HandlingSlice";

const Lecture = () => {
  const { subjectId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(subjectId);
    dispatch(Get_Chapters(subjectId));
  }, []);
  const res = useSelector((state) => state.API_Management.Get_Chapters);
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <Link
          to="/home/subjects_info"
          style={{ position: "relative", right: "550px", cursor: "pointer" }}
        >
          <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
        </Link>
        <div className="font-extrabold text-2xl">Lectures</div>
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

      <div className="mt-16 text-2xl font-extrabold px-72">Chapters</div>

      <div className="mt-10 px-72">
        <div className="grid grid-cols-2 gap-20">
          {res.map((item) => (
            <Link
              to={`/home/lecture_info/${item.chapter_id}/${subjectId}`}
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
                  <img className="rounded-2xl" style={{height:"9rem"}} src={item.chapter_image} alt="" srcset="" />
                </div>
                <div className="ml-3 mt-5 flex flex-col">
                  <div className="font-bold text-xl">{item.chapter_name}</div>
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
                      {item.total_time}
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
                      {item.no_topic} topic
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
                    Initiated on {item.date_created}
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
            </Link>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Lecture;
