import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FIREBASE_URL = "https://crud-1-50809-default-rtdb.firebaseio.com/posts";

/* ✅ Fetch Posts from Firebase */
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(`${FIREBASE_URL}.json`);
  if (response.data) {
    return Object.keys(response.data).map((id) => ({
      id,
      ...response.data[id],
      comments: response.data[id].comments || [],
    }));
  }
  return [];
});

/* ✅ Add a New Post */
export const addPost = createAsyncThunk("posts/addPost", async (newPost) => {
  const response = await axios.post(`${FIREBASE_URL}.json`, newPost);
  return { id: response.data.name, ...newPost, comments: [] };
});

/* ✅ Delete a Post */
export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
  await axios.delete(`${FIREBASE_URL}/${postId}.json`);
  return postId;
});

/* ✅ Add a Comment to a Post */
export const addComment = createAsyncThunk("posts/addComment", async ({ postId, comment }) => {
  const response = await axios.get(`${FIREBASE_URL}/${postId}.json`);
  const post = response.data || {};
  const updatedComments = [...(post.comments || []), comment];

  await axios.patch(`${FIREBASE_URL}/${postId}.json`, { comments: updatedComments });

  return { postId, comment };
});

/* ✅ Post Slice */
const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const post = state.posts.find((p) => p.id === action.payload.postId);
        if (post) {
          post.comments.push(action.payload.comment);
        }
      });
  },
});

export default postSlice.reducer;
