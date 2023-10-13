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
         newPostText: ['tesst'],
      },
      messagesPage: {
         messageData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are u' },
            { id: 3, message: "I'am fine, and you?" },
            { id: 4, message: "I'm too, thank you!" },
         ],
         newMessageText: ['ZXC'],
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
      },
   },
   _callSubscriber() {},

   addPost() {
      let newPost = {
         id: 7,
         message: this._state.profilePage.newPostText,
         likesCount: 123,
      };

      this._state.profilePage.postsData.push(newPost);

      this._callSubscriber(this._state);
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },

   addMessage() {
      let newMessage = {
         id: 12,
         message: this._state.messagesPage.newMessageText,
      };

      this.state.messagesPage.messageData.push(newMessage);
      this.rerenderEntireTree(this.state);
   },
   updateNewMessageText(newMsgText) {
      this._state.messageData.newMessageText = newMsgText;
      this._callSubscriber(this._state);
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
};

window.store = store;

export default store;
