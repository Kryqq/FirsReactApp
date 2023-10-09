import classes from './MyPosts.module.css';
import Post from '../Post';
const MyPosts = () => {
   let postsData = [
      { id: 1, post: "Hi, how now I'm using social network!", likesCount: 14 },
      { id: 2, post: "I'ts my first post", likesCount: 18 },
   ];

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
               <Post likesCount={postsData[0].likesCount} message={postsData[0].post}></Post>
               <Post likesCount={postsData[1].likesCount} message={postsData[1].post}></Post>
            </div>
         </div>
      </div>
   );
};

export default MyPosts;
