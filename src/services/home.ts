import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createHome, deleteHome, fetchHome, fetchHomes, updateHome } from "../api/axios";
import { RoutesName } from "../utils/constant";

export const addHome = createAsyncThunk<any, any>('HomeSlice/addHome', async (params, thunkApi) => {
    try {
        const {data} = await createHome({...params?.data})
        params?.navigate(RoutesName.Homes)

        toast({
            title: "Success ",
            description: 'Home added successfully',
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

export const editHome = createAsyncThunk<any, any>('HomeSlice/editHome', async (params, thunkApi) => {
    try {
        const {data} = await updateHome(params?.data?.id, params?.data)
        params?.navigate(RoutesName.Homes)

        toast({
            title: "Success ",
            description: 'Home edit successfully',
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

export const getHomes = createAsyncThunk('HomeSlice/getHomes', async (_, thunkApi) => {
    try {
        const {data} = await fetchHomes({})
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

export const getHome = createAsyncThunk<any, any>('HomeSlice/getHome', async (params, thunkApi) => {
    try {
        const {data} = await fetchHome(params?.id)
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

export const removeHome = createAsyncThunk<any, any>('HomeSlice/removeHome', async (params, thunkApi) => {
    try {
        await deleteHome(params?.id)
        toast({
            title: "Success",
            description: "Home remove successfully"
            })
        thunkApi.dispatch(getHomes())
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
