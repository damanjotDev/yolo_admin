import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createService, deleteService, fetchService, fetchServices, updateService } from "../api/axios";

export const addService = createAsyncThunk<any, any>('ServiceSlice/addService', async (params, thunkApi) => {
    try {
        const {data} = await createService({...params})
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

export const editService = createAsyncThunk<any, any>('ServiceSlice/editService', async (params, thunkApi) => {
    try {
        const {data} = await updateService(params?.id, params?.data)
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

export const getServices = createAsyncThunk('ServiceSlice/getServices', async (_, thunkApi) => {
    try {
        const {data} = await fetchServices({})
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

export const getService = createAsyncThunk<any, any>('ServiceSlice/getService', async (params, thunkApi) => {
    try {
        const {data} = await fetchService(params?.id)
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

export const removeService = createAsyncThunk<any, any>('ServiceSlice/removeService', async (params, thunkApi) => {
    try {
        console.log('params', params)
        await deleteService(params?.id)
        toast({
            title: "Success",
            description: "Service remove successfully"
            })
        thunkApi.dispatch(getServices())
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
