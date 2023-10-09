import MyPosts from './ProfileInfo/post/MyPosts/MyPosts';
import classes from './ContentPage.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ContentPage = (props) => {
   return (
      <div>
         <ProfileInfo></ProfileInfo>
         <MyPosts postsData={props.postsData}></MyPosts>
      </div>
   );
};

export default ContentPage;
