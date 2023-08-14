import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetClass, TeacherProfile } from "../API_Handling/HandlingSlice";
// import { get_profile } from "../API_Handling/HandlingSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.API_Management.TeacherProfile);
  const response_class = useSelector((state) => state.API_Management.GetClass);
  console.log(response);

  useEffect(() => {
    // window.location.reload();
    dispatch(TeacherProfile());
    dispatch(GetClass());
    console.log("UseEffect called");
  }, []);

  return (
    <div className="px-72 py-16">
      <div className="flex items-center">
        <div className="rounded-xl">
          <img
            style={{ height: "140px" }}
            src={response.map((item) => item.avtar)}
            className="rounded-full"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex flex-col px-4">
          <div className="text-xl font-extrabold">
            {response.map((item) => item.first_name)}{" "}
            {response.map((item) => item.last_name)}
          </div>
          <div className="text-sm" style={{ color: "rgba(156, 156, 156, 1)" }}>
            Teacher
          </div>
        </div>
      </div>

      <Link to="circular" className=" mt-9 w-fit flex gap-6">
        <button
          className="rounded-md font-extrabold text-base"
          style={{
            backgroundColor: "rgba(246, 247, 250, 1)",
            width: "22rem",
            height: "3rem",
            color: "rgba(157, 159, 160, 1)",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(225, 225, 225, 1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(246, 247, 250, 1)";
          }}
        >
          Circular
        </button>
        {/* <button
          className="rounded-md font-extrabold text-base"
          style={{
            backgroundColor: "rgba(246, 247, 250, 1)",
            width: "22rem",
            height: "3rem",
            color: "rgba(157, 159, 160, 1)",
            transition: "background-color 0.3s ease",
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(225, 225, 225, 1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(246, 247, 250, 1)";
          }}
        >
          Task
        </button> */}
      </Link>

      <div className="mt-5 text-xl font-extrabold">Class</div>

      <div className="grid grid-cols-1 gap-5 mt-3">
        {response_class.map((item) =>
          item.map((res) => (
            <div
              className="rounded-xl flex items-center justify-between px-5 mr-10"
              style={{
                width: "55rem",
                height: "4rem",
                boxShadow:
                  "0px 0px 6px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderTop: "none",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow =
                  "0px 0px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow =
                  "0px 0px 6px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                className="font-bold"
                style={{ color: "rgba(196, 103, 255, 1)" }}
              >
                Class {res.class_masters.class_name}
              </div>
              <div className=" flex items-center justify-center mr-10">
                <div style={{ color: "rgba(157, 159, 160, 1)" }}>Section</div>
                <div className="flex items center justify-center ml-10 gap-6">
                  <Link
                    to={`/home/subjects/${res.class_masters.class_id}/${res.class_masters.class_name}/${res.class_masters.active}/${res.section_masters.section_id}`}
                    className="px-4 rounded-xl"
                    style={{
                      background: "rgba(0, 0, 0, 0.1)",
                      width: "2.7rem",
                    }}
                  >
                    {res.section_masters.section_name}
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default Profile;
