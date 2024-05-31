
import { PageModal } from '../utils/modals';
import {  addPage, editPage, getPage, getPages, removePage } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface PagesModal {
  count: number;
  rows: PageModal[]
}

interface PageInitialStateType {
  pages: null | PagesModal;
  pagesLoading: boolean;
  pageDetails: null | PageModal;
  pageDetailsLoading: boolean;
  error: boolean
} 


const initialState: PageInitialStateType = {
  pages: null,
  pagesLoading: false,
  pageDetails: null,
  pageDetailsLoading: false,
  error: false
}


const PageSlice = createSlice({
  name: "PageSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setPageDetails: (state, action) => {
      state.pageDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {
    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(addPage.pending, (state) => {
      state.pageDetailsLoading = true
    })
    builder.addCase(addPage.fulfilled, (state, action) => {
      state.pageDetails = action.payload
      state.pageDetailsLoading = false
    })
    builder.addCase(addPage.rejected, (state, action) => {
      state.error = true
      state.pageDetailsLoading = false
    })

    builder.addCase(editPage.pending, (state) => {
      state.pageDetailsLoading = true
    })
    builder.addCase(editPage.fulfilled, (state, action) => {
      state.pageDetails = action.payload
      state.pageDetailsLoading = false
    })
    builder.addCase(editPage.rejected, (state, action) => {
      state.error = true
      state.pageDetailsLoading = false
    })

    builder.addCase(getPage.pending, (state) => {
      state.pageDetailsLoading = true
    })
    builder.addCase(getPage.fulfilled, (state, action) => {
      state.pageDetails = action.payload
      state.pageDetailsLoading = false
    })
    builder.addCase(getPage.rejected, (state, action) => {
      state.error = true
    state.pageDetailsLoading = false
    })

    builder.addCase(getPages.pending, (state) => {
      state.pagesLoading = true
    })
    builder.addCase(getPages.fulfilled, (state, action) => {
      state.pages = action.payload
      state.pagesLoading = false
    })
    builder.addCase(getPages.rejected, (state, action) => {
      state.error = true
      state.pagesLoading = false
    })

    builder.addCase(removePage.pending, (state) => {
      state.pageDetailsLoading = true
    })
    builder.addCase(removePage.fulfilled, (state, action) => {
      state.pageDetailsLoading = false
    })
    builder.addCase(removePage.rejected, (state, action) => {
      state.error = true
      state.pageDetailsLoading = false
    })

  }
})

export const PageActions = {
   ...PageSlice.actions, //This includes all the action methods written above
}

export const PageReducer = PageSlice.reducer //This is stored in the main store
