import {createSlice} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import {fetchSignup, fetchLogin, fetchLogout, fetchCurrent} from './contactOperation'

const handlePending = state => state;
  
const handleRejected = (state, action) => {
    state.error = action.payload;
};

const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: {
        user: {name: '', email: ''},
        token: null,
        isLogin: false,
        error: null,
        isRefreshing: false,
    },
    extraReducers: {
        [fetchSignup.pending]: handlePending,
        [fetchSignup.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
            state.error = null;
            
        },
        [fetchSignup.rejected]: handleRejected,
        [fetchLogin.pending]: handlePending,
        [fetchLogin.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
            state.error = null;
        },
        [fetchLogin.rejected]: handleRejected,
        [fetchLogout.pending]: handlePending,
        [fetchLogout.fulfilled](state) {
            state.user = {name: '', email: ''};
            state.token = null;
            state.isLogin = false;
            state.error = null;
        },
        [fetchLogout.rejected]: handleRejected,
        [fetchCurrent.pending]: handlePending,
        [fetchCurrent.fulfilled](state, action) {
            state.user = action.payload;
            state.isLogin = true;
            state.error = null;
        },
        [fetchCurrent.rejected]: handleRejected,
    },     
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
}
  
export const contactsReducer = persistReducer(persistConfig, phoneBookSlice.reducer)