import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createTag, deleteTag, fetchTag, fetchTags, updateTag } from "../api/axios";
import { RoutesName } from "../utils/constant";

export const addTag = createAsyncThunk<any, any>('TagSlice/addTag', async (params, thunkApi) => {
    try {
        const {data} = await createTag({...params?.data})
        params?.navigate(RoutesName.Tags)

        toast({
            title: "Success ",
            description: 'Tag added successfully',
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

export const editTag = createAsyncThunk<any, any>('TagSlice/editTag', async (params, thunkApi) => {
    try {
        const {data} = await updateTag(params?.data?.id, params?.data)
        params?.navigate(RoutesName.Tags)

        toast({
            title: "Success ",
            description: 'Tag edit successfully',
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

export const getTags = createAsyncThunk('TagSlice/getTags', async (_, thunkApi) => {
    try {
        const {data} = await fetchTags({})
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

export const getTag = createAsyncThunk<any, any>('TagSlice/getTag', async (params, thunkApi) => {
    try {
        const {data} = await fetchTag(params?.id)
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

export const removeTag = createAsyncThunk<any, any>('TagSlice/removeTag', async (params, thunkApi) => {
    try {
        await deleteTag(params?.id)
        toast({
            title: "Success",
            description: "Tag remove successfully"
            })
        thunkApi.dispatch(getTags())
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
