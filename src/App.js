import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import UserProvider from './context/UserContext';
import AdminPage from './pages/AdminPage';
import BikePage from './pages/BikePage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return ( 
    <Router>
      <UserProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/admin' element={<AdminRoute><AdminPage/></AdminRoute>}/>
          <Route path='/home' element={<PrivateRoute><HomePage/></PrivateRoute>}/>
          <Route path='/bike/:id' element={<PrivateRoute><BikePage/></PrivateRoute>}/>
          <Route path='/*' element={<LandingPage/>}/>
        </Routes>
      </UserProvider>
    </Router>
    
  );
}

export default App;
