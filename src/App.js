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
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/courses' element={<Courses />} />
          <Route path='/course_content' element={<CourseDemo />} />
          <Route path='/blog' element={<Blog />} />
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