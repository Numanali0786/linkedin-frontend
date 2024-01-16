import { configureStore } from '@reduxjs/toolkit';
import userSlice from './context/userSlice';
import postSlice from './context/postSlice';
import stateSlice from './context/stateSlice';
import commentSlice from './context/commentSlice';
import profileSlice from './context/profileSlice';
import  eventSlice  from './context/eventSlice';
import ConversationSlice from './context/coversation'

export const store = configureStore({
  reducer: {userSlice,postSlice,stateSlice,commentSlice,profileSlice,eventSlice,ConversationSlice},
})

