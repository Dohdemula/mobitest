// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import TransactionsPage from './TransactionsPage';
import ResourcesPage from './ResourcesPage';
import UserProfile from './UserProfile';
import Settings from './Settings';
import Sidebar from './Sidebar';
import './App.css'; // Import the CSS file
import './Sidebar.css'; // Import the Sidebar CSS file

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/signup';

  return (
    <div className="app-container">
      {showNavbar && <Sidebar />}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ToastContainer /> {/* Render ToastContainer once */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout><Login /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/transactions" element={<Layout><TransactionsPage /></Layout>} />
        <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
        <Route path="/userprofile" element={<Layout><UserProfile /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
