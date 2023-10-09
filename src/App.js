import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ContentPage from './components/ContenPage/ContentPage';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settingss/Settings';
import Music from './components/Music/Music';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
               <Routes>
                  <Route path="/profile" element={<ContentPage postsData={props.postsData} />} />
                  <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/music" element={<Music />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
