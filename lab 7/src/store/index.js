import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        counterReducer,
        userReducer
    },
})