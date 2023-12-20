import { createSlice } from '@reduxjs/toolkit'



const initialState={
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser:(state)=>{
        let user = localStorage.getItem('user')
        state.user = JSON.parse(user)
    },

    login: (state,action) => {
      state.user = action.payload
      localStorage.setItem('user',JSON.stringify(action.payload))
    },

    logout: (state) => {
      state.user =null
      localStorage.removeItem('user')
    }
  },
})


export const { login,logout,getUser } =userSlice.actions

export default userSlice.reducer