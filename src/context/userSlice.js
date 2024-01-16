import { createSlice } from '@reduxjs/toolkit'



const initialState={
  user: null,
  profile:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser:(state)=>{
        let user = localStorage.getItem('user')
        state.user = JSON.parse(user)
    },
    getProfile:(state)=>{
        let profile = localStorage.getItem('profile')
        state.profile = JSON.parse(profile)
    },

    login: (state,action) => {
      state.user = action.payload
      localStorage.setItem('user',JSON.stringify(action.payload))
    },

    setProfile: (state,action) => {
      state.profile = action.payload
      localStorage.setItem('profile',JSON.stringify(action.payload))
    },

    logout: (state) => {
      state.user =null
      localStorage.removeItem('user')
      localStorage.removeItem('profile')
    }
  },
})


export const { login,logout,getUser,setProfile,getProfile } =userSlice.actions

export default userSlice.reducer