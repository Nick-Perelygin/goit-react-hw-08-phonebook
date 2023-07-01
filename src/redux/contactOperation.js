import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(){
        axios.defaults.headers.common.Authorization = ''
    }
}

export const fetchSignup = createAsyncThunk(
    'users/signup',
    async ({name, email, password}, {rejectWithValue}) => {
        try {
            const response = await axios.post('/users/signup', {name, email, password});
            token.set(response.data.token)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchLogin = createAsyncThunk(
    'users/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const response = await axios.post('/users/login', {email, password});
            token.set(response.data.token)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchLogout = createAsyncThunk(
    'users/logout',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.post('/users/logout');
            token.unset()
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchCurrent = createAsyncThunk(
    'users/current',
    async (_, thunkAPI) => {
        const persistToken = thunkAPI.getState().contacts.token;
        if(persistToken === null){
            return thunkAPI.rejectWithValue()
        }
        token.set(persistToken)
        try {
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)