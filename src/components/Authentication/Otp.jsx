import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Otp = () => {
    const [message, setMessage] = useState("")
    const [otp, setOtp] = useState("");
  return (
    <div>
      <div className="flex">
        <div
          className="w-1/2 flex flex-col justify-center items-center"
          style={{ backgroundColor: "rgba(246, 247, 250, 1)", height: "100vh" }}
        >
          <img style={{ height: "25vh" }} src="/logo.png" alt="" srcset="" />
          <div className="mt-5 text-3xl">Welcome To</div>
          <div className="mt-1 text-3xl font-bold">Mahesh Gyanpeeth</div>
          <div
            className="mt-10 text-sm"
            style={{ color: "rgba(140, 140, 140, 1)" }}
          >
            Powered by Stulyfe
          </div>
        </div>


        <div className="w-1/2 flex flex-col justify-center items-center rounded-2xl">
          <div
            style={{
              width: "400px",
              height: "355px",
              border: "2px solid rgba(0,0,0,0.1)",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            className="flex flex-col items-center rounded-md"
          >
            <div className="flex justify-center items-center mt-9">
              <div style={{ cursor: "pointer" }}>
                <ArrowBackIcon />
              </div>
              <div className="text-2xl font-extrabold ml-3">
                Forgot Password
              </div>
            </div>

            <div className="mt-10 ml-6">
              <form action="">
                <label className="text-xl font-extrabold mr-28 ml-2" htmlFor="">
                  Enter OTP
                </label>
                <input
                  className="rounded-xl px-5 mt-3"
                  style={{
                    backgroundColor: "rgba(246, 247, 250, 1)",
                    height: "45px",
                    width: "350px",
                    outline: "none",
                  }}
                  type="text"
                  placeholder="OTP"
                  id="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <div className="text-xs mt-2">
                    A 4 digit code has been sent to *****23@gmail.com
                </div>

                <div className="mt-6">
                  <button
                    className="rounded font-bold"
                    style={{
                      backgroundColor: "rgba(196, 103, 255, 1)",
                      height: "45px",
                      width: "350px",
                      color: "white",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className=" mt-5 text-sm" style={{ color: "gray" }}>
                <button className="font-bold" style={{color:"rgba(0, 130, 205, 1)"}}>
                    Resend ? 00:35
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Otp;
