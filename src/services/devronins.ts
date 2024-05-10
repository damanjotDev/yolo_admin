import { createAsyncThunk } from "@reduxjs/toolkit"
import { firebaseApi } from "../api/firebase";
import { firebaseCollectionName } from "../utils/constant";
import { toast } from "../components/ui/use-toast";


export const getDevroninsDetails = createAsyncThunk('devroninsSlice/getDevroninsDetails', async (_, thunkApi) => {
    try {
        const data = await firebaseApi.get(firebaseCollectionName.Devronins);
        return thunkApi.fulfillWithValue(data?.[0])
    } catch (err) {
        const error = err as any;
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const devroninsAdminLogin = createAsyncThunk<any,any>('devroninsSlice/devroninsAdminLogin', async (params, thunkApi) => {
    try {
        const data = await firebaseApi.loginWithEmailAndPassword({email:params?.email, password: params?.password});
        const newData ={
            name: '',
            email: data?.email,
            token: data?.accessToken,
            id: data?.uid,
            image: data?.photoUrl
        }
        return thunkApi.fulfillWithValue(newData)
    } catch (err) {
        const error = err as any;
        toast({
            title: "Error ",
            description: error?.code==='auth/invalid-credential'?
            'Invalid credential':
            "Oop's something went wrong!",
            className:'bg-red-200'
          })
        console.log(error?.code)
        return thunkApi.rejectWithValue(error.response?.status)
    }
})
