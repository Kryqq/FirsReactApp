import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css';

const DialogItem = (props) => {
   let path = 'dialogs/' + props.id;
   let name = props.name;
   let avatar = props.avatar;
   return (
      <div className={`${classes.dialog} ${classes.active}`}>
         <img src={avatar} className={classes.avatar} alt="#" />
         <NavLink className={classes.usersName} to={path}>
            {name}
         </NavLink>
      </div>
   );
};

export default DialogItem;
