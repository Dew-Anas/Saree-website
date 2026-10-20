import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Favourites from './pages/Favourites';
import Cart from './pages/Cart';
import AnnouncementBar from './components/AnnouncementBar';
import Login from './pages/Login';
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";




function App() {
  return (
    <div className="flex min-h-screen flex-col">


    <AnnouncementBar/>
      <Navbar/>
      
      

      <main className="flex-1">
      <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/success' element={<Success />} />
          <Route path='/cancel' element={<Cancel />} />
          
      </Routes>
          
      </main>
        
      <Footer/>

      </div>
      
    
  
  )
}

export default App