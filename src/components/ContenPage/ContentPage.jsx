import MyPostsContainer from './ProfileInfo/post/MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ContentPage = (props) => {
   return (
      <div>
         <ProfileInfo></ProfileInfo>
         <MyPostsContainer store={props.store}></MyPostsContainer>
      </div>
   );
};

export default ContentPage;
