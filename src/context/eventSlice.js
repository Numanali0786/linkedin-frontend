import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteApi, fetchApi, postApi } from '../api'

export const fetchAllEvents = createAsyncThunk("fetchAllEvents", async () => {
  const { data } = await fetchApi('/api/events');
  console.log(data)
  return data
});
export const createEvent = createAsyncThunk("createEvent", async (newPost) => {
  console.log('cerate')

  const { data } = await postApi('/api/events', newPost);
  console.log(data)
  return data
});

export const deleteEvent = createAsyncThunk('deleteEvent', async (id) => {
  console.log(id)
  const { data } = await deleteApi(`/api/events/${id}`)
  console.log(data)
  return data
})

const initialState = {
  events: [],
  isLoading: false,
  isError: false
}

export const eventSlice = createSlice({
  name: 'events',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllEvents.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchAllEvents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    })
    builder.addCase(fetchAllEvents.rejected, (state, action) => {
      state.isError = true;
    })

    builder.addCase(deleteEvent.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(deleteEvent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.events = state.events.filter((event) => event._id !== action.payload._id);
    })

    builder.addCase(deleteEvent.rejected, (state, action) => {
      state.isError = true;
    })

    builder.addCase(createEvent.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(createEvent.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(state.posts)
      state.events = [action.payload, ...state.events];
    })
    builder.addCase(createEvent.rejected, (state, action) => {
      state.isError = true;
    })
  }
})


export default eventSlice.reducer