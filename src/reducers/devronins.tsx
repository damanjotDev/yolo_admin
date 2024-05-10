
import { devroninsAdminLogin, getDevroninsDetails } from '../services';
import {createSlice, isAnyOf} from '@reduxjs/toolkit'



interface DevroninsInitialStateType {
  isLogin: boolean;
  adminDetails: any;
  adminDetailsLoading: boolean;
  devroninsDetails: null | DevroninsReviewModal
  devroninsDetailsLoading: boolean
  error: boolean
} // the type of the initial state of slice.

interface SocialLinkModal {
    id: string;
    social_type: string;
    social_link: string;
  }

export interface DevroninsReviewModal {
  id: string;
  name: string;
  description: string;
  location: any;
  social_links: SocialLinkModal[] | null;
  open_hours: string;
  address: string;
  contact_no: string
}

const initialState: DevroninsInitialStateType = {
  isLogin: false,
  adminDetails: null,
  adminDetailsLoading: false,
  devroninsDetails : null ,
  devroninsDetailsLoading: false,
  error: false
}


const DevroninsSlice = createSlice({
  name: "devroninsSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {}, // action methods
  extraReducers: (builder) => {
    builder.addCase(getDevroninsDetails.pending, (state) => {
      state.devroninsDetailsLoading = true
    })
    builder.addCase(getDevroninsDetails.fulfilled, (state, action) => {
      state.devroninsDetails = action.payload
      state.devroninsDetailsLoading = false
    })
    builder.addCase(getDevroninsDetails.rejected, (state, action) => {
      state.error = true
      state.devroninsDetailsLoading = false
    })

    builder.addCase(devroninsAdminLogin.pending, (state) => {
      state.adminDetailsLoading = true
    })
    builder.addCase(devroninsAdminLogin.fulfilled, (state, action) => {
      state.adminDetails = action.payload
      state.adminDetailsLoading = false
      state.isLogin= true
    })
    builder.addCase(devroninsAdminLogin.rejected, (state, action) => {
      state.error = true
      state.adminDetailsLoading = false
    })
  }
})

export const devroninsActions = {
   ...DevroninsSlice.actions, //This includes all the action methods written above
}

const DevroninsReducer = DevroninsSlice.reducer //This is stored in the main store
export default DevroninsReducer
