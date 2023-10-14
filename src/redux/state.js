import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
   getState() {
      return this._state;
   },

   _state: {
      profilePage: {
         postsData: [
            { id: 1, message: "Hi, how now I'm using social network!", likesCount: 14 },
            { id: 2, message: "I'ts my first post!", likesCount: 18 },
         ],
         newPostText: '',
      },
      messagesPage: {
         messageData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are u' },
            { id: 3, message: "I'am fine, and you?" },
            { id: 4, message: "I'm too, thank you!" },
         ],

         dialogsData: [
            {
               id: 1,
               name: 'Dmitry',
               avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/1333513/pub_5ead8c711459ef62a0e73e99_5ead905f2027132c419e100c/scale_1200',
            },
            { id: 2, name: 'Vasily', avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/90ab667d6e2ae2fb33745818ece70500.png' },
            {
               id: 3,
               name: 'Ivan',
               avatar:
                  'https://www.anti-malware.ru/files/styles/amp_metadata_content_image_min_696px_wide/public/images/source/kuraystealer_news.png?itok=iGXB4DEC',
            },
            {
               id: 4,
               name: 'Anna',
               avatar: 'https://abrakadabra.fun/uploads/posts/2021-12/1640356226_12-abrakadabra-fun-p-ava-dlya-servera-diskorda-12.png',
            },
            {
               id: 5,
               name: 'Oleg',
               avatar:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoAneegT5NGzLQ2HWwmzi4Xv_03Cu4W-pQuhV7PRQT3hrNKj74fKdrKAnBM9lAnlZ1ms&usqp=CAU',
            },
            {
               id: 6,
               name: 'Ekaterina',
               avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIFQbeN4HOyoNdcWcCa-Bi_wXEG4XVtG3lA&usqp=CAU',
            },
         ],
         newMessageBody: '',
      },
      sidebar: {},
   },
   _callSubscriber() {},

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
   },
};

window.store = store;

export const addPostActionCreator = () => {
   return { type: ADD_POST };
};
export const updateNewPostTextctionCreator = (text) => {
   return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const sendMessageActionCreator = () => {
   return { type: SEND_MESSAGE };
};
export const updateNewMessageBodyCreator = (body) => {
   return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default store;
