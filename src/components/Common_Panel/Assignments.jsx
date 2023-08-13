import React, { useRef } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddAssignments, Get_Assignments } from "../API_Handling/HandlingSlice";
import { useEffect } from "react";
import PdfViewer from "./PdfSetup";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useState } from "react";

const Assignments = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [pdf, setPdf] = useState(null);
  const { classId, subjectId, sectionId } = useParams();
  const dispatch = useDispatch();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    boxShadow: 24,
    borderRadius: "20px",
    backgroundColor: "white",
    padding: "15px 30px",
  };
  const fileInputRef = useRef(null);
  const handleUploadIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(subjectId);
    dispatch(Get_Assignments(subjectId));
  }, []);

  const res = useSelector((state) => state.API_Management.Get_Assignments);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
            className="text-gray-900"
          >
            Add Assignments
          </h2>
          <div className="mt-5">
            <div className="flex flex-col">
              <label className="">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Add Name"
                style={{
                  borderRadius: "4px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  background: "#FFF",
                  padding: "10px",
                  marginTop: "5px",
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="">Description </label>
              <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                type="text"
                placeholder="Add description"
                style={{
                  borderRadius: "4px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  background: "#FFF",
                  padding: "10px",
                  marginTop: "5px",
                }}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="">Submission date </label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="datetime-local"
                placeholder="MM/DD/YY"
                style={{
                  borderRadius: "4px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  background: "#FFF",
                  padding: "10px",
                  marginTop: "5px",
                }}
              />
            </div>
            <div className=" mt-4">
              <div className="font-bold text-lg ">Upload</div>
              <div>
                <input
                  // value={pdf}
                  onChange={(e) => setPdf(e.target.files[0])}
                  id="note-upload"
                  accept=".pdf"
                  style={{
                    display: "none",
                  }}
                  type="file"
                  ref={fileInputRef}
                />
                <div
                  onClick={handleUploadIconClick}
                  style={{
                    borderRadius: "6px",
                    border: "1px solid rgba(196, 103, 255, 0.25)",
                    background: "#F9EFFF",
                    height: "203px",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <div className="text-lg text-center">
                    <LogoutIcon
                      color="secondary"
                      style={{
                        transform: "rotate(-90deg)",
                      }}
                    />
                    <div className="text-fuchsia-800">Upload</div>
                  </div>
                </div>
              </div>
              <div className="my-4 text-center">
                <Button
                  variant="contained"
                  className="px-5 my-7"
                  color="secondary"
                  onClick={() => {
                    const formData = new FormData();
                    formData.append("assignment", pdf);
                    console.log(name);
                    console.log(desc);
                    dispatch(
                      AddAssignments({
                        formData,
                        classId,
                        subjectId,
                        sectionId,
                        name,
                        desc,
                        date,
                      })
                    );
                    setPdf(null);
                    setName("");
                    setDesc("");
                    setDate("");
                  }}
                >
                  Upload
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <div className="flex justify-center items-center mt-10">
          <Link
            to="/home/subjects_info"
            style={{ position: "relative", right: "550px", cursor: "pointer" }}
          >
            <ArrowBackOutlinedIcon style={{ scale: "1.8" }} />
          </Link>
          <div className="font-extrabold text-2xl">Assignments</div>
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
          <div className="grid grid-cols-2 gap-10">
            {res.map((item) => (
              <div
                className="rounded-xl relative"
                style={{
                  width: "460px",
                  height: "170px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="px-6 py-6">
                  <div className="font-bold">{item.name}</div>
                  <div className="flex items-center mt-5">
                    <div
                      className="text-sm"
                      style={{ color: "rgba(140, 140, 140, 1)" }}
                    >
                      {item.description}
                    </div>
                    <div
                      className="ml-2"
                      style={{
                        border: "1px solid rgba(140, 140, 140, 1)",
                        height: "20px",
                      }}
                    ></div>
                    <div
                      className="text-sm ml-2"
                      style={{ color: "rgba(140, 140, 140, 1)" }}
                    >
                      Uploaded on {item.date_created}
                    </div>
                  </div>
                </div>

                <div className="flex absolute bottom-0">
                  <Link to="/home/assignmentpdfview">
                    <button
                      // onClick={() => <PdfViewer pdf={item.file} />}
                      className="rounded-bl-xl rounded-br-xl"
                      style={{
                        width: "460px",
                        height: "50px",
                        backgroundColor: "rgba(249, 239, 255, 1)",
                        color: "rgba(196, 103, 255, 1)",
                      }}
                    >
                      Veiw
                    </button>
                  </Link>
                  {/* <button
                    onClick={handleOpen}
                    className="rounded-br-xl"
                    style={{
                      width: "230px",
                      height: "50px",
                      backgroundColor: "rgba(196, 103, 255, 1)",
                      color: "white",
                    }}
                  >
                    Add
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={handleOpen}
          className="rounded flex justify-center items-center cursor-pointer text-white"
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: "rgba(196, 103, 255, 1)",
            position: "fixed",
            right: "55px",
            bottom: "105px",
          }}
        >
          <AddOutlinedIcon style={{ transform: "scale(1.2)" }} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Assignments;
