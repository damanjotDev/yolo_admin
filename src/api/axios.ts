import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ErrorResponse } from '../utils/error-response-model';

interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers?: any
}



const apiConfig: ApiConfig = {
  baseURL: `http://localhost:3000` || "",
  timeout: Number(process.env.API_TIMEOUT) || 10000
};

const axiosInstance: AxiosInstance = axios.create(apiConfig);

axiosInstance.interceptors.request.use((req: any) => {
  try {

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      req.headers.Authorization = `${accessToken}`;
    }
    return req;
  } catch (error) {
    console.error("error", error);
  }
});

// Error handling interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const errorResponse: ErrorResponse = {};
      

    if (error.response) {
      // The request was made and the server responded with a status code
      errorResponse.status = error.response.status;
      errorResponse.message = error.message;
      errorResponse.data = error.response.data as any;
    } else if (error.request) {
      // The request was made but no response was received
      errorResponse.message = 'Request Error';
    } else {
      // Something happened in setting up the request
      errorResponse.message = error.message;
    }

    console.error(errorResponse);
    return Promise.reject(errorResponse);
  }
);

// API methods
const api = {
  // GET request
  get: <T>(url: string): Promise<AxiosResponse<T>> => axiosInstance.get<T>(url),

  // POST request
  post: <T>(url: string, data: any): Promise<AxiosResponse<T>> =>
    axiosInstance.post<T>(url, data),

  // PUT request
  put: <T>(url: string, data: any): Promise<AxiosResponse<T>> =>
    axiosInstance.put<T>(url, data),

  // DELETE request
  delete: <T>(url: string): Promise<AxiosResponse<T>> => axiosInstance.delete<T>(url),
};

export default api;


//----------------------------------------------------------------------admin
export const adminAuth = (data: any) => axiosInstance.post('/v1/admin/login', data);
export const getAdmin = (id: string) => axiosInstance.get(`/v1/user/${id}`)



//----------------------------------------------------------------------service
export const createService = (data: any) => axiosInstance.post('/v1/service/create', data);
export const updateService = (id: string,data: any) => axiosInstance.put(`/v1/service/update/${id}`, data);
export const fetchService = (id: string) => axiosInstance.get(`/v1/service/get/${id}`)
export const fetchServices = (data: any) => axiosInstance.get('/v1/service/getall', {data});
export const deleteService = (id: string) => axiosInstance.delete(`/v1/service/delete/${id}`)


//----------------------------------------------------------------------service
export const createProperty = (data: any) => axiosInstance.post('/v1/property/create', data);
export const updateProperty = (id: string,data: any) => axiosInstance.put(`/v1/property/update/${id}`, data);
export const fetchProperty = (id: string) => axiosInstance.get(`/v1/property/get/${id}`)
export const fetchProperties = (data: any) => axiosInstance.get('/v1/property/getall', {data});
export const deleteProperty = (id: string) => axiosInstance.delete(`/v1/property/delete/${id}`)


//----------------------------------------------------------------------user
export const createUser = (data: any) => axiosInstance.post('/v1/user/create', data);
export const updateUser = (id: string,data: any) => axiosInstance.put(`/v1/user/update/${id}`, data);
export const fetchUser = (id: string) => axiosInstance.get(`/v1/user/get/${id}`)
export const fetchUsers = (data: any) => axiosInstance.get('/v1/user/getall', {data});
export const deleteUser = (id: string) => axiosInstance.delete(`/v1/user/delete/${id}`)












//---------------------------------------------------------------------upload image
export const fileUpload = (data: any) => axiosInstance.post('/v1/fileUpload', data, {
  onUploadProgress: (progressEvent) => {
    if(progressEvent&&progressEvent.total){
       const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
       console.log('progress', progress)
    }
   }
});






// export const generatePassCode = (data) => axios.post(`${process.env.REACT_APP_API_BASE_URL}`, data)
// export const forgotPassword = (data) => axios.post(`${process.env.REACT_APP_API_BASE_URL}`, data)
//export const arboristResetPassword = (data) => API.post("arborist/resetpassword", data)

