import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TvShowsPage from './pages/TvShowsPage';
import FilmPage from './pages/FilmPage';
import MyListPage from './pages/MyListPage';
import NavBarComponent from './components/NavBarComponent';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarComponent />
        <Routes>
          <Route path="/" element= {<HomePage />} />
          <Route path="/tv-shows" element= {<TvShowsPage />} />
          <Route path="/film" element= {<FilmPage />} />
          <Route path="/my-list" element= {<MyListPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
