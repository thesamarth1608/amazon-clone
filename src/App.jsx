
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/navfooter/NavFooter'
import Electronics from './pages/Electrinics/Electronics'
import CartContainer from './pages/CartContainer/CartContainer'
import NotFound from './pages/NotFound/NotFound'


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<>
        <Navbar/>
        <Home/>
        <Footer/>
        </>
    },
    {
      path:'/electronics',
      element:<>
       <Navbar/>
        <Electronics/>
        <Footer/>
      </>
    },
    {
      path:'/cart',
      element:<>
        <Navbar/>
        <CartContainer/>
        <Footer/>
      </>
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ]);

  return (
    <>
    {/* <div className='app'>
      <Navbar/>
      <Home/>
      <Electronics/>
      <CartContainer/>
      <Footer/>
      
    </div> */}
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
    </>
  )
}

export default App
