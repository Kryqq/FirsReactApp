import MyPosts from './ProfileInfo/post/MyPosts/MyPosts';
import classes from './ContentPage.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ContentPage = () => {
   return (
      <div>
         <ProfileInfo></ProfileInfo>
         <MyPosts></MyPosts>
      </div>
   );
};

export default ContentPage;
