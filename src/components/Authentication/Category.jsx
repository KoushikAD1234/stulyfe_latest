import React from "react";
import { Link, useNavigate } from "react-router-dom";

const category = () => {
  return (
    <div>
      <div className="flex">
        <div
          className="w-1/2 flex flex-col justify-center items-center"
          style={{ backgroundColor: "rgba(246, 247, 250, 1)", height: "100vh" }}
        >
          <img style={{ height: "25vh" }} src="/logo.png" alt="" srcset="" />
          <div className="mt-5 text-3xl">Welcome To</div>
          <div className="mt-1 text-3xl font-bold">XYZ School</div>
          <div
            className="mt-10 text-sm"
            style={{ color: "rgba(140, 140, 140, 1)" }}
          >
            Powered by Stulyfe
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center">
          <div
            style={{
              width: "400px",
              height: "450px",
              border: "2px solid rgba(0,0,0,0.1)",
            }}
            className="flex flex-col items-center rounded"
          >
            <div className=" text-xl font-bold mt-2">Choose your option</div>
            <Link
              to="/login"
              className="mt-7 rounded-md cursor-pointer"
              style={{
                width: "300px",
                height: "150px",
                border: "2px solid rgba(0,0,0,0.1)",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0px 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0px 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(100,170,249,1)",
                  height: "90px",
                }}
              >
                <img
                  className="mr-3"
                  style={{ height: "88px", zIndex: "" }}
                  src="\Teacher.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="font-bold flex items-center ml-4 mt-3">
                Teacher
              </div>
            </Link>
            <Link
              to="/login"
              className="mt-7 rounded-md cursor-pointer"
              style={{
                width: "300px",
                height: "150px",
                border: "2px solid rgba(0,0,0,0.1)",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0px 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0px 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(123,225,246,1)",
                  height: "90px",
                }}
              >
                <img
                  className="mr-3"
                  style={{ height: "88px", zIndex: "" }}
                  src="\Student.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="font-bold flex items-center ml-4 mt-3">
                Student
              </div>
            </Link>
            {/* <Link
            to="/login"
              className="mt-7 rounded-md cursor-pointer"
              style={{
                width: "300px",
                height: "150px",
                border: "2px solid rgba(0,0,0,0.1)",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0px 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0px 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(225, 215, 115, 1)",
                  height: "90px",
                }}
              >
                <img
                  className="mr-3"
                  style={{ height: "88px", zIndex: "" }}
                  src="\Bus.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="font-bold flex items-center ml-4 mt-3">
                Bus Driver
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default category;
