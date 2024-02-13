import { useState } from 'react'
import HomeComponent from './components/API/HomeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomeComponent/>
    </>
  )
}

export default App
