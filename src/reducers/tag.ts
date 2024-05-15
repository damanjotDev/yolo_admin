
import { TagModal } from '../utils/modals';
import {  addTag, editTag, getTag, getTags, removeTag } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface TagsModal {
  count: number;
  rows: TagModal[]
}

interface TagInitialStateType {
  isLogin: boolean;
  tags: null | TagsModal;
  tagsLoading: boolean;
  tagDetails: null | TagModal;
  tagDetailsLoading: boolean;
  error: boolean
} 


const initialState: TagInitialStateType = {
  isLogin: false,
  tags: null,
  tagsLoading: false,
  tagDetails: null,
  tagDetailsLoading: false,
  error: false
}


const TagSlice = createSlice({
  name: "TagSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setTagDetails: (state, action) => {
      state.tagDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase(addTag.pending, (state) => {
      state.tagDetailsLoading = true
    })
    builder.addCase(addTag.fulfilled, (state, action) => {
      state.tagDetails = action.payload
      state.tagDetailsLoading = false
    })
    builder.addCase(addTag.rejected, (state, action) => {
      state.error = true
      state.tagDetailsLoading = false
    })

    builder.addCase(editTag.pending, (state) => {
      state.tagDetailsLoading = true
    })
    builder.addCase(editTag.fulfilled, (state, action) => {
      state.tagDetails = action.payload
      state.tagDetailsLoading = false
    })
    builder.addCase(editTag.rejected, (state, action) => {
      state.error = true
      state.tagDetailsLoading = false
    })

    builder.addCase(getTag.pending, (state) => {
      state.tagDetailsLoading = true
    })
    builder.addCase(getTag.fulfilled, (state, action) => {
      state.tagDetails = action.payload
      state.tagDetailsLoading = false
    })
    builder.addCase(getTag.rejected, (state, action) => {
      state.error = true
      state.tagDetailsLoading = false
    })

    builder.addCase(getTags.pending, (state) => {
      state.tagsLoading = true
    })
    builder.addCase(getTags.fulfilled, (state, action) => {
      state.tags = action.payload
      state.tagsLoading = false
    })
    builder.addCase(getTags.rejected, (state, action) => {
      state.error = true
      state.tagsLoading = false
    })

    builder.addCase(removeTag.pending, (state) => {
      state.tagDetailsLoading = true
    })
    builder.addCase(removeTag.fulfilled, (state, action) => {
      state.tagDetailsLoading = false
    })
    builder.addCase(removeTag.rejected, (state, action) => {
      state.error = true
      state.tagDetailsLoading = false
    })

  }
})

export const TagActions = {
   ...TagSlice.actions, //This includes all the action methods written above
}

export const TagReducer = TagSlice.reducer //This is stored in the main store
