import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
   { id: 1, name: 'Dmitry' },
   { id: 2, name: 'Vasily' },
   { id: 3, name: 'Ivan' },
   { id: 4, name: 'Anna' },
   { id: 5, name: 'Oleg' },
   { id: 6, name: 'Ekaterina' },
];
let messageData = [
   { id: 1, message: 'Hi' },
   { id: 2, message: 'How are u' },
   { id: 3, message: "I'am fine, and you?" },
   { id: 4, message: "I'm too, thank you!" },
];

let postsData = [
   { id: 1, post: "Hi, how now I'm using social network!", likesCount: 14 },
   { id: 2, post: "I'ts my first post", likesCount: 18 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App postsData={postsData} dialogsData={dialogsData} messageData={messageData} />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
