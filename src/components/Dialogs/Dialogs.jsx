import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageActionCreator } from '../../redux/state';
import { updateNewMessageBodyCreator } from '../../redux/state';
import classes from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {
   let newMessage = () => {
      props.store.dispatch(sendMessageActionCreator());
   };

   let onMessageChange = (e) => {
      let body = e.target.value;
      console.log('body');
      props.store.dispatch(updateNewMessageBodyCreator(body));
   };

   let state = props.store.getState().messagesPage;

   let dialogsElements = state.dialogsData.map((dialog) => {
      return <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />;
   });

   let messagesElements = state.messageData.map((message) => {
      return <Message message={message.message} />;
   });

   let newMessageBody = state.newMessageBody;

   return (
      <div className={classes.dialogs}>
         <div className={classes.items}>{dialogsElements}</div>

         <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
               <textarea onChange={onMessageChange} value={newMessageBody} placeholder="Enter your message" />
               <button onClick={newMessage}> send message</button>
            </div>
         </div>
      </div>
   );
};
export default Dialogs;
