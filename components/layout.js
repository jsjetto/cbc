import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='mx-auto bg-gray-300 bg-auto'>
        {children}
      </div>
      <Footer />
    </div>

  )
}

export default Layout