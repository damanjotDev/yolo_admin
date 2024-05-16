import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createRoom, deleteRoom, fetchRoom, fetchRooms, updateRoom } from "../api/axios";
import { RoutesName } from "../utils/constant";

export const addRoom = createAsyncThunk<any, any>('RoomSlice/addRoom', async (params, thunkApi) => {
    try {
        const {data} = await createRoom({...params?.data})
        params?.navigate(RoutesName.Rooms)

        toast({
            title: "Success ",
            description: 'Room added successfully',
          })
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error: any = err;
        console.log('13', error)
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const editRoom = createAsyncThunk<any, any>('RoomSlice/editRoom', async (params, thunkApi) => {
    try {
        const {data} = await updateRoom(params?.data?.id, params?.data)
        params?.navigate(RoutesName.Rooms)

        toast({
            title: "Success ",
            description: 'Room edit successfully',
          })

        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const getRooms = createAsyncThunk('RoomSlice/getRooms', async (_, thunkApi) => {
    try {
        const {data} = await fetchRooms({})
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const getRoom = createAsyncThunk<any, any>('RoomSlice/getRoom', async (params, thunkApi) => {
    try {
        const {data} = await fetchRoom(params?.id)
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const removeRoom = createAsyncThunk<any, any>('RoomSlice/removeRoom', async (params, thunkApi) => {
    try {
        console.log('params', params)
        await deleteRoom(params?.id)
        toast({
            title: "Success",
            description: "Room remove successfully"
            })
        thunkApi.dispatch(getRooms())
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})
