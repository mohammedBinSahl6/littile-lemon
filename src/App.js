
import './App.css';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import Login from './components/Login';
import Register from './components/Register';
import Ress from './components/Reservations';
import { useEffect, useState } from 'react';

function App() {
  
  const[ress , setRess] = useState([]);
const [formData , setFormData]= useState({
 id: Math.random(1000),
  name : '',
  date : null,
  time : null,
  numOfGuests : null,
  occ : ''
})

// useEffect(()=>{
//   const items =  JSON.parse(localStorage?.getItem('ress') || "{}")
 
//     setRess(items);
  
// },[])
  
  return (
    <>
    <Navbar/>
    

    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/booking' element={<BookingPage formData={formData} setFormData={setFormData} ress={ress} setRess={setRess} />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/reg' element={<Register/>} />
        <Route path='/ress' element={<Ress formData={formData} setFormData={setFormData} ress={ress} setRess={setRess}/>} />
    </Routes>
    
    
    
    
    
    
    </>
  );
}

export default App;
