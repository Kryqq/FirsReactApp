let state = {
   profilePage: {
      postsData: [
         { id: 1, post: "Hi, how now I'm using social network!", likesCount: 14 },
         { id: 2, post: "I'ts my first post", likesCount: 18 },
      ],
   },
   messagesPage: {
      messageData: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How are u' },
         { id: 3, message: "I'am fine, and you?" },
         { id: 4, message: "I'm too, thank you!" },
      ],
      dialogsData: [
         { id: 1, name: 'Dmitry' },
         { id: 2, name: 'Vasily' },
         { id: 3, name: 'Ivan' },
         { id: 4, name: 'Anna' },
         { id: 5, name: 'Oleg' },
         { id: 6, name: 'Ekaterina' },
      ],
   },
};

export default state;
