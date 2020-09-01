import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div>
      <PageTitle title='Coqueiro Bando Club' />
      <p className='mt-12 text-center'>
        Coqueiro Bando Club, um grupo de amigo. <br />
      Rock and roll na veia
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'> Deixa aqui sua opnião sobre este bar.</a>
        </Link>

        <div>
          <p className='mb-6 mt-12 text-center'>
            Seja sempre bem vindo a nossa casa, <br />
        Sua presença, <a className='font-bold bg-red-100' >faz toda diferença</a>
          </p>
        </div>

        <div className='mx-auto border-a py-3 " role="alert"'>
          {!data && <p>Carregando...</p>}
          {!error && data && data.showCoupon &&
            <p className='mt-12 text-center'>
              {data.message}
            </p>
          }
        </div>
      </div>
    </div>
  )
}

export default Index