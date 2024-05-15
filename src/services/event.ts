import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createEvent, deleteEvent, fetchEvent, fetchEvents, updateEvent } from "../api/axios";
import { RoutesName } from "../utils/constant";

export const addEvent = createAsyncThunk<any, any>('EventSlice/addEvent', async (params, thunkApi) => {
    try {
        const {data} = await createEvent({...params?.data})
        params?.navigate(RoutesName.Events)

        toast({
            title: "Success ",
            description: 'Event added successfully',
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

export const editEvent = createAsyncThunk<any, any>('EventSlice/editEvent', async (params, thunkApi) => {
    try {
        const {data} = await updateEvent(params?.data?.id, params?.data)
        params?.navigate(RoutesName.Events)

        toast({
            title: "Success ",
            description: 'Event edit successfully',
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

export const getEvents = createAsyncThunk('EventSlice/getEvents', async (_, thunkApi) => {
    try {
        const {data} = await fetchEvents({})
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

export const getEvent = createAsyncThunk<any, any>('EventSlice/getEvent', async (params, thunkApi) => {
    try {
        const {data} = await fetchEvent(params?.id)
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

export const removeEvent = createAsyncThunk<any, any>('EventSlice/removeEvent', async (params, thunkApi) => {
    try {
        console.log('params', params)
        await deleteEvent(params?.id)
        toast({
            title: "Success",
            description: "Event remove successfully"
            })
        thunkApi.dispatch(getEvents())
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
