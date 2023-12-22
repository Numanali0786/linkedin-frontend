import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  postModal: false,
  profileModal: false,
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {


    postModalOff: (state) => {
      state.postModal = false
    },
    postModalOn: (state) => {
      state.postModal = true
    },
    profileModalOff: (state) => {
      state.profileModal = false
    },
    profileModalOn: (state) => {
      state.profileModal = true
    },


  },
})


export const { postModalOff,
  postModalOn,
  profileModalOff,
  profileModalOn } = stateSlice.actions

export default stateSlice.reducer