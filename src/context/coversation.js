import { createSlice } from '@reduxjs/toolkit';

const user_id = JSON.parse(window.localStorage.getItem('profile'))?._id

const initialState = {
    direct_chat: {
        conversations: [],
        current_conversation: null,
        current_messages: []
    },
    group_chat: {}
}


const ConversationSlice = createSlice({
    name: 'conversaation',
    initialState,
    reducers: {
        fetchDirectConversations(state, action) {
            // this_user => to which current user is talking to
            const list = action.payload.conversations.map((el) => {
                const this_user = el.participants.find((elm) => elm._id.toString() !== user_id)

                
                return {
                    id: el._id,
                    user_id: this_user?._id,
                    name: this_user?.name,
                    online: this_user?.status === "online",
                    selectedFile: this_user.selectedFile
                }
            })
            console.log(list)
            state.direct_chat.conversations = list
        },
        updateDirectConversation(state, action) {
            console.log("update",action.payload)
            
            const this_conversation = action.payload.conversation
            state.direct_chat.conversations = state.direct_chat.conversations.map((el) => {
                if (el.id !== this_conversation._id) {
                    return el
                }
                else {
                    const user = this_conversation.participants.find((elm)=>(elm._id.toString() !== user_id))
                    return {
                        id: this_conversation._id,
                        user_id: user?._id,
                        name: user?.name,
                        online: user?.status === "online"
                    }
                    
                }
            })
        },
        
        addDirectConversation(state, action) {
            console.log(initialState.direct_chat)
            const this_conversation = action.payload.conversation
            console.log("add",action.payload)
            const user = this_conversation?.participants?.find((elm)=>(elm._id.toString() !== user_id))
            state.direct_chat.conversations = state.direct_chat.conversations.filter(
                (el) => el?.id !== this_conversation._id
              );
            state.direct_chat.conversations.push({
                id: this_conversation._id,
                user_id: user?._id,
                name: user?.name,
                online: user?.status === "online"
            })


        },

        // setCurrentConversation
        setCurrentConversation(state, action) {
            state.direct_chat.current_conversation = action.payload;
          },
        // fetchCurrentMessages
        fetchCurrentMessages(state, action) {
            const messages = action.payload.messages;
            const formatted_messages = messages.map((el) => ({
              id: el._id,
              type: "msg",
              subtype: el?.type,
              message: el?.text,
              incoming: el?.to === user_id,
              outgoing: el?.from === user_id,
            }));
            state.direct_chat.current_messages = formatted_messages;
          },
        // addDirectMessage
        addDirectMessage(state, action) {
            console.log('hiiiii')
            state.direct_chat.current_messages.push(action.payload.message);
          }


    }
})


export const { fetchDirectConversations,
    updateDirectConversation,
    addDirectConversation,setCurrentConversation,
    fetchCurrentMessages,
    addDirectMessage } = ConversationSlice.actions


export default ConversationSlice.reducer

