import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi, postApi } from '../api'

export const fetchAllComments = createAsyncThunk("fetchAllComments", async () => {
  const { data } = await fetchApi('/api/comments');
  return data
});
export const addComment = createAsyncThunk("addComment", async (newComment) => {
  const { data } = await postApi('/api/comments', newComment);
  return data
});

const initialState = {
  comments: [],
  isLoading: false,
  isError: false
}

export const commentSlice = createSlice({
  name: 'comments',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllComments.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchAllComments.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload)
      state.comments = action.payload;
    })
    builder.addCase(fetchAllComments.rejected, (state, action) => {
      state.isError = true;
    })
    builder.addCase(addComment.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload)
      state.comments = [action.payload,...state.comments];
    })
    builder.addCase(addComment.rejected, (state, action) => {
      state.isError = true;
    })
  }
})


export default commentSlice.reducer