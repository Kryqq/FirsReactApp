import './index.css';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
   root.render(
      <BrowserRouter>
         <React.StrictMode>
            <App
               state={store.getState()}
               addPost={store.addPost}
               updateNewPostText={store.updateNewPostText}
               addMessage={store.addMessage}
               updateNewMessageText={store.updateNewMessageText}
            />
         </React.StrictMode>
      </BrowserRouter>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();
