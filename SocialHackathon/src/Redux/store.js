import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
  },
});