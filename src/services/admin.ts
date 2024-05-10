import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "../components/ui/use-toast";
import { adminAuth, getAdmin } from "../api/axios";


export const getAdminDetails = createAsyncThunk<any, any>('adminSlice/getAdminDetails', async (params, thunkApi) => {
    try {
        const {data} = await getAdmin(params?.adminId)
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error = err as any;
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const adminLogin = createAsyncThunk<any,any>('devroninsSlice/devroninsAdminLogin', async (params, thunkApi) => {
    try {
        const {data} = await adminAuth({email: params?.email, password: params?.password});
        localStorage.setItem('accessToken', data?.data.accessToken)
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error = err as any;
        toast({
            title: "Error ",
            description: error?.code==='auth/invalid-credential'?
            'Invalid credential':
            "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})
