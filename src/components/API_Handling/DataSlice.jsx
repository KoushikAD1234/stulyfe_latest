import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    LoginResponse:[],
}

const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers : {
        setLoginResponse: (state, action) => {
            state.LoginResponse = action.payload;
        }
    }
})

export const { setLoginResponse } = DataSlice.actions

export default DataSlice.reducer;