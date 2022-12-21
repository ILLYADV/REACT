import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 20,
    lesson: {
        topic: "Redux Toolkit"
    },
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increaseAction: (state, action) => {
            state.counter = state.counter + Number(action.payload);
        },
        decreaseAction: (state, action) => {
            state.counter = state.counter - Number(action.payload);
        },
    },
})

export const {increaseAction, decreaseAction} = counterSlice.actions;

export default counterSlice.reducer;