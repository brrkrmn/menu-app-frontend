import { createSlice } from "@reduxjs/toolkit";

const loggedInUserSlice = createSlice({
    name: 'loggedInUser',
    initialState: null,
    reducers: {
        login: (state, action) => {
            return action.payload
        },
        logout: () => {
            return null
        }
    }
})

export const initializeLoggedInUser = () => {
    return async dispatch => {
        const loggedInUser = window.localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            dispatch(login(user))
        }
    }
}

export const logUserIn = (user) => {
    return async dispatch => {
        dispatch(login(user))
        window.localStorage.setItem('loggedInUser', JSON.stringify(user))
    }
}

export const removeUser = () => {
    return async dispatch => {
        dispatch(logout())
        window.localStorage.removeItem("loggedInUser")
    }
}

export const { login, logout } = loggedInUserSlice.actions
export default loggedInUserSlice.reducer