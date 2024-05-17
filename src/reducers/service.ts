
import { ServiceModal } from '../utils/modals';
import {  addService, editService, getService, getServices, removeService } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface ServicesModal {
  count: number;
  rows: ServiceModal[]
}

interface ServiceInitialStateType {
  isLogin: boolean;
  services: null | ServicesModal;
  servicesLoading: boolean;
  serviceDetails: null | ServiceModal;
  serviceDetailsLoading: boolean;
  error: boolean
} 


const initialState: ServiceInitialStateType = {
  isLogin: false,
  services: null,
  servicesLoading: false,
  serviceDetails: null,
  serviceDetailsLoading: false,
  error: false
}


const ServicesSlice = createSlice({
  name: "ServiceSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setServiceDetails: (state, action) => {
      state.serviceDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(addService.pending, (state) => {
      state.serviceDetailsLoading = true
    })
    builder.addCase(addService.fulfilled, (state, action) => {
      state.serviceDetails = action.payload
      state.serviceDetailsLoading = false
    })
    builder.addCase(addService.rejected, (state, action) => {
      state.error = true
      state.serviceDetailsLoading = false
    })

    builder.addCase(editService.pending, (state) => {
      state.serviceDetailsLoading = true
    })
    builder.addCase(editService.fulfilled, (state, action) => {
      state.serviceDetails = action.payload
      state.serviceDetailsLoading = false
    })
    builder.addCase(editService.rejected, (state, action) => {
      state.error = true
      state.serviceDetailsLoading = false
    })

    builder.addCase(getService.pending, (state) => {
      state.serviceDetailsLoading = true
    })
    builder.addCase(getService.fulfilled, (state, action) => {
      state.serviceDetails = action.payload
      state.serviceDetailsLoading = false
    })
    builder.addCase(getService.rejected, (state, action) => {
      state.error = true
      state.serviceDetailsLoading = false
    })

    builder.addCase(getServices.pending, (state) => {
      state.servicesLoading = true
    })
    builder.addCase(getServices.fulfilled, (state, action) => {
      state.services = action.payload
      state.servicesLoading = false
    })
    builder.addCase(getServices.rejected, (state, action) => {
      state.error = true
      state.servicesLoading = false
    })

    builder.addCase(removeService.pending, (state) => {
      state.serviceDetailsLoading = true
    })
    builder.addCase(removeService.fulfilled, (state, action) => {
      state.services = action.payload
      state.serviceDetailsLoading = false
    })
    builder.addCase(removeService.rejected, (state, action) => {
      state.error = true
      state.serviceDetailsLoading = false
    })

  }
})

export const ServiceActions = {
   ...ServicesSlice.actions, //This includes all the action methods written above
}

export const ServiceReducer = ServicesSlice.reducer //This is stored in the main store
