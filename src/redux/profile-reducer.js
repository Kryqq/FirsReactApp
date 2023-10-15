const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
   postsData: [
      { id: 1, message: "Hi, how now I'm using social network!", likesCount: 14 },
      { id: 2, message: "I'ts my first post!", likesCount: 18 },
   ],
   newPostText: '',
};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 7,
            message: state.newPostText,
            likesCount: 123,
         };
         state.postsData.push(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;
   }
};

export const addPostActionCreator = () => {
   return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
   return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
