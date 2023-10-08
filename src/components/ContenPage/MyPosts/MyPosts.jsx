import classes from './MyPosts.module.css';
import Post from './post/Post';
const MyPosts = () => {
   return (
      <div>
         <div> my post</div>
         <div> new post</div>
         <div className={classes.posts}>
            <div className={classes.item}></div>
            <Post  likeCount = '15' message = 'hi, how are u?'></Post>
            <Post  likeCount = '20' message = 'hi, its my first post'></Post>
          
         </div>
      </div>
   );
};

export default MyPosts;
