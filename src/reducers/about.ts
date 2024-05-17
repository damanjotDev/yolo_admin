
import { AboutModal } from '../utils/modals';
import {  addAbout, editAbout, getAbout, getAbouts, removeAbout } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface AboutsModal {
  count: number;
  rows: AboutModal[]
}

interface AboutInitialStateType {
  isLogin: boolean;
  abouts: null | AboutsModal;
  aboutsLoading: boolean;
  aboutDetails: null | AboutModal;
  aboutDetailsLoading: boolean;
  error: boolean
} 


const initialState: AboutInitialStateType = {
  isLogin: false,
  abouts: null,
  aboutsLoading: false,
  aboutDetails: null,
  aboutDetailsLoading: false,
  error: false
}


const AboutSlice = createSlice({
  name: "AboutSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setAboutDetails: (state, action) => {
      state.aboutDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase(addAbout.pending, (state) => {
      state.aboutDetailsLoading = true
    })
    builder.addCase(addAbout.fulfilled, (state, action) => {
      state.aboutDetails = action.payload
      state.aboutDetailsLoading = false
    })
    builder.addCase(addAbout.rejected, (state, action) => {
      state.error = true
      state.aboutDetailsLoading = false
    })

    builder.addCase(editAbout.pending, (state) => {
      state.aboutDetailsLoading = true
    })
    builder.addCase(editAbout.fulfilled, (state, action) => {
      state.aboutDetails = action.payload
      state.aboutDetailsLoading = false
    })
    builder.addCase(editAbout.rejected, (state, action) => {
      state.error = true
      state.aboutDetailsLoading = false
    })

    builder.addCase(getAbout.pending, (state) => {
      state.aboutDetailsLoading = true
    })
    builder.addCase(getAbout.fulfilled, (state, action) => {
      state.aboutDetails = action.payload
      state.aboutDetailsLoading = false
    })
    builder.addCase(getAbout.rejected, (state, action) => {
      state.error = true
      state.aboutDetailsLoading = false
    })

    builder.addCase(getAbouts.pending, (state) => {
      state.aboutsLoading = true
    })
    builder.addCase(getAbouts.fulfilled, (state, action) => {
      state.abouts = action.payload
      state.aboutsLoading = false
    })
    builder.addCase(getAbouts.rejected, (state, action) => {
      state.error = true
      state.aboutsLoading = false
    })

    builder.addCase(removeAbout.pending, (state) => {
      state.aboutDetailsLoading = true
    })
    builder.addCase(removeAbout.fulfilled, (state, action) => {
      state.aboutDetailsLoading = false
    })
    builder.addCase(removeAbout.rejected, (state, action) => {
      state.error = true
      state.aboutDetailsLoading = false
    })

  }
})

export const AboutActions = {
   ...AboutSlice.actions, //This includes all the action methods written above
}

export const AboutReducer = AboutSlice.reducer //This is stored in the main store
