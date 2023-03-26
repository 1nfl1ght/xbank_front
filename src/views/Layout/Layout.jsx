import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <div className='line'></div>
        <Outlet />
        <div className='line'></div>
        <Footer />
      </div>
    </>
  )
}

export default Layout