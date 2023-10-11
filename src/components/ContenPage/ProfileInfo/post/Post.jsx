import classes from './Post.module.css';

const Post = (props) => {
   return (
      <div>
         <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU"></img>
            <span className={classes.message}>{props.post}</span>
         </div>
         <span className={classes.likes}> like {props.likesCount}</span>
      </div>
   );
};

export default Post;
