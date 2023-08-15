import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setLoginResponse } from "./DataSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

// const token = useSelector((state)=>state.Data_Management.LoginResponse)
// Create (login form)
export const login = createAsyncThunk(
  "login",
  async (jsonData, { rejectWithValue, dispatch }) => {
    try {
      // const navigate =useNavigate();
      console.log("API function");
      // const dispatch = useDispatch();
      const response = await axios({
        method: "post",
        url: "http://13.233.3.122:8010/api/admin/onboard/login",
        data: jsonData,
      });
      // console.log(...jsonData);
      console.log(response.data.data.token);
      Cookies.set("token", response.data.data.token);
      // console.log(token)
      // navigate("/home");
      // dispatch(setLoginResponse(response.data));
      return response.data;
    } catch (err) {
      alert("Authentication failed!!");
      console.log(err);
      return rejectWithValue(err.response);
    }
  }
);

// Add Notes
export const AddNotes = createAsyncThunk(
  "AddNotes",
  async ({ formData, classId,  subjectId, addNotes }, { rejectWithValue }) => {
    try {
      console.log(...formData);
      console.log(subjectId);
      console.log(addNotes);
      const response = await axios({
        method: "post",
        url: `http://13.233.3.122:8010/api/teacher/notes/addNotes?class_id=${classId}&subject_id=${subjectId}&name=${addNotes}`,
        data: formData,
        headers: {
          Authorization: Cookies.get("token"),
          "Content-Type": "multipart/form-data"
        },
      });
      console.log(response);
      alert("Data Updated Successfully");
      return response.data
    } catch (error) {
      alert("Operation failed");
      console.log("Not submitting data");
      return rejectWithValue(error.response.data);
    }
  }
);

// Add Assignments
export const AddAssignments = createAsyncThunk(
  "AddAssignments",
  async ({ formData, classId, subjectId, sectionId, name, desc, date }, { rejectWithValue }) => {
    try {
      // console.log(...formData);
      // console.log(subjectId);
      console.log(name);
      const response = await axios({
        method: "post",
        url: `http://13.233.3.122:8010/api/teacher/assignment/createAssignment?class_id=${classId}&subject_id=${subjectId}&section_id=${sectionId}&name=${name}&description=${desc}&submission_date=${date}`,
        data: formData,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      alert("Data Updated Successfully");
      return response.data
    } catch (error) {
      alert("Operation failed");
      console.log("Not submitting data");
      return rejectWithValue(error.response.data);
    }
  }
);

// Update Notes
export const updateNotes = createAsyncThunk(
  "updateNotes",
  async ({ formData, uid, chapter_name }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "put",
        url: `http://13.233.3.122:8010/api/teacher/notes/updateNotes?handwritten_id=${uid}&name=${chapter_name}`,
        data: formData,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      alert("Data Updated Successfully");
    } catch (error) {
      alert("Operation failed");
      console.log("Not submitting data");
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (get_profile)
export const TeacherProfile = createAsyncThunk(
  "TeacherProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/teacher/onboard/getProfile`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (get_class)
export const GetClass = createAsyncThunk(
  "GetClass",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/teacher/class/getclass`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (get_subject)
export const Subject = createAsyncThunk(
  "Subject",
  async ({ classId, classActive }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/admin/subject/getsubject?active=${classActive}&class_id=${classId}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (get_subject)
export const QnA_API = createAsyncThunk(
  "QnA_API",
  async ({ classId, subjectId }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/admin/sampleQA/get?class_id=${classId}&subject_id=${subjectId}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (get_notes)
export const Get_Notes = createAsyncThunk(
  "Get_Notes",
  async (subjectId, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/teacher/notes/getNotes?subject_id=${subjectId}`,
        // headers: {
        //   Authorization: Cookies.get("token"),
        // },
      });
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);


// Read (get_assignments)
export const Get_Assignments = createAsyncThunk(
  "Get_Assignments",
  async (subjectId, { rejectWithValue }) => {
    try {
      console.log(Cookies.get("token"))
      console.log(subjectId)
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/teacher/assignment/getassignment?subject_id=${subjectId}`,
        headers: {
          Authorization: Cookies.get("token")
        },
      });
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (get_chapters)
export const Get_Chapters = createAsyncThunk(
  "Get_Chapters",
  async (subjectId, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/admin/chapter/getchapter?subject_id=${subjectId}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (get_topics)
export const Get_Topics = createAsyncThunk(
  "Get_Topics",
  async (subjectId, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/admin/topic/get_topic?chapter_id=${subjectId}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (get_attendance)
export const Get_Attendance_List = createAsyncThunk(
  "Get_Attendance_List",
  async ({ classId, subjectId, formattedDate }, { rejectWithValue }) => {
    try {
      console.log(formattedDate)
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/teacher/student/getattendance_list?class_id=${classId}&subject_id=${subjectId}&date=${formattedDate}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);


// Read (get_student_list)
export const Get_Student_List = createAsyncThunk(
  "Get_Student_List",
  async ({ classId, sectionId }, { rejectWithValue }) => {
    try {
      // console.log(date)
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/admin/student/get?class_id=${classId}&section=${sectionId}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (Get_chapter_details)
export const Get_chapter_details = createAsyncThunk(
  "Get_chapter_details",
  async (topicId, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/admin/video/getvideo?topic_id=${topicId}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      return response.data.data[0];
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Read (Get_chapter_Notes)
export const Get_chapter_Notes = createAsyncThunk(
  "Get_chapter_Notes",
  async (topicId, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://13.233.3.122:8010/api/admin/video/getVide_with_notest?topic_id=${topicId}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      return response.data.data[0];
    } catch (error) {
      console.log("Not submitting data");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete Notes
export const DeleteNotes = createAsyncThunk("DeleteNotes", async (jsonData, { rejectWithValue }) => {
  try {
    console.log(jsonData)
    const response = await axios({
      method: "delete",
      url: `http://13.233.3.122:8010/api/teacher/notes/deleteNotes`,
      body: jsonData,
      headers: {
        Authorization: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJVUlhzYm1tNVJqNjA2ZllPM0VyMyIsInVzZXJfaWQiOiIyVVJYc2JtbTVSajYwNmZZTzNFcjMiLCJlbWFpbCI6InNoaXYrdGVhY2hlckBnbWFpbC5jb20iLCJsb2dpblRpbWUiOjE2ODEwODM3ODM5NjEsImdlbmVyYXRlZF9hdCI6MTY4MTA4Mzc4Mzk2MSwiaWF0IjoxNjgxMDgzNzgzLCJleHAiOjE3MTI2NDEzODMsImlzcyI6IlJlY3J1aXQifQ.g4ADP3vlqRzyvU8_4t5zUejEreR40Wc9uUUtj_dk4oij_9YzDAVw1Kj7AhikmsPXhPV77NgKf9ze1tOiRWQeAA",
      },
    });
    console.log(response);
    alert("Notes Deleted Successfully");
    return response.data;
  } catch (err) {
    console.log(err);
    return rejectWithValue(err.response.data);
  }
});

// Create Attendance
export const CreateAttendance = createAsyncThunk(
  "CreateAttendance",
  async (jsonData, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "post",
        url: `http://13.233.3.122:8010/api/teacher/student/takeAttendance`,
        data: jsonData,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      alert("Data Updated Successfully");
      return response.data
    } catch (error) {
      alert("Operation failed");
      console.log("Not submitting data");
      return rejectWithValue(error.response.data);
    }
  }
);

export const handlingAPIs = createSlice({
  name: "handlingAPI",
  initialState: {
    TeacherProfile: [],
    login: [],
    GetClass: [],
    Subject: [],
    QnA_API: [],
    Get_Notes: [],
    Get_Chapters: [],
    Get_Topics: [],
    Get_chapter_details: [],
    Get_Assignments: [],
    Get_chapter_Notes: [],
    Get_Attendance_List: [],
    Get_Student_List: [],
  },
  reducers: {
    dummy: (state) => state,
  },
  extraReducers: (builder) => {
    builder

      // Teacher_Profile
      .addCase(TeacherProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(TeacherProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.TeacherProfile=action.payload;
      })
      .addCase(TeacherProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_class
      .addCase(GetClass.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetClass.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.GetClass=action.payload;
      })
      .addCase(GetClass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_attendance
      .addCase(Get_Attendance_List.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_Attendance_List.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Get_Attendance_List.push(action.payload);
      })
      .addCase(Get_Attendance_List.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_subject
      .addCase(Subject.pending, (state) => {
        state.loading = true;
      })
      .addCase(Subject.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Subject = action.payload;
      })
      .addCase(Subject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_qna
      .addCase(QnA_API.pending, (state) => {
        state.loading = true;
      })
      .addCase(QnA_API.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.QnA_API = action.payload;
      })
      .addCase(QnA_API.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_Student_List
      .addCase(Get_Student_List.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_Student_List.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Get_Student_List = action.payload;
      })
      .addCase(Get_Student_List.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_notes
      .addCase(Get_Notes.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_Notes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Get_Notes = action.payload;
      })
      .addCase(Get_Notes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })


      // Get_chapter_details
      .addCase(Get_chapter_details.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_chapter_details.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Get_chapter_details = action.payload;
      })
      .addCase(Get_chapter_details.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_chapter_Notes
      .addCase(Get_chapter_Notes.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_chapter_Notes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Get_chapter_Notes = action.payload;
      })
      .addCase(Get_chapter_Notes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_Assignments
      .addCase(Get_Assignments.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_Assignments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Get_Assignments = action.payload;
      })
      .addCase(Get_Assignments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_chapters
      .addCase(Get_Chapters.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_Chapters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Get_Chapters = action.payload;
      })
      .addCase(Get_Chapters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Get_topics
      .addCase(Get_Topics, (state) => {
        state.loading = true;
      })
      .addCase(Get_Topics.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Get_Topics = action.payload;
      })
      .addCase(Get_Topics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Delete Suspended User
      .addCase(DeleteNotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(DeleteNotes.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.data = state.data.filter(
        //   (user) => user.username !== action.payload.username
        // );
      })
      .addCase(DeleteNotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      })
  },
});

export default handlingAPIs.reducer;
