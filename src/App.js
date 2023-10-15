import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ContentPage from './components/ContenPage/ContentPage';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settingss/Settings';
import Music from './components/Music/Music';

import { Routes, Route } from 'react-router-dom';

const App = (props) => {
	
   return (
      <div className="app-wrapper">
         <Header />
         <Navbar />
         <div className="app-wrapper-content">
            <Routes>
               <Route path="/profile" element={<ContentPage store = {props.store} />} />

               <Route path="/dialogs/*" element={<Dialogs store = {props.store} />} />
               <Route path="/news" element={<News />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/music" element={<Music />} />
            </Routes>
         </div>
      </div>
   );
};

export default App;
