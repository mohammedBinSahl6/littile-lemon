import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <>
    <Navbar/>
    

    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/booking' element={<BookingPage/>} />
    </Routes>
    
    
    
    
    
    
    </>
  );
}

export default App;
