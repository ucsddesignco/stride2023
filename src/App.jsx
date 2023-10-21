import { useState } from 'react'
import './App.css'
import FeaturedCompanies from './pages/FeaturedCompanies';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FeaturedCompanies />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
