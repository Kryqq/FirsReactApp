const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

 const dialogsReducer = (state, action) => {
   if (action.type === SEND_MESSAGE) {
      let body = state.messagesPage.newMessageBody;
      state.newMessageBody = '';
      state.messageData.push({ id: 7, message: body });
   } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      state.newMessageBody = action.body;
   }

   return state;
};


export default dialogsReducer