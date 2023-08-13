import React, { useEffect, useRef } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Footer from "../Footer/Footer";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import {
  AddNotes,
  DeleteNotes,
  Get_Notes,
  updateNotes,
} from "../API_Handling/HandlingSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Notes = () => {
  const dispatch = useDispatch();
  const { subjectId } = useParams();
  const [chapter_name, setChapter_name] = useState("");
  const [file, setFile] = useState("");
  const [uid, setUid] = useState("");
  const [addNotes, setAddNotes] = useState("");
  const [addFile, setAddFile] = useState("");

  useEffect(() => {
    // console.log(subjectId);
    dispatch(Get_Notes(subjectId));
  }, []);

  const response = useSelector((state) => state.API_Management.Get_Notes);
  // const dispatch = useDispatch();

  const handleAddNotes = () => {
    const formData = new FormData();
    formData.append("notes", addFile);
    console.log(...formData)
    console.log(subjectId)
    console.log(addNotes)
    dispatch(AddNotes({formData, subjectId, addNotes}));
  }

  const editNotes = () => {
    console.log("clicked");
    const formData = new FormData();
    // formData.append("name", chapter_name);
    formData.append("notes", file);
    console.log(...formData);
    console.log(uid);
    dispatch(updateNotes({ formData, uid, chapter_name }))
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const deleteNotes = async () => {
    console.log("delete button clicked");
    console.log(uid);
    const jsonData = {
      handwritten_id: uid,
    };
    const data = JSON.stringify(jsonData);
    console.log(jsonData);
    // dispatch(DeleteNotes(data)).then(()=>window.location.reload()).catch((err)=>alert("Not Deleted"))

    try {
      const response = await axios({
        method: "delete",
        url: `http://13.233.3.122:8010/api/teacher/notes/deleteNotes`,
        body: { handwritten_id: uid }, // Corrected: Use 'data' instead of 'body'
        headers: {
          Authorization: Cookies.get("token"),
        },
      });

      // Only continue if the delete operation was successful
      if (response.status === 200) {
        window.location.reload();
        alert("Notes deleted Successfully");
      } else {
        console.log("Delete operation failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

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

  const [editopen, seteditOpen] = React.useState(false);
  const handleeditOpen = () => {
    seteditOpen(true);
  };
  const handleeditClose = () => seteditOpen(false);

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
            Add Handwritten Notes
          </h2>
          <div className="mt-5">
            <div className="flex flex-col">
              <label className="font-bold text-lg">Chapter</label>
              <input
                type="text"
                placeholder="Enter your chapter name"
                value={addNotes}
                onChange={(event)=>setAddNotes(event.target.value)}
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
                  id="note-upload"
                  style={{
                    display: "none",
                  }}
                  type="file"
                  ref={fileInputRef}
                  value={addFile}
                  onChange={(event)=>setAddFile(event.target.value)}
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
                  onClick={handleAddNotes}
                >
                  Upload
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={editopen}
        onClose={handleeditClose}
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
            Edit Handwritten Notes
          </h2>
          <div className="mt-5">
            <div className="flex flex-col">
              <label className="font-bold text-lg">Chapter</label>
              <input
                type="text"
                placeholder="Enter your chapter name"
                value={chapter_name}
                onChange={(e) => setChapter_name(e.target.value)}
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
                  id="note-upload"
                  style={{
                    display: "none",
                  }}
                  type="file"
                  ref={fileInputRef}
                  value={file}
                  onChange={(e) => setFile(e.target.value)}
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
                  onClick={editNotes}
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
          <div className="font-extrabold text-2xl">Handwritten Notes</div>
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
          <div className="grid grid-cols-2 gap-6">
            {/* mapping starts here */}
            {response.map((item) => (
              <div
                className="rounded-xl"
                style={{
                  width: "490px",
                  height: "106px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex items-center justify-between h-full px-5">
                  <a href={item.file} className="flex flex-col">
                    <div className="font-bold">{item.name}</div>
                    <div
                      className="mt-2 text-xs flex items-center"
                      style={{ color: "rgba(140, 140, 140, 1)" }}
                    >
                      <div>4 Topics</div>
                      <div
                        className="ml-2"
                        style={{
                          height: "15px",
                          border: "1px solid rgba(140, 140, 140, 1)",
                        }}
                      ></div>
                      <div className="ml-2">
                        Uploaded on {item.date_created}
                      </div>
                    </div>
                  </a>
                  <div className="flex">
                    <div
                      className="rounded-full flex justify-center items-center"
                      style={{
                        backgroundColor: "rgba(246, 247, 250, 1)",
                        height: "60px",
                        width: "60px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        deleteNotes();
                        setUid(item.handwritten_id);
                      }}
                    >
                      <DeleteOutlineOutlinedIcon
                        style={{ color: "rgba(116, 116, 116, 1)" }}
                      />
                    </div>
                    <div
                      className="rounded-full flex justify-center items-center ml-4"
                      style={{
                        backgroundColor: "rgba(246, 247, 250, 1)",
                        height: "60px",
                        width: "60px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleeditOpen();
                        setUid(item.handwritten_id);
                      }}
                      // onClick={()=>setUid(item.handwritten.id)}
                    >
                      <EditOutlinedIcon
                        style={{ color: "rgba(116, 116, 116, 1)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* end of card */}
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

export default Notes;
