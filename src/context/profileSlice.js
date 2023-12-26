import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi, postApi,patchApi, deleteApi } from '../api'

export const fetchProfiles = createAsyncThunk("fetchProfiles", async () => {
  // console.log('hi')
  const { data } = await fetchApi(`/api/profile`);
  // console.log(data)
  return data
});
export const updateProfile = createAsyncThunk("updateProfile", async (updateArgs) => {
  console.log(updateArgs.authorSub,updateArgs.data)
  const { data } = await patchApi(`/api/profile/${updateArgs.authorSub}`,updateArgs.data);
  // console.log(data)
  return data
});

export const createProfile = createAsyncThunk("createProfile", async (newProfile) => {
  // console.log(newProfile)
  const { data } = await postApi('/api/profile', newProfile);
  return data
});



const initialState = {
  profiles: [],
  isLoading: false,
  isError: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProfiles.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchProfiles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profiles = action.payload;
    })
    builder.addCase(fetchProfiles.rejected, (state, action) => {
      state.isError = true;
    })
    builder.addCase(createProfile.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(createProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profiles = [action.payload,...state.profiles];
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
      state.profiles = [action.payload,...state.profiles.filter((profile)=>profile.authorSub!==action.payload?.authorSub)];
    })
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isError = true;
    })
    
  }
})


export default profileSlice.reducer