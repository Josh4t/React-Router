import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:title" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

