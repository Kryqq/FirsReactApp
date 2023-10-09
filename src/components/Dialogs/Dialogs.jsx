import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div className={classes.dialogs}>
         <div className={classes.items}>
            <div className={`${classes.dialog} ${classes.active}`}>
               <NavLink to="dialogs/1">Dmitry</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to="dialogs/2">Vasily</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to="dialogs/3">Eugene</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to="dialogs/4">Anna</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to="dialogs/5">IT BOT</NavLink>
            </div>
         </div>
         <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>How are u?</div>
            <div className={classes.message}>I'am fine</div>
         </div>
      </div>
   );
};
export default Dialogs;
