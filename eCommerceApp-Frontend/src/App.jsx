import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Routes/Home/Home.jsx'
import Content from './Routes/Content/Content.jsx'
import Login from './Routes/Login/Login.jsx'
import Register from './Routes/Register/Register.jsx'


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>} />
        <Route path='/content' element={<Content/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Route>
    )
  );
  
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {

  return (
    <>
      <div className='navbar'>
        <div className='left-side'>
          <span className='nav-title'>EShop</span>
          <Link className='link' to="/"> Home </Link>
          <Link className='link' to="/content"> Content </Link>
        </div>
        <div className='right-side'>
          <Link className='link' to="/login"> Login </Link>
          <Link className='link' to="/register"> Register </Link>
        </div>
      </div>
      <div className='component-content'>
        <Outlet />
      </div>
    </>
  )
}



