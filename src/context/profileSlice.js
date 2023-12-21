import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi, postApi,patchApi, deleteApi } from '../api'

export const fetchProfile = createAsyncThunk("fetchProfile", async (authorSub) => {
  const { data } = await fetchApi(`/api/profile/${authorSub}`);
  return data
});
export const updateProfile = createAsyncThunk("updateProfile", async (updateArgs) => {
  console.log(updateArgs.authorSub,updateArgs.data)
  const { data } = await patchApi(`/api/profile/${updateArgs.authorSub}`,updateArgs.data);
  console.log(data)
  return data
});

export const createProfile = createAsyncThunk("createProfile", async (newProfile) => {
  console.log(newProfile)
  const { data } = await postApi('/api/profile', newProfile);
  return data
});

export const deleteProfile = createAsyncThunk("deleteProfile", async (authorSub) => {
  const { data } = await deleteApi(`/api/profile/${authorSub}`);
  return data
});

const initialState = {
  profile: [],
  isLoading: false,
  isError: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action.payload)
      state.profile = action.payload;
    })
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isError = true;
    })
    builder.addCase(createProfile.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(createProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = [action.payload];
    })
    builder.addCase(createProfile.rejected, (state, action) => {
      state.isError = true;
    })
    ////////
    builder.addCase(updateProfile.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = [action.payload];
    })
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isError = true;
    })
    ////////
    builder.addCase(deleteProfile.pending, (state, action) => {
      console.log('hii')
      state.isLoading = true;
    })
    builder.addCase(deleteProfile.fulfilled, (state, action) => {
      console.log(action.payload)
      state.isLoading = false;
      state.profile = [];
    })
    builder.addCase(deleteProfile.rejected, (state, action) => {
      console.log('hii')
      state.isError = true;
    })
  }
})


export default profileSlice.reducer