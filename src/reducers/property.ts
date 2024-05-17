
import { PropertyModal } from '../utils/modals';
import {  addProperty, editProperty, getProperty, getProperties, removeProperty } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface PropertiesModal {
  count: number;
  rows: PropertyModal[]
}

interface PropertyInitialStateType {
  isLogin: boolean;
  properties: null | PropertiesModal;
  propertiesLoading: boolean;
  propertyDetails: null | PropertyModal;
  propertyDetailsLoading: boolean;
  error: boolean
} 


const initialState: PropertyInitialStateType = {
  isLogin: false,
  properties: null,
  propertiesLoading: false,
  propertyDetails: null,
  propertyDetailsLoading: false,
  error: false
}


const PropertySlice = createSlice({
  name: "PropertySlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setPropertyDetails: (state, action) => {
      state.propertyDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(addProperty.pending, (state) => {
      state.propertyDetailsLoading = true
    })
    builder.addCase(addProperty.fulfilled, (state, action) => {
      state.propertyDetails = action.payload
      state.propertyDetailsLoading = false
    })
    builder.addCase(addProperty.rejected, (state, action) => {
      state.error = true
      state.propertyDetailsLoading = false
    })

    builder.addCase(editProperty.pending, (state) => {
      state.propertyDetailsLoading = true
    })
    builder.addCase(editProperty.fulfilled, (state, action) => {
      state.propertyDetails = action.payload
      state.propertyDetailsLoading = false
    })
    builder.addCase(editProperty.rejected, (state, action) => {
      state.error = true
      state.propertyDetailsLoading = false
    })

    builder.addCase(getProperty.pending, (state) => {
      state.propertyDetailsLoading = true
    })
    builder.addCase(getProperty.fulfilled, (state, action) => {
      state.propertyDetails = action.payload
      state.propertyDetailsLoading = false
    })
    builder.addCase(getProperty.rejected, (state, action) => {
      state.error = true
      state.propertyDetailsLoading = false
    })

    builder.addCase(getProperties.pending, (state) => {
      state.propertiesLoading = true
    })
    builder.addCase(getProperties.fulfilled, (state, action) => {
      state.properties = action.payload
      state.propertiesLoading = false
    })
    builder.addCase(getProperties.rejected, (state, action) => {
      state.error = true
      state.propertiesLoading = false
    })

    builder.addCase(removeProperty.pending, (state) => {
      state.propertyDetailsLoading = true
    })
    builder.addCase(removeProperty.fulfilled, (state, action) => {
      state.propertyDetailsLoading = false
    })
    builder.addCase(removeProperty.rejected, (state, action) => {
      state.error = true
      state.propertyDetailsLoading = false
    })

  }
})

export const PropertyActions = {
   ...PropertySlice.actions, //This includes all the action methods written above
}

export const PropertyReducer = PropertySlice.reducer //This is stored in the main store
