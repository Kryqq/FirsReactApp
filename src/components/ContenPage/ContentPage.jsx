import MyPosts from './ProfileInfo/post/MyPosts/MyPosts';
import classes from './ContentPage.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ContentPage = (props) => {
   return (
      <div>
         <ProfileInfo></ProfileInfo>
         <MyPosts
            postsData={props.state.postsData}
            addPost={props.addPost}
            newPostText={props.newPostText}
            updateNewPostText={props.updateNewPostText}
         ></MyPosts>
      </div>
   );
};

export default ContentPage;
