import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createCategory, deleteCategory, fetchCategory, fetchCategories, updateCategory } from "../api/axios";
import { RoutesName } from "../utils/constant";

export const addCategory = createAsyncThunk<any, any>('CategorySlice/addCategory', async (params, thunkApi) => {
    try {
        const {data} = await createCategory({...params?.data})
        params?.navigate(RoutesName.Categories)

        toast({
            title: "Success ",
            description: 'Category added successfully',
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

export const editCategory = createAsyncThunk<any, any>('CategorySlice/editCategory', async (params, thunkApi) => {
    try {
        const {data} = await updateCategory(params?.data?.id, params?.data)
        params?.navigate(RoutesName.Categories)

        toast({
            title: "Success ",
            description: 'Category edit successfully',
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

export const getCategories = createAsyncThunk('CategorySlice/getCategorys', async (_, thunkApi) => {
    try {
        const {data} = await fetchCategories({})
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

export const getCategory = createAsyncThunk<any, any>('CategorySlice/getCategory', async (params, thunkApi) => {
    try {
        const {data} = await fetchCategory(params?.id)
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

export const removeCategory = createAsyncThunk<any, any>('CategorySlice/removeCategory', async (params, thunkApi) => {
    try {
        await deleteCategory(params?.id)
        toast({
            title: "Success",
            description: "Category remove successfully"
            })
        thunkApi.dispatch(getCategories())
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
