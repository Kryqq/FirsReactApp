import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
	debugger
   let dialogsElements = props.state.dialogsData.map((dialog) => {
      return <DialogItem name={dialog.name} id={dialog.id} />;
   });

   let messagesElements = props.state.messageData.map((message) => {
      return <Message message={message.message} />;
   });

   return (
      <div className={classes.dialogs}>
         <div className={classes.items}>{dialogsElements}</div>
         <div className={classes.messages}>{messagesElements}</div>
      </div>
   );
};
export default Dialogs;
