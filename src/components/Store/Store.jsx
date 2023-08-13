import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  handlingAPIs  from "../API_Handling/HandlingSlice";
import DataSlice from "../API_Handling/DataSlice";

const rootReducer = combineReducers({
    API_Management: handlingAPIs,
    Data_Management: DataSlice,
})

const store = configureStore({
    reducer: rootReducer
});

export default store;