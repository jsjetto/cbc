import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'
const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h1 className='container mx-auto text-center py-4'> Pagina em Costrução. Em Breve teremos novidades. </h1>
      <a><img className='mx-auto py-4' src='/coqueiro.png' alt='Coqueiro Bando Club' /></a>

    </div>
  )
}

export default Contato