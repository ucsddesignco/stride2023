import { useState } from 'react'
import './App.css'
import FeaturedCompanies from './pages/FeaturedCompanies';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FeaturedCompanies />
      </div>
    </>
  )
}

export default App
