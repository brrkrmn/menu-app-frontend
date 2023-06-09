import { configureStore } from "@reduxjs/toolkit";
import loggedInUserReducer from "./reducers/loggedInUserReducer";
export const store = configureStore({
    reducer:{
        loggedInUser: loggedInUserReducer,
    },
})