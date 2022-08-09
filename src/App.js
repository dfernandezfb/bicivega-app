import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
