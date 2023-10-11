import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

import classes from './Dialogs.module.css';
import React from 'react';
const Dialogs = (props) => {
   let newMessageElement = React.createRef();

   let newMessage = () => {
      props.addMessage();
   };

   let onMessageChange = () => {
      let messageText = newMessageElement.current.value;
   
   };
   let dialogsElements = props.state.dialogsData.map((dialog) => {
      return <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />;
   });

   let messagesElements = props.state.messageData.map((message) => {
      return <Message message={message.message} />;
   });

   return (
      <div className={classes.dialogs}>
         <div className={classes.items}>{dialogsElements}</div>

         <div className={classes.messages}>
            {messagesElements}
            <div>
               <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} />
               <button onClick={newMessage}> send message</button>
            </div>
         </div>
      </div>
   );
};
export default Dialogs;
