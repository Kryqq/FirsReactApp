import classes from './MyPosts.module.css';
import Post from '../Post';

const MyPosts = (props) => {
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
            <div className={classes.item}>
               <Post likesCount={props.postsData[0].likesCount} message={props.postsData[0].post}></Post>
               <Post likesCount={props.postsData[1].likesCount} message={props.postsData[1].post}></Post>
            </div>
         </div>
      </div>
   );
};

export default MyPosts;
