import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

// Import pages
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings';
import Unit from './pages/Unit';
import Header from './components/Header';
import UserDashboard from './pages/UserDashboard';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/listings" element={<Listings />} />
        <Route exact path="/unit" element={<Unit />} />
        <Route exact path="/user" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
