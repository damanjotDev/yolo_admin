
import { UserModal } from '../utils/modals';
import {  addUser, editUser, getUser, getUsers, removeUser } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface UsersModal {
  count: number;
  rows: UserModal[]
}

interface UserInitialStateType {
  isLogin: boolean;
  users: null | UsersModal;
  usersLoading: boolean;
  userDetails: null | UserModal;
  userDetailsLoading: boolean;
  error: boolean
} 


const initialState: UserInitialStateType = {
  isLogin: false,
  users: null,
  usersLoading: false,
  userDetails: null,
  userDetailsLoading: false,
  error: false
}


const UserSlice = createSlice({
  name: "UserSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(addUser.pending, (state) => {
      state.userDetailsLoading = true
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.userDetails = action.payload
      state.userDetailsLoading = false
    })
    builder.addCase(addUser.rejected, (state, action) => {
      state.error = true
      state.userDetailsLoading = false
    })

    builder.addCase(editUser.pending, (state) => {
      state.userDetailsLoading = true
    })
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.userDetails = action.payload
      state.userDetailsLoading = false
    })
    builder.addCase(editUser.rejected, (state, action) => {
      state.error = true
      state.userDetailsLoading = false
    })

    builder.addCase(getUser.pending, (state) => {
      state.userDetailsLoading = true
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userDetails = action.payload
      state.userDetailsLoading = false
    })
    builder.addCase(getUser.rejected, (state, action) => {
      state.error = true
      state.userDetailsLoading = false
    })

    builder.addCase(getUsers.pending, (state) => {
      state.usersLoading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.usersLoading = false
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = true
      state.usersLoading = false
    })

    builder.addCase(removeUser.pending, (state) => {
      state.userDetailsLoading = true
    })
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.userDetailsLoading = false
    })
    builder.addCase(removeUser.rejected, (state, action) => {
      state.error = true
      state.userDetailsLoading = false
    })

  }
})

export const UserActions = {
   ...UserSlice.actions, //This includes all the action methods written above
}

export const UserReducer = UserSlice.reducer //This is stored in the main store
