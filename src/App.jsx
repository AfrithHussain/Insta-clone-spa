import { Routes ,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Requests from './pages/Requests';
import UserDetails from './pages/UserDetails';
import InnerPost from './pages/InnerPost';

function App(){
  return(
    <>
   
    <Navbar/>
    <Routes>
    <Route path='/' element={<Requests/>} />

      <Route path='/request' element={<Requests/>} />
      <Route path='/:username' element={<UserDetails/>} />
      <Route path='/post/:id' element={<InnerPost/>} />

      

      </Routes> 
      
      </>
  )
}
export default App;