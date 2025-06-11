import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false,
    sidebarCollapse: false,
    appSidebar: false,
}

const actionSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {
        setAction: (state, { payload }) => {
            return { ...state, ...payload };
        }
    }
});

export const { setAction } = actionSlice.actions;
export default actionSlice.reducer;