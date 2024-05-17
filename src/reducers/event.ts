
import { EventModal } from '../utils/modals';
import {  addEvent, editEvent, getEvent, getEvents, removeEvent } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface EventsModal {
  count: number;
  rows: EventModal[]
}

interface EventInitialStateType {
  isLogin: boolean;
  events: null | EventsModal;
  eventsLoading: boolean;
  eventDetails: null | EventModal;
  eventDetailsLoading: boolean;
  error: boolean
} 


const initialState: EventInitialStateType = {
  isLogin: false,
  events: null,
  eventsLoading: false,
  eventDetails: null,
  eventDetailsLoading: false,
  error: false
}


const EventSlice = createSlice({
  name: "EventSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setEventDetails: (state, action) => {
      state.eventDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(addEvent.pending, (state) => {
      state.eventDetailsLoading = true
    })
    builder.addCase(addEvent.fulfilled, (state, action) => {
      state.eventDetails = action.payload
      state.eventDetailsLoading = false
    })
    builder.addCase(addEvent.rejected, (state, action) => {
      state.error = true
      state.eventDetailsLoading = false
    })

    builder.addCase(editEvent.pending, (state) => {
      state.eventDetailsLoading = true
    })
    builder.addCase(editEvent.fulfilled, (state, action) => {
      state.eventDetails = action.payload
      state.eventDetailsLoading = false
    })
    builder.addCase(editEvent.rejected, (state, action) => {
      state.error = true
      state.eventDetailsLoading = false
    })

    builder.addCase(getEvent.pending, (state) => {
      state.eventDetailsLoading = true
    })
    builder.addCase(getEvent.fulfilled, (state, action) => {
      state.eventDetails = action.payload
      state.eventDetailsLoading = false
    })
    builder.addCase(getEvent.rejected, (state, action) => {
      state.error = true
      state.eventDetailsLoading = false
    })

    builder.addCase(getEvents.pending, (state) => {
      state.eventsLoading = true
    })
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.events = action.payload
      state.eventsLoading = false
    })
    builder.addCase(getEvents.rejected, (state, action) => {
      state.error = true
      state.eventsLoading = false
    })

    builder.addCase(removeEvent.pending, (state) => {
      state.eventDetailsLoading = true
    })
    builder.addCase(removeEvent.fulfilled, (state, action) => {
      state.eventDetailsLoading = false
    })
    builder.addCase(removeEvent.rejected, (state, action) => {
      state.error = true
      state.eventDetailsLoading = false
    })

  }
})

export const EventActions = {
   ...EventSlice.actions, //This includes all the action methods written above
}

export const EventReducer = EventSlice.reducer //This is stored in the main store
