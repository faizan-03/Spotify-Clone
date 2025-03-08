import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Search from './pages/Search';
import Library from './pages/Library';
import Player from './components/Player';

const App = () => {
  return (
    <Router>
      <div className="app-container h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
        <Player />
      </div>
    </Router>
  );
};

export default App;
