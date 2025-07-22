import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MatchesPage from './pages/MatchesPage';
import TeamsPage from './pages/TeamsPage';
import TeamDetailPage from './pages/TeamDetailPage'; // You'll need to create this
import PointsTablePage from './pages/PointsTablePage'; // You'll need to create this
import NewsPage from './pages/NewsPage'; // You'll need to create this
import Navbar from './components/Common/Navbar'; // Create this
import Footer from './components/Common/Footer'; // Create this
import './App.css'; // Your global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mx-auto p-4"> {/* Example using Tailwind for layout */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/teams/:teamId" element={<TeamDetailPage />} />
            <Route path="/points-table" element={<PointsTablePage />} />
            <Route path="/news" element={<NewsPage />} />
            {/* Add more routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;