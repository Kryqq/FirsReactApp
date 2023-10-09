import classes from './MyPosts.module.css';
import Post from '../Post';
const MyPosts = () => {
   return (
      <div className={classes.myPostsBlock}>
         <div className={classes.postArea}>
            <span>Написать пост</span>
            <textarea> </textarea>
         </div>
         <div className={classes.postButtonDiv}>
            <button className={classes.postButton}> new post</button>
         </div>
         <div className={classes.posts}>
            <div className={classes.item}></div>
            <Post likeCount="15" message="hi, how are u?"></Post>
            <Post likeCount="20" message="hi, its my first post"></Post>
         </div>
      </div>
   );
};

export default MyPosts;
