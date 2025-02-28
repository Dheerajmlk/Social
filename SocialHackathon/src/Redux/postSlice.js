import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        addComment: (state, action) => {
            const post = state.find((p) => p.id === action.payload.postId);
            if (post) {
                post.comments = post.comments || [];
                post.comments.push(action.payload.comment);
            }
        },
    },
});
export const { addPost, addComment } = postSlice.actions;
export default postSlice.reducer;