
import { HomeModal } from '../utils/modals';
import {  addHome, editHome, getHome, getHomes, removeHome } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface HomesModal {
  count: number;
  rows: HomeModal[]
}

interface HomeInitialStateType {
  homes: null | HomesModal;
  homesLoading: boolean;
  homeDetails: null | HomeModal;
  homeDetailsLoading: boolean;
  error: boolean
} 


const initialState: HomeInitialStateType = {
  homes: null,
  homesLoading: false,
  homeDetails: null,
  homeDetailsLoading: false,
  error: false
}


const HomeSlice = createSlice({
  name: "HomeSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setHomeDetails: (state, action) => {
      state.homeDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(addHome.pending, (state) => {
      state.homeDetailsLoading = true
    })
    builder.addCase(addHome.fulfilled, (state, action) => {
      state.homeDetails = action.payload
      state.homeDetailsLoading = false
    })
    builder.addCase(addHome.rejected, (state, action) => {
      state.error = true
      state.homeDetailsLoading = false
    })

    builder.addCase(editHome.pending, (state) => {
      state.homeDetailsLoading = true
    })
    builder.addCase(editHome.fulfilled, (state, action) => {
      state.homeDetails = action.payload
      state.homeDetailsLoading = false
    })
    builder.addCase(editHome.rejected, (state, action) => {
      state.error = true
      state.homeDetailsLoading = false
    })

    builder.addCase(getHome.pending, (state) => {
      state.homeDetailsLoading = true
    })
    builder.addCase(getHome.fulfilled, (state, action) => {
      state.homeDetails = action.payload
      state.homeDetailsLoading = false
    })
    builder.addCase(getHome.rejected, (state, action) => {
      state.error = true
      state.homeDetailsLoading = false
    })

    builder.addCase(getHomes.pending, (state) => {
      state.homesLoading = true
    })
    builder.addCase(getHomes.fulfilled, (state, action) => {
      state.homes = action.payload
      state.homesLoading = false
    })
    builder.addCase(getHomes.rejected, (state, action) => {
      state.error = true
      state.homesLoading = false
    })

    builder.addCase(removeHome.pending, (state) => {
      state.homeDetailsLoading = true
    })
    builder.addCase(removeHome.fulfilled, (state, action) => {
      state.homeDetailsLoading = false
    })
    builder.addCase(removeHome.rejected, (state, action) => {
      state.error = true
      state.homeDetailsLoading = false
    })

  }
})

export const HomeActions = {
   ...HomeSlice.actions, //This includes all the action methods written above
}

export const HomeReducer = HomeSlice.reducer //This is stored in the main store
