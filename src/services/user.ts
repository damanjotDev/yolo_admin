import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { createUser, deleteUser, fetchUser, fetchUsers, updateUser } from "../api/axios";
import { RoutesName } from "../utils/constant";

export const addUser = createAsyncThunk<any, any>('UserSlice/addUser', async (params, thunkApi) => {
    try {
        const {data} = await createUser({...params?.data})
        params?.navigate(RoutesName.Users)

        toast({
            title: "Success ",
            description: 'User added successfully',
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

export const editUser = createAsyncThunk<any, any>('UserSlice/editUser', async (params, thunkApi) => {
    try {
        const {data} = await updateUser(params?.data?.id, params?.data)
        params?.navigate(RoutesName.Users)

        toast({
            title: "Success ",
            description: 'User edit successfully',
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

export const getUsers = createAsyncThunk('UserSlice/getUsers', async (_, thunkApi) => {
    try {
        const {data} = await fetchUsers({})
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

export const getUser = createAsyncThunk<any, any>('UserSlice/getUser', async (params, thunkApi) => {
    try {
        const {data} = await fetchUser(params?.id)
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

export const removeUser = createAsyncThunk<any, any>('UserSlice/removeUser', async (params, thunkApi) => {
    try {
        await deleteUser(params?.id)
        toast({
            title: "Success",
            description: "User remove successfully"
            })
        thunkApi.dispatch(getUsers())
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
