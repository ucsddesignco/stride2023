import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/About';
import FeaturedCompanies from './pages/FeaturedCompanies';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <About />
     <FeaturedCompanies />
     <Footer />
    </>
  )
}

export default App
