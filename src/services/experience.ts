import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createExperience, deleteExperience, fetchExperience, fetchExperiences, updateExperience } from "../api/axios";
import { RoutesName } from "../utils/constant";

export const addExperience = createAsyncThunk<any, any>('ExperienceSlice/addExperience', async (params, thunkApi) => {
    try {
        const {data} = await createExperience({...params?.data})
        params?.navigate(RoutesName.Experiences)

        toast({
            title: "Success ",
            description: 'Experience added successfully',
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

export const editExperience = createAsyncThunk<any, any>('ExperienceSlice/editExperience', async (params, thunkApi) => {
    try {
        const {data} = await updateExperience(params?.data?.id, params?.data)
        params?.navigate(RoutesName.Experiences)

        toast({
            title: "Success ",
            description: 'Experience edit successfully',
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

export const getExperiences = createAsyncThunk('ExperienceSlice/getExperiences', async (_, thunkApi) => {
    try {
        const {data} = await fetchExperiences({})
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

export const getExperience = createAsyncThunk<any, any>('ExperienceSlice/getExperience', async (params, thunkApi) => {
    try {
        const {data} = await fetchExperience(params?.id)
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

export const removeExperience = createAsyncThunk<any, any>('ExperienceSlice/removeExperience', async (params, thunkApi) => {
    try {
        await deleteExperience(params?.id)
        toast({
            title: "Success",
            description: "Experience remove successfully"
            })
        thunkApi.dispatch(getExperiences())
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
