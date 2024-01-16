import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi, postApi, patchApi, deleteApi } from '../api'

export const fetchProfiles = createAsyncThunk("fetchProfiles", async () => {
  // console.log('hi')
  const { data } = await fetchApi(`/api/profile`);
  // console.log(data)
  return data
});
export const updateProfile = createAsyncThunk("updateProfile", async (updateArgs) => {
  console.log(updateArgs.authorSub, updateArgs.data)
  const { data } = await patchApi(`/api/profile/${updateArgs.authorSub}`, updateArgs.data);
  // console.log(data)
  return data
});

export const createProfile = createAsyncThunk("createProfile", async (newProfile) => {
  // console.log(newProfile)
  const { data } = await postApi('/api/profile', newProfile);
  return data
});
export const  fetchUsers = createAsyncThunk("fetchUsers", async (id) => {
    console.log('jjjjjjjjjjjjj')
    const { data } = await fetchApi(`/api/profile/get-users/${id}`);
    return data
  });
export const fetchFriends = createAsyncThunk("fetchFriends", async (id) => {
  // console.log(newProfile)
  const { data } = await fetchApi(`/api/profile/get-friends/${id}`);
  return data
});
export const fetchFriendRequests = createAsyncThunk("fetchFriendRequests", async (id) => {
  // console.log(newProfile)
  const { data } = await fetchApi(`/api/profile/get-friend-requests/${id}`);
  return data
});
export const fetchSentRequests = createAsyncThunk("fetchSentRequests", async (id) => {
  // console.log(newProfile)
  const { data } = await fetchApi(`/api/profile/get-sent-requests/${id}`);
  return data
});
// export const selectConversation = createAsyncThunk("selectConversation", async (id) => {
//   // console.log(newProfile)
//   const { data } = await fetchApi(`/api/profile/get-friend-requests/${id}`);
//   return data
// });



const initialState = {
  profiles: null,
  users: [],
  friends: [],
  friendRequests: [],
  sentRequests: [],

  chat_type: null,
  room_id: null
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  
  reducers:{
    selectConversation :(state, action) => {
      state.chat_type = "individual";
      state.room_id= action.payload.room_id
    }
  },

  extraReducers: (builder) => {

    builder.addCase(fetchProfiles.fulfilled, (state, action) => {
      state.profiles = action.payload;
    })


    builder.addCase(createProfile.fulfilled, (state, action) => {
      state.profiles = [action.payload, ...state.profiles];
    })


    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.profiles = [action.payload, ...state.profiles.filter((profile) => profile.authorSub !== action.payload?.authorSub)];
    })


    ////////
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = [...action.payload];
    })
    builder.addCase(fetchFriends.fulfilled, (state, action) => {
      state.friends = [...action.payload];
    })
    builder.addCase(fetchFriendRequests.fulfilled, (state, action) => {
      state.friendRequests = [...action.payload];
    })
    builder.addCase(fetchSentRequests.fulfilled, (state, action) => {
      state.sentRequests = [...action.payload];
    })

    /////////




  }
})

export const {selectConversation} = profileSlice.actions


export default profileSlice.reducer