import { useSelector } from 'react-redux'
import RoutesPage from '../src/Routes'
import NavBar from '../src/components/NavBar/Navbar'
import { BrowserRouter } from 'react-router-dom'


function App() {
  
  return (
    <>
      <BrowserRouter>
          <NavBar />
          <RoutesPage />
      </BrowserRouter>
    </>
  )
}
 
export default App
