import { createSlice } from '@reduxjs/toolkit';







const initialState = {
  postModal: false,
  profileModal: false,
  eventModal: false,
  profileImageModal:false,
  prefrencesModal:false,
  resumeModal:false,
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
    profileImageModalOff: (state) => {
      state.profileImageModal = false
    },
    profileImageModalOn: (state) => {
      state.profileImageModal = true
    },
    prefrencesModalOn: (state) => {
      state.prefrencesModal = true
    },
    prefrencesModalOff: (state) => {
      state.prefrencesModal = false
    },
    eventModalOff: (state) => {
      console.log('jhg')
      state.eventModal = false
    },
    eventModalOn: (state) => {
      state.eventModal = true
    },
    resumeModalOff: (state) => {
      console.log('jhg')
      state.resumeModal = false
    },
    resumeModalOn: (state) => {
      state.resumeModal = true
    },



  },
})


export const { postModalOff,
  postModalOn,
  profileModalOff,
  profileModalOn,
  profileImageModalOff,
  profileImageModalOn,
eventModalOff,eventModalOn,prefrencesModalOn,prefrencesModalOff,
resumeModalOff,resumeModalOn } = stateSlice.actions

export default stateSlice.reducer