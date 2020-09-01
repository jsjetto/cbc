import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        {children}
      </div>
      <Footer />
    </div>

  )
}

export default Layout