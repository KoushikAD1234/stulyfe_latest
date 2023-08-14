import React, { useRef } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { QnA_API } from "../API_Handling/HandlingSlice";
import PdfView from "./PdfView";
import { useState } from "react";

const QnA = () => {

  const { classId, subjectId } = useParams();
  const [qfile, setQfile] = useState("");
  const [afile, setAfile] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(afile);
  }, [afile])



  useEffect(() => {
    console.log("hello")
    dispatch(QnA_API({ classId, subjectId }));
    console.log(response)
  }, []);

  const response = useSelector((state) => state.API_Management.QnA_API)



  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30rem",
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
  const handleOpen = (answer) => {
    setOpen(true);
    setAfile(answer)
  }
  const handleClose = () => setOpen(false);

  const [openQuestion, setOpenQuestion] = React.useState(false);
  const handleOpenQuestion = (question) => {
    setOpenQuestion(true);
    setQfile(question)
  }
  const handleCloseQuestion = () => { setOpenQuestion(false); }

  const [file, setFile] = useState('');

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
              fontWeight: "bold",
            }}
            className="text-gray-900 text-lg"
          >
            Share
          </h2>
          <div className="mt-1">
            <div className="text-slate-500">
              Do you want to share Answer paper?
            </div>
            <div className="flex mt-2 justify-center gap-5 items-center">
              <Link to={`/home/answerpdfview?qfile=${afile}`}>
                <Button
                  variant="contained"
                  size="small"
                  className="px-5 "
                  style={{
                    textTransform: "none",
                    fontSize: "15px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    border: "1px solid rgba(196, 103, 255, 0.25)",
                    background: "#F9EFFF",
                    boxShadow: "none",
                    color: "#C467FF",
                  }}
                >
                  Preview
                </Button>
              </Link>
              <Button
                variant="contained"
                size="small"
                className="px-5 "
                color="secondary"
                style={{
                  textTransform: "none",
                  fontSize: "15px",
                  boxShadow: "none",
                }}
              >
                Share
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={openQuestion}
        onClose={handleCloseQuestion}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <h2
            style={{
              fontWeight: "bold",
            }}
            className="text-gray-900 text-lg"
          >
            Share
          </h2>
          <div className="mt-1">
            <div className="text-slate-500">
              Do you want to share Question paper?
            </div>
            <div className="flex mt-2 justify-center gap-5 items-center">
              <Link to={`/home/questionpdfview?qfile=${qfile}`}>
                <Button
                  variant="contained"
                  size="small"
                  className="px-5 "
                  style={{
                    textTransform: "none",
                    fontSize: "15px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    border: "1px solid rgba(196, 103, 255, 0.25)",
                    background: "#F9EFFF",
                    boxShadow: "none",
                    color: "#C467FF",
                  }}
                >

                  Preview
                </Button>
              </Link>
              <Button
                variant="contained"
                size="small"
                className="px-5 "
                color="secondary"
                style={{
                  textTransform: "none",
                  fontSize: "15px",
                  boxShadow: "none",
                }}
              >
                Share
              </Button>
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
          <div className="font-extrabold text-2xl">Stulyfe Q/A</div>
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

        <div className=" flex justify-center py-16">
          <div className="grid grid-cols-2 gap-10">
            {response.map((item) => (
              <div
                className="rounded-xl relative"
                style={{
                  height: "fit-content",
                  width: "460px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="px-6 py-8">
                  <div className="font-bold text-xl">{item.name}</div>
                </div>
                <div className="absolute top-0 right-0">
                  <div
                    style={{
                      borderBottomLeftRadius: "35px",
                      borderTopRightRadius: "10px",
                    }}
                    className="py-3 text-green-700 bg-green-200 px-8 text-sm"
                  >
                    Successful
                  </div>
                </div>

                <div className="flex ">
                  <button
                    onClick={() => handleOpenQuestion(item.question_file)}
                    className="rounded-bl-xl"
                    style={{
                      width: "230px",
                      height: "50px",
                      backgroundColor: "rgba(249, 239, 255, 1)",
                      color: "rgba(196, 103, 255, 1)",
                    }}
                  >
                    Sample Question
                  </button>
                  <button
                    onClick={() => handleOpen(item.answer_file)}
                    className="rounded-br-xl"
                    style={{
                      width: "230px",
                      height: "50px",
                      backgroundColor: "rgba(196, 103, 255, 1)",
                      color: "white",
                    }}
                  >
                    {/* {setAfile(item.answer_file)} */}
                    Sample Answer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default QnA;
