import classes from './ProfileInfo.module.css';
const ProfileInfo = () => {
   return (
      <div>
         maincontent
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTjeJUaD3MswsasRaok9NP4VI9a6sWzTksQ&usqp=CAU"></img>
         </div>
         <div>
            <div>descr</div>
         </div>
         <div>
            <div>descr</div>
            <img className={classes.img} src="https://www.film.ru/sites/default/files/filefield_paths/aanganim.jpg"></img>
         </div>
      </div>
   );
};

export default ProfileInfo;
