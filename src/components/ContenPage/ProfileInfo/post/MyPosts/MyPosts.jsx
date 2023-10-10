import classes from './MyPosts.module.css';
import Post from '../Post';
import React from 'react';

const MyPosts = (props) => {
   let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value;

      props.addPost(text);

      newPostElement.current.value = '';
   };
   let onPostChange = () => {
      let text = newPostElement.current.value;

   };
   return (
      <div className={classes.myPostsBlock}>
         <div className={classes.postArea}>
            <span>Написать пост</span>
            <div>
               <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
         </div>
         <div className={classes.postButtonDiv}>
            <button onClick={addPost} className={classes.postButton}>
               new post
            </button>
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
