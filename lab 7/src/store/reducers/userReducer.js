import {createSlice} from "@reduxjs/toolkit";
import {uid} from "uid";

const initialState = {
    users: []
}

const setNewId = (array) => {
    return array.map(element => ({...element, id: uid()}))
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserAction: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        addUsersAction: (state, action) => {
            state.users = [...state.users, ...setNewId(action.payload)];
        },
        removeUserAction: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    },
})

export const {addUserAction, addUsersAction, removeUserAction} = userSlice.actions;

export default userSlice.reducer;