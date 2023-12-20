import { createSlice } from '@reduxjs/toolkit'



const initialState={
  modal: false,
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {


    modalOff: (state) => {
      state.modal = false
    },
    modalOn: (state) => {
      state.modal = true
    },

 
  },
})


export const { modalOff,modalOn} =stateSlice.actions

export default stateSlice.reducer