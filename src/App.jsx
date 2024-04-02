import { Outlet } from 'react-router-dom'
import './App.css'
import Aside from './components/Aside'
import NavBar from './components/NavBar'

const App = () => {

  return (
    <>
    <Aside/>


    <div className='main-content'>
    <NavBar/>

    <section style={{
      scrollBehavior: 'smooth'
    }}>
      <Outlet/>
    </section>
    </div>
    
    </>
  )
}

export default App
