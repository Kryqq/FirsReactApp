import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import React from 'react';

const DialogsContainer = (props) => {
   let newMessage = () => {
      props.store.dispatch(sendMessageActionCreator());
   };

   let onMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body));
   };

   let state = props.store.getState().messagesPage;

   return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={newMessage} messagesPage={state}></Dialogs>;
};
export default DialogsContainer;
