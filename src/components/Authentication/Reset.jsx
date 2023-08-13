import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const viewPassword = (e) => {
    e.preventDefault();
    if (passwordType == "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

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

        <div className="w-1/2 flex flex-col justify-center items-center">
          <div
            className="flex flex-col items-center rounded-2xl"
            style={{
              width: "400px",
              height: "480px",
              border: "2px solid rgba(0,0,0,0.1)",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
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
                  Enter your New Password
                </label>
                <div className="text-xs mt-2 ml-2 mr-6 text-gray-400">
                  Your new password must be different from previous used
                  passwords.
                </div>
                <div>
                  <input
                    className="rounded-xl px-5 mt-5"
                    style={{
                      backgroundColor: "rgba(246, 247, 250, 1)",
                      height: "45px",
                      width: "350px",
                      outline: "none",
                    }}
                    type={passwordType}
                    placeholder="Password"
                    id="password"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                  />
                  <button
                    style={{
                      position: "absolute",
                      right: "13.5rem",
                      top: "26.7rem",
                      cursor: "pointer",
                    }}
                    onClick={viewPassword}
                  >
                    {passwordType == "password" ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </button>
                </div>
                <div className="text-xs mt-1 text-gray-400  ml-2">
                  Must be at least 8 characters.
                </div>
                <div>
                  <input
                    className="rounded-xl px-5 mt-5"
                    style={{
                      backgroundColor: "rgba(246, 247, 250, 1)",
                      height: "45px",
                      width: "350px",
                      outline: "none",
                    }}
                    type={passwordType}
                    placeholder="Re-Enter Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    style={{
                      position: "absolute",
                      right: "13.5rem",
                      top: "21.4rem",
                      cursor: "pointer",
                    }}
                    onClick={viewPassword}
                  >
                    {passwordType == "password" ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </button>
                </div>
                <div className="text-xs mt-1 text-gray-400 ml-2">
                  Both passwords must match.
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
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
