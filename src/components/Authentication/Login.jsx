import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
// import { login } from "../API_Handling/HandlingSlice";
import { GetClass, TeacherProfile, login } from "../API_Handling/HandlingSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email_id, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [result, setResult] = useState("");

  const viewPassword = (e) => {
    e.preventDefault();
    if (passwordType == "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const jsonData = {
        email_id: email_id,
        password: password,
      };

      console.log("clicked");
      // dispatch(login(jsonData)).then((response)=>{
      //   navigate("/home");
      // }).catch((err)=>console.error("Authentication failed:", err.message))


      const response = await dispatch(login(jsonData));
      console.log(response)
      console.log(response.type=='login/fulfilled')
      if (response.type=='login/fulfilled') {
        // dispatch(TeacherProfile());
        // dispatch(GetClass());
        navigate("/home");
      }
    } catch (error) {
      // Handle the rejected state here
      console.error("Authentication failed:", error.message);
    }

    // axios
    //   .post("http://13.233.3.122:8010/api/admin/onboard/login", { email_id, password })
    //   .then((response) => {
    //     setEmail("");
    //     setPassword("");
    //     console.log(response);
    //     const token = response.data.token;
    //     Cookies.set("token", token);

    //     setResult("Logged in Successfully");
    //     navigate("/home");
    //   })
    //   .catch((err) => {
    //     // navigate("/home");
    //     console.log("Problem", err);
    //     setResult("Authentication Failed !");
    //   });
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
              height: "600px",
              border: "2px solid rgba(0,0,0,0.1)",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="mt-4">
              <img
                style={{ height: "30vh", width: "47vh" }}
                src="/loginp.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="mt-3 text-2xl font-extrabold mr-72 ml-3">Login</div>
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    className="rounded-xl px-5"
                    style={{
                      backgroundColor: "rgba(246, 247, 250, 1)",
                      height: "45px",
                      width: "350px",
                      outline: "none",
                    }}
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email_id}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <input
                    className="rounded-xl px-5"
                    style={{
                      backgroundColor: "rgba(246, 247, 250, 1)",
                      height: "45px",
                      width: "350px",
                      outline: "none",
                    }}
                    type={passwordType}
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    style={{
                      position: "absolute",
                      right: "13.5rem",
                      top: "28.4rem",
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
                <div className="flex justify-between mt-3 ml-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox" />
                    <label
                      style={{ color: "gray" }}
                      className="ml-2 text-sm"
                      for="checkbox"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot_password">
                    <a
                      style={{ color: "rgba(0, 130, 205, 1)" }}
                      className="text-sm"
                      href=""
                    >
                      Forgot Password ?
                    </a>
                  </Link>
                </div>

                <div>{result}</div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className="rounded font-bold"
                    style={{
                      backgroundColor: "rgba(196, 103, 255, 1)",
                      height: "45px",
                      width: "350px",
                      color: "white",
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className=" mt-4 text-xs" style={{ color: "gray" }}>
              <text className="flex justify-center">
                By signing you accept the
              </text>{" "}
              <text style={{ color: "rgba(0, 130, 205, 1)" }}>
                Terms of Service
              </text>{" "}
              and{" "}
              <text style={{ color: "rgba(0, 130, 205, 1)" }}>
                Privacy Policy
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
