import MyPosts from './ProfileInfo/post/MyPosts/MyPosts';

import ProfileInfo from './ProfileInfo/ProfileInfo';

const ContentPage = (props) => {

   return (

      <div>
         <ProfileInfo></ProfileInfo>
         <MyPosts
	    	 
            postsData={props.state.postsData}
            addPost={props.addPost}
            newPostText={props.newPostText}
            dispatch={props.dispatch}
         ></MyPosts>
      </div>
   );
  
};

export default ContentPage;
