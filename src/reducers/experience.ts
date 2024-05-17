
import { ExperienceModal } from '../utils/modals';
import {  addExperience, editExperience, getExperience, getExperiences, removeExperience } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface ExperiencesModal {
  count: number;
  rows: ExperienceModal[]
}

interface ExperienceInitialStateType {
  experiences: null | ExperiencesModal;
  experiencesLoading: boolean;
  experienceDetails: null | ExperienceModal;
  experienceDetailsLoading: boolean;
  error: boolean
} 


const initialState: ExperienceInitialStateType = {
  experiences: null,
  experiencesLoading: false,
  experienceDetails: null,
  experienceDetailsLoading: false,
  error: false
}


const ExperienceSlice = createSlice({
  name: "ExperienceSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setExperienceDetails: (state, action) => {
      state.experienceDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(addExperience.pending, (state) => {
      state.experienceDetailsLoading = true
    })
    builder.addCase(addExperience.fulfilled, (state, action) => {
      state.experienceDetails = action.payload
      state.experienceDetailsLoading = false
    })
    builder.addCase(addExperience.rejected, (state, action) => {
      state.error = true
      state.experienceDetailsLoading = false
    })

    builder.addCase(editExperience.pending, (state) => {
      state.experienceDetailsLoading = true
    })
    builder.addCase(editExperience.fulfilled, (state, action) => {
      state.experienceDetails = action.payload
      state.experienceDetailsLoading = false
    })
    builder.addCase(editExperience.rejected, (state, action) => {
      state.error = true
      state.experienceDetailsLoading = false
    })

    builder.addCase(getExperience.pending, (state) => {
      state.experienceDetailsLoading = true
    })
    builder.addCase(getExperience.fulfilled, (state, action) => {
      state.experienceDetails = action.payload
      state.experienceDetailsLoading = false
    })
    builder.addCase(getExperience.rejected, (state, action) => {
      state.error = true
      state.experienceDetailsLoading = false
    })

    builder.addCase(getExperiences.pending, (state) => {
      state.experiencesLoading = true
    })
    builder.addCase(getExperiences.fulfilled, (state, action) => {
      state.experiences = action.payload
      state.experiencesLoading = false
    })
    builder.addCase(getExperiences.rejected, (state, action) => {
      state.error = true
      state.experiencesLoading = false
    })

    builder.addCase(removeExperience.pending, (state) => {
      state.experienceDetailsLoading = true
    })
    builder.addCase(removeExperience.fulfilled, (state, action) => {
      state.experienceDetailsLoading = false
    })
    builder.addCase(removeExperience.rejected, (state, action) => {
      state.error = true
      state.experienceDetailsLoading = false
    })

  }
})

export const ExperienceActions = {
   ...ExperienceSlice.actions, //This includes all the action methods written above
}

export const ExperienceReducer = ExperienceSlice.reducer //This is stored in the main store
