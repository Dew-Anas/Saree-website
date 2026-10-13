import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




function App() {
  return (
    <div className="flex min-h-screen flex-col">

      <Navbar/>

      <main className="flex-1">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
      </Routes>
      </main>

      <Footer/>

      </div>
      
    
  
  )
}

export default App