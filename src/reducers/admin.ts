
import { adminLogin, getAdminDetails } from '../services';
import {createSlice, isAnyOf} from '@reduxjs/toolkit'



interface AdminInitialStateType {
  isLogin: boolean;
  adminDetails: null | AdminReviewModal;
  adminDetailsLoading: boolean;
  error: boolean
} // the type of the initial state of slice.

// interface SocialLinkModal {
//     id: string;
//     social_type: string;
//     social_link: string;
//   }

export interface AdminReviewModal {
  id: string;
  email: string;
  name: string;
  password: string;
  imageUrl: string;
  status: 'active' | 'hidden',
  createdAt: Date;
  updatedAt: Date;
}

const initialState: AdminInitialStateType = {
  isLogin: false,
  adminDetails: null,
  adminDetailsLoading: false,
  error: false
}


const AdminSlice = createSlice({
  name: "adminSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setInitialState: (state, action) => initialState
  }, // action methods
  extraReducers: (builder) => {
    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(getAdminDetails.pending, (state) => {
      state.adminDetailsLoading = true
    })
    builder.addCase(getAdminDetails.fulfilled, (state, action) => {
      state.adminDetails = action.payload
      state.adminDetailsLoading = false
    })
    builder.addCase(getAdminDetails.rejected, (state, action) => {
      state.error = true
      state.adminDetailsLoading = false
    })

    builder.addCase(adminLogin.pending, (state) => {
      state.adminDetailsLoading = true
    })
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.adminDetails = action.payload
      state.adminDetailsLoading = false
      state.isLogin= true
    })
    builder.addCase(adminLogin.rejected, (state, action) => {
      state.error = true
      state.adminDetailsLoading = false
    })
  }
})

export const adminActions = {
   ...AdminSlice.actions, //This includes all the action methods written above
}

export const AdminReducer = AdminSlice.reducer //This is stored in the main store
