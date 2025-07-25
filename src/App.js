import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Blog from './components/pages/Blog';
import CourseDemo from './components/pages/CourseDemo';
import MyAccount from './components/pages/MyAccount'
import Dashboard from './components/pages/Dashboard';
import CourseDetail from './components/pages/CourseDetail';
import SearchResults from './components/pages/SearchResults';
import InstructorDashboard from './components/pages/InstructorDashboard';
import Wishlist from './components/pages/Wishlist';
import './App.css';

// Simple test component to verify React is working
function TestComponent() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎉 React is Working!</h1>
      <p>If you can see this, React is rendering correctly.</p>
      <p>The issue might be with specific components.</p>
    </div>
  );
}

const App = () => {
  // Temporarily show test component - remove this after testing
  const showTest = false; // Change to true to test
  
  if (showTest) {
    return <TestComponent />;
  }

  return (
    <div className='App'>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/courses' element={<Courses />} />
          <Route path='/course_content' element={<CourseDemo />} />
          <Route path='/course-detail' element={<CourseDetail />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/instructor/dashboard' element={<InstructorDashboard />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/myaccount' element={<MyAccount />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;