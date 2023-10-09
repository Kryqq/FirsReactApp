import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
   let path = 'dialogs/' + props.id;
   let name = props.name;
   return (
      <div className={`${classes.dialog} ${classes.active}`}>
         <NavLink to={path}>{name}</NavLink>
      </div>
   );
};

const Message = (props) => {
   return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
   let dialogsData = [
      { id: 1, name: 'Dmitry' },
      { id: 2, name: 'Vasily' },
      { id: 3, name: 'Ivan' },
      { id: 4, name: 'Anna' },
      { id: 5, name: 'Oleg' },
      { id: 6, name: 'Ekaterina' },
   ];
   let messageData = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are u' },
      { id: 3, message: "I'am fine, and you?" },
      { id: 4, message: "I'm too, thank you!" },
   ];
   return (
      <div className={classes.dialogs}>
         <div className={classes.items}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}></DialogItem>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}></DialogItem>
         </div>
         <div className={classes.messages}>
            <Message message={messageData[0].message}> </Message>
            <Message message={messageData[1].message}> </Message>
         </div>
      </div>
   );
};
export default Dialogs;
