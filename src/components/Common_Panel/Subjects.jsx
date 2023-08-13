import React, { useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Subject } from "../API_Handling/HandlingSlice";

const Subjects = () => {
  const { classId, className, classActive, sectionId } = useParams();
  const dispatch = useDispatch();
  const response = useSelector((state) => state.API_Management.Subject);

  useEffect(() => {
    dispatch(Subject({ classId, classActive }));
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <Link
          to="/home/"
          style={{ position: "absolute", right: "1420px", cursor: "pointer" }}
        >
          <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
        </Link>
        <div className="font-extrabold text-2xl">{className}th Class</div>
      </div>

      <div className="mt-16 text-2xl font-extrabold px-72">Subject</div>

      <div className="mt-10 px-72">
        <div className="grid grid-cols-4 gap-20">
          {response.map((item) => (
            <Link
              to={`/home/subjects_info/${item.class_id}/${className}/${item.subject_id}/${sectionId}`}
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
                  src={item.subject_image}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="ml-3 mt-2 flex items-center justify-between">
                <div className="font-bold">{item.subject_name}</div>
                <div
                  className="mr-3 text-xs rounded text-white flex justify-center items-center"
                  style={{
                    backgroundColor: "rgba(78, 212, 66, 1)",
                    width: "3.5rem",
                    height: "1.3rem",
                  }}
                >
                  Attend
                </div>
              </div>

              <div
                className="ml-3 text-xs mt-3 font-bold"
                style={{ color: "rgba(48, 39, 53, 0.44)" }}
              >
                Rucha Pande
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

export default Subjects;
