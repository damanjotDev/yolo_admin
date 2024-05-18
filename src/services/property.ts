import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createProperty, deleteProperty, fetchProperty, fetchProperties, updateProperty } from "../api/axios";
import { RoutesName } from "../utils/constant";

export const addProperty = createAsyncThunk<any, any>('PropertySlice/addProperty', async (params, thunkApi) => {
    try {
        const {data} = await createProperty({...params?.data})
        params?.navigate(RoutesName.Properties)

        toast({
            title: "Success ",
            description: 'Property added successfully',
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

export const editProperty = createAsyncThunk<any, any>('PropertySlice/editProperty', async (params, thunkApi) => {
    try {
        const {data} = await updateProperty(params?.data?.id, params?.data)
        params?.navigate(RoutesName.Properties)

        toast({
            title: "Success ",
            description: 'Property edit successfully',
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

export const getProperties = createAsyncThunk('PropertySlice/getPropertys', async (_, thunkApi) => {
    try {
        const {data} = await fetchProperties({})
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

export const getProperty = createAsyncThunk<any, any>('PropertySlice/getProperty', async (params, thunkApi) => {
    try {
        const {data} = await fetchProperty(params?.id)
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

export const removeProperty = createAsyncThunk<any, any>('PropertySlice/removeProperty', async (params, thunkApi) => {
    try {
        await deleteProperty(params?.id)
        toast({
            title: "Success",
            description: "Property remove successfully"
            })
        thunkApi.dispatch(getProperties())
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
