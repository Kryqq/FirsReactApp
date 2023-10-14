import classes from './MyPosts.module.css';
import Post from '../Post';
import React from 'react';

const MyPosts = (props) => {
   let postsElement = props.postsData.map((message) => <Post post={message.message} likesCount={message.likesCount} />);
   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch({ type: 'ADD-POST' });

      newPostElement.current.value = '';
   };
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
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
            <div className={classes.item}> {postsElement} </div>
         </div>
      </div>
   );
};

export default MyPosts;
