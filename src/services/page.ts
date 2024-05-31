import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createPage, deletePage, fetchPage, fetchPages, updatePage } from "../api/axios";
import { RoutesName } from "../utils/constant";

export const addPage = createAsyncThunk<any, any>('PageSlice/addPage', async (params, thunkApi) => {
    try {
        const {data} = await createPage({...params?.data})
        params?.navigate(RoutesName.Pages)

        toast({
            title: "Success ",
            description: 'Page added successfully',
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

export const editPage = createAsyncThunk<any, any>('PageSlice/editPage', async (params, thunkApi) => {
    try {
        const {data} = await updatePage(params?.data?.id, params?.data)
        params?.navigate(RoutesName.Pages)

        toast({
            title: "Success ",
            description: 'Page edit successfully',
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

export const getPages = createAsyncThunk('PageSlice/getPages', async (_, thunkApi) => {
    try {
        const {data} = await fetchPages({})
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

export const getPage = createAsyncThunk<any, any>('PageSlice/getPage', async (params, thunkApi) => {
    try {
        const {data} = await fetchPage(params?.id)
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

export const removePage = createAsyncThunk<any, any>('PageSlice/removePage', async (params, thunkApi) => {
    try {
        await deletePage(params?.id)
        toast({
            title: "Success",
            description: "Page remove successfully"
            })
        thunkApi.dispatch(getPages())
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
