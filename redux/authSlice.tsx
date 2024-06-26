import { PASSWORD, REFRESH_TOKEN, TOKEN, USERNAME } from '@/constants/names';
import { AuthState } from '@/models/states/authState';
import iamsecure from '@/services/iamSecure';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { RootState } from './store';



const initialState: AuthState = {
    loading: false,
    error: null,
    user: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }: { email: string ; password: string }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append(USERNAME, email);
            formData.append(PASSWORD, password);

            const response = await iamsecure.post("/login", formData);

            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue((error as AxiosError).response?.data);
            } else {
                throw error;
            }
        }
    }
);



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            localStorage.clear(); // Use localStorage directly
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload;
                localStorage.setItem(TOKEN, action.payload.token); // Use localStorage directly
                localStorage.setItem(REFRESH_TOKEN, action.payload.refresh_token);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; // Set error as string
            });
    },
});

export const { setUser, logout, clearError } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
