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
   return (
      <div className={classes.dialogs}>
         <div className={classes.items}>
            <DialogItem name="Dmitry" id="1"></DialogItem>
            <DialogItem name="Vasily" id="2"></DialogItem>
            <DialogItem name="Ivan" id="3"></DialogItem>
            <DialogItem name="Anna" id="4"></DialogItem>
            <DialogItem name="Oleg" id="5"></DialogItem>
            <DialogItem name="Ekaterina" id="6"></DialogItem>
         </div>
         <div className={classes.messages}>
            <Message message="Hi"> </Message>
            <Message message="How are u?"> </Message>
            <Message message="I'am fine"> </Message>
         </div>
      </div>
   );
};
export default Dialogs;
