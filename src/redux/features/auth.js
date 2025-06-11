import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    isAuthenticate: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, { payload }) => {
            return { ...state, ...payload };
        }
    }
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
