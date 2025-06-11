import { configureStore } from "@reduxjs/toolkit";

// features
import auth from './features/auth';
import action from './features/action';
import blogs from './features/blogs';

const store = configureStore({
    reducer: {
        auth,
        action,
        blogs,
    }
});

export default store;