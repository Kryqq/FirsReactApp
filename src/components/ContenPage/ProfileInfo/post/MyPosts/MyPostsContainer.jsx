import React from 'react';
import { addPostActionCreator } from '../../../../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
   let state = props.store.getState();
   let addPost = () => {
      //  props.addPost();
      props.store.dispatch(addPostActionCreator());
   };
   let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
   };
   return (
      <MyPosts
         updateNewPostText={onPostChange}
         addPost={addPost}
         postsData={state.profilePage.postsData}
         newPostText={state.profilePage.newPostText}
      ></MyPosts>
   );
};

export default MyPostsContainer;
