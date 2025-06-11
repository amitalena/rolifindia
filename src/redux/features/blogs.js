import { createSlice } from "@reduxjs/toolkit";
import useAxios from '../../hooks/useAxios';

const axios = useAxios();

const initialState = {
    blogs: [],
};

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs: (state, { payload }) => {
            state.blogs = payload.blogs;
        }
    }
});

export const { setBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;

// functions
export const getAllBlogsRedux = (callback = () => { }) => {
    return async (dispatch) => {
        try {
            dispatch(setBlogs({ blogs: [] }));
            const response = await axios.get("/blogs/allBlogs.php");
            if (response.status === 200 || response.status === 201) {
                dispatch(setBlogs({ blogs: response.data?.blogs }));
            }
        } catch (error) {
            console.log('error: get all blogs error', error);
        }
    }
}
