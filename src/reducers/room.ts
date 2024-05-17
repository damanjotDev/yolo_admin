
import { RoomModal } from '../utils/modals';
import {  addRoom, editRoom, getRoom, getRooms, removeRoom } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface RoomsModal {
  count: number;
  rows: RoomModal[]
}

interface RoomInitialStateType {
  isLogin: boolean;
  rooms: null | RoomsModal;
  roomsLoading: boolean;
  roomDetails: null | RoomModal;
  roomDetailsLoading: boolean;
  error: boolean
} 


const initialState: RoomInitialStateType = {
  isLogin: false,
  rooms: null,
  roomsLoading: false,
  roomDetails: null,
  roomDetailsLoading: false,
  error: false
}


const RoomSlice = createSlice({
  name: "RoomSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setRoomDetails: (state, action) => {
      state.roomDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(addRoom.pending, (state) => {
      state.roomDetailsLoading = true
    })
    builder.addCase(addRoom.fulfilled, (state, action) => {
      state.roomDetails = action.payload
      state.roomDetailsLoading = false
    })
    builder.addCase(addRoom.rejected, (state, action) => {
      state.error = true
      state.roomDetailsLoading = false
    })

    builder.addCase(editRoom.pending, (state) => {
      state.roomDetailsLoading = true
    })
    builder.addCase(editRoom.fulfilled, (state, action) => {
      state.roomDetails = action.payload
      state.roomDetailsLoading = false
    })
    builder.addCase(editRoom.rejected, (state, action) => {
      state.error = true
      state.roomDetailsLoading = false
    })

    builder.addCase(getRoom.pending, (state) => {
      state.roomDetailsLoading = true
    })
    builder.addCase(getRoom.fulfilled, (state, action) => {
      state.roomDetails = action.payload
      state.roomDetailsLoading = false
    })
    builder.addCase(getRoom.rejected, (state, action) => {
      state.error = true
      state.roomDetailsLoading = false
    })

    builder.addCase(getRooms.pending, (state) => {
      state.roomsLoading = true
    })
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.rooms = action.payload
      state.roomsLoading = false
    })
    builder.addCase(getRooms.rejected, (state, action) => {
      state.error = true
      state.roomsLoading = false
    })

    builder.addCase(removeRoom.pending, (state) => {
      state.roomDetailsLoading = true
    })
    builder.addCase(removeRoom.fulfilled, (state, action) => {
      state.roomDetailsLoading = false
    })
    builder.addCase(removeRoom.rejected, (state, action) => {
      state.error = true
      state.roomDetailsLoading = false
    })

  }
})

export const RoomActions = {
   ...RoomSlice.actions, //This includes all the action methods written above
}

export const RoomReducer = RoomSlice.reducer //This is stored in the main store
