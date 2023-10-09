import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css';

const DialogItem = (props) => {
   let path = 'dialogs/' + props.id;
   let name = props.name;
   return (
      <div className={`${classes.dialog} ${classes.active}`}>
         <NavLink to={path}>{name}</NavLink>
      </div>
   );
};

export default DialogItem;
