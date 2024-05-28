import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/sign-up';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      navigate('/home');
    } else {
      navigate('/');
    }
  },[navigate]);

  return (
      <Routes>
        <Route path='/' element={<SignUp />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
  );
}

function AppWrapper() {
  return(
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
