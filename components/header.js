import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className='bg-black p-4 shadow-md'>
        <div className='container mx-auto '>
          <Link href='/'>
            <a><img className='mx-auto' src='/cbc1.png' alt='Coqueiro Bando Club' /></a>
          </Link>
        </div>
      </div>
      <div className='bg-green-200 p-4 shadow-lg text-center'>
        <Link href='/sobre'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-2 hover:underline'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header