import React, { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  GetClass,
  Get_Attendance_List,
  Get_Student_List,
  TeacherProfile,
  CreateAttendance
} from "../API_Handling/HandlingSlice";
import axios from "axios";
import Cookies from "js-cookie";
// import { useParams } from "react-router-dom";

const Attendance = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-based, so we add 1
  const day = today.getDate();
  const time = today.getTime();
  const [Ctime, setCtime] = useState('');
  let formattedDate = `${year}/${month}/${day}`;
  // const [classId, subjectId] = useParams();
  const { classId, subjectId, sectionId } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const prof = useSelector((state) => state.API_Management.TeacherProfile);
  let response;

  useEffect(() => {
    // window.location.reload();
    dispatch(TeacherProfile());
    dispatch(GetClass());
    dispatch(Get_Student_List({ classId, sectionId }));
    // try {
    //   // console.log(date)
    //    response = axios({
    //     method: "get",
    //     url: `http://13.233.3.122:8010/api/admin/student/get?class_id=${classId}&section=1`,
    //     headers: {
    //       Authorization: Cookies.get("token"),
    //     },
    //   });
    //   console.log("Here's the response of student list")
    //   console.log(response);
    //   // return response.data.data;
    // } catch (error) {
    //   console.log("Not submitting data");
    //   console.log(error);
    //   // return rejectWithValue(error.response.data);
    // }
  }, []);
  const studentList = useSelector((state) => state.API_Management.Get_Student_List);
  const res = useSelector((state) => state.API_Management.GetClass);
  const res1 = res.map((item) =>
  (item.class_id === classId)
  );
  // const res2 = res1[0]
  console.log("res1 response is here")
  console.log(res1);
  // const class_name = res1[0].class_master.class_name;
  console.log(res);
  console.log(classId);
  // const handleDateChange = (newDate) => {
  //   setSelectedDate(newDate);
  // };
  let students = useSelector(
    (state) => state.API_Management.Get_Attendance_List
  );
  console.log(students);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(students.length).fill("")
  ); // Initialize selected options array

  const [attendance, setattendance] = useState('');

  const handleOptionChange = async (index, option, studentId) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    setCtime(currentTime)

    const newAttendance = [...attendance]
    newAttendance[index] = {
      attendance: option,
      student_id: studentId
    };
    setattendance(newAttendance);

  };
  useEffect(() => {
    console.log(attendance);
    console.log(Ctime);
    try {
      const jsonData = {
        class_id: classId,
        subject_id: subjectId,
        date: formattedDate,
        time: Ctime,
        student: attendance,
      }
      const response = dispatch(CreateAttendance(jsonData));
      if (response.type == 'login/fulfilled') {
        // navigate("/home");
        console.log(response);
        console.log('attendance sussecce');
      }

    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
  }, [Ctime, attendance]); // Only run the effect when Ctime or attendance changes


  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    formattedDate = newDate.format('YYYY/MM/DD');

    console.log(formattedDate)

    // Dispatch the action with the selected date
    dispatch(
      Get_Attendance_List({ classId, subjectId, formattedDate })
    );

  };
  let attendance_list = useSelector((state) => state.API_Management.Get_Attendance_List);
  console.log("Here's Attendance list")
  console.log(attendance_list[0]);
  attendance_list = attendance_list[0];
  console.log("Updated one")
  console.log(attendance_list)
  // let respo=response.data;
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <Link
          to="/home/subjects_info"
          style={{ position: "relative", right: "550px", cursor: "pointer" }}
        >
          <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
        </Link>
        <div className="font-extrabold text-2xl">Attendance</div>
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

      <div className="px-72 py-16">
        <div className="flex items-center">
          <div className="rounded">
            <img
              className="rounded-full"
              style={{ height: "140px" }}
              src={prof.avtar}
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col px-4">
            <div className="text-xl font-extrabold">
              {prof.first_name}{" "}
              {prof.last_name}
            </div>
            <div className="flex">
              <div
                className="text-sm"
                style={{ color: "rgba(156, 156, 156, 1)" }}
              >
                Teacher
              </div>
              <div
                className="ml-2"
                style={{
                  height: "20px",
                  border: "1px solid rgba(156, 156, 156, 1)",
                }}
              ></div>
              <div
                className="text-sm ml-2"
                style={{ color: "rgba(156, 156, 156, 1)" }}
              >
                Class 5th A
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-between">
          {/* <div className="text-xl font-bold">24 June 2023</div> */}
          <button
            className="rounded"
            style={{
              // color: "rgba(196, 103, 255, 1)",
              // backgroundColor: "rgba(243, 224, 255, 1)",
              width: "250px",
              height: "40px",
              // border: "1px solid rgba(196, 103, 255, 1)",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Select Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </DemoContainer>
            </LocalizationProvider>
          </button>
        </div>

        {/* <div className="flex">
          <AccessAlarmOutlinedIcon
            style={{ color: "rgba(140, 140, 140, 1)" }}
          />
          <div className="ml-2" style={{ color: "rgba(140, 140, 140, 1)" }}>
            09:45 PM
          </div>
        </div> */}

        <div className="my-8 grid grid-cols-1 gap-5">
          {studentList && (selectedDate == null || selectedDate == formattedDate) ? (
            studentList.map((data, index) => (
              <div
                key={index}
                className="rounded-xl flex justify-between"
                style={{
                  width: "960px",
                  height: "60px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex ">
                  <div className="py-3 px-5">
                    <div
                      className="rounded-full flex justify-center items-center font-bold"
                      style={{
                        height: "35px",
                        width: "35px",
                        backgroundColor: "rgba(237, 242, 255, 1)",
                        color: "rgba(20, 20, 20, 0.1)",
                      }}
                    >
                      1
                    </div>
                  </div>
                  <div className="flex items-center h-full font-bold">
                    {data.first_name}{" "}
                    {data.last_name}
                  </div>
                </div>
                <div className="flex items-center justify-center pe-5 gap-3">
                  <input
                    type="radio"
                    name={`attendance[${index}]`}
                    className="hidden"
                    id={`absent[${index}]`}
                    onChange={() => { handleOptionChange(index, "false", data.student_id) }} // Handle Absent option selection
                  />
                  <label
                    htmlFor={`absent[${index}]`}
                    className="rounded cursor-pointer  transform transition-transform active:scale-90 text-center pt-1"
                    style={{
                      width: "73px",
                      height: "30px",
                      backgroundColor:
                        selectedOptions[index] === "false"
                          ? "red"
                          : "rgba(246, 247, 250, 1)",
                      color:
                        selectedOptions[index] === "false"
                          ? "white"
                          : "rgba(199, 201, 217, 1)",
                    }}
                  >
                    A
                  </label>
                  <input
                    type="radio"
                    name={`attendance[${index}]`}
                    className="hidden"
                    id={`present[${index}]`}
                    onChange={() => { handleOptionChange(index, "true", data.student_id) }} // Handle Present option selection
                  />
                  <label
                    htmlFor={`present[${index}]`}
                    className="rounded cursor-pointer  transform transition-transform active:scale-90 text-center pt-1 ml-4"
                    style={{
                      width: "73px",
                      height: "30px",
                      backgroundColor:
                        selectedOptions[index] === "true"
                          ? "green"
                          : "rgba(246, 247, 250, 1)",
                      color:
                        selectedOptions[index] === "true"
                          ? "white"
                          : "rgba(199, 201, 217, 1)",
                    }}
                  >
                    P
                  </label>
                </div>
              </div>
            ))
          ) : (
            attendance_list && attendance_list != null ? (
              attendance_list.map((data, index) => (
                <div
                  key={index}
                  className="rounded-xl flex justify-between"
                  style={{
                    width: "960px",
                    height: "60px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex ">
                    <div className="py-3 px-5">
                      <div
                        className="rounded-full flex justify-center items-center font-bold"
                        style={{
                          height: "35px",
                          width: "35px",
                          backgroundColor: "rgba(237, 242, 255, 1)",
                          color: "rgba(20, 20, 20, 0.1)",
                        }}
                      >
                        1
                      </div>
                    </div>
                    <div className="flex items-center h-full font-bold">
                      {data.student_master.first_name}{" "}
                      {data.student_master.last_name}
                    </div>
                  </div>
                  <div className="flex items-center justify-center pe-5 gap-3">
                    <input
                      type="radio"
                      name={`attendance[${index}]`}
                      className="hidden"
                      id={`absent[${index}]`}
                      onChange={() => { handleOptionChange(index, "false", data.student_id) }} // Handle Absent option selection
                    />
                    <label
                      htmlFor={`absent[${index}]`}
                      className="rounded cursor-pointer  transform transition-transform active:scale-90 text-center pt-1"
                      style={{
                        width: "73px",
                        height: "30px",
                        backgroundColor:
                          selectedOptions[index] === "false"
                            ? "red"
                            : "rgba(246, 247, 250, 1)",
                        color:
                          selectedOptions[index] === "false"
                            ? "white"
                            : "rgba(199, 201, 217, 1)",
                      }}
                    >
                      A
                    </label>
                    <input
                      type="radio"
                      name={`attendance[${index}]`}
                      className="hidden"
                      id={`present[${index}]`}
                      onChange={() => { handleOptionChange(index, "true", data.student_id) }} // Handle Present option selection
                    />
                    <label
                      htmlFor={`present[${index}]`}
                      className="rounded cursor-pointer  transform transition-transform active:scale-90 text-center pt-1 ml-4"
                      style={{
                        width: "73px",
                        height: "30px",
                        backgroundColor:
                          selectedOptions[index] === "true"
                            ? "green"
                            : "rgba(246, 247, 250, 1)",
                        color:
                          selectedOptions[index] === "true"
                            ? "white"
                            : "rgba(199, 201, 217, 1)",
                      }}
                    >
                      P
                    </label>
                  </div>
                </div>
              ))) : (
              <h1>No data to show</h1>
            )
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Attendance;
