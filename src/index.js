import './index.css';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { subscribe } from './redux/state';
import { addMessage } from './redux/state';
import { updateNewMessageText } from './redux/state';

let rerenderEntireTree = (state) => {
   root.render(
      <BrowserRouter>
         <React.StrictMode>
            <App
               state={state}
               addPost={addPost}
               updateNewPostText={updateNewPostText}
               addMessage={addMessage}
               updateNewMessageText={updateNewMessageText}
            />
         </React.StrictMode>
      </BrowserRouter>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
reportWebVitals();
