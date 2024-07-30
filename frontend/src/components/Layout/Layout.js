import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router'
import Footer from '../footer/footer'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
