import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteApi, fetchApi, postApi } from '../api'

export const fetchAllPosts = createAsyncThunk("fetchAllPosts", async () => {
  // console.log('jjj')
  const { data } = await fetchApi('/api/posts');
  // console.log(data)
  return data
});
export const createPost = createAsyncThunk("createPost", async (newPost) => {
  // console.log('cerate')

  const { data } = await postApi('/api/posts', newPost);
  // console.log(data)
  return data
});
export const deletePost = createAsyncThunk("deletePost", async (id) => {
  console.log('del')

  const { data } = await deleteApi(`/api/posts/${id}`);
  console.log(data)
  return data
});

const initialState = {
  posts: [],
  isLoading: false,
  isError: false
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action.payload)
      state.posts = action.payload;
    })
    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      state.isError = true;
    })
    builder.addCase(createPost.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(state.posts)
      state.posts = [action.payload,...state.posts];
    })
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(state.posts)
      state.posts = [...state.posts.filter((p)=>p._id!= action.payload._id)];
    })
    builder.addCase(createPost.rejected, (state, action) => {
      state.isError = true;
    })
  }
})


export default postSlice.reducer