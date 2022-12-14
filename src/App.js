import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import AdminPage from './pages/AdminPage';
import BikePage from './pages/BikePage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const [user,setUser] = useState(null)
  console.log(process.env.REACT_APP_BACKEND_URL);
  return ( 
    <Router>
      <Header user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage user={user} setUser={setUser}/>}/>
        <Route path='/admin' element={<AdminRoute user={user}><AdminPage/></AdminRoute>}/>
        <Route path='/home' element={<PrivateRoute user={user}><HomePage/></PrivateRoute>}/>
        <Route path='/bike/:id' element={<PrivateRoute user={user}><BikePage/></PrivateRoute>}/>
        <Route path='/*' element={<LandingPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
