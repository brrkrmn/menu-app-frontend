import { createSlice } from "@reduxjs/toolkit";
import usersService from '../services/users';

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers : (state, action) => {
            return action.payload
        },
        appendUser : (state, action) => {
            state.push(action.payload)
        },
    }
})

export const initializeUsers = () => {
    return async dispatch => {
        const users = await usersService.getUsers()
        dispatch(setUsers(users))
    }
}

export const createUser = (content) => {
    return async dispatch => {
        const newUser = await usersService.create(content)
        dispatch(appendUser(newUser))
    }
}

export const { setUsers, appendUser } = usersSlice.actions;
export default usersSlice.reducer;