import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'


const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Critica: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)

    } catch (err) {

    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className='pt-6' >
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-medium my-4 text-4xl' >Criticas e sugestões</h1>
      <p className='text-center mb-6'>
        O Coqueiro Bando Club (CBC), sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre aberto a ouvir sua opinião.
      </p>
      <div className='mx-auto px-40'>
        {!sucess &&
          <div className='w-1/5 mx-auto flex flex-wrap text-center'>
            <div>
              <label className='font-bold'>Seu nome:</label>
              <input
                className='p-4 block shadow bg-blue-200 my-1 rounded-lg'
                type='/text'
                placeholder='Nome'
                onChange={onChange}
                name='Nome'
                value={form.Nome}
              />
              <label className='font-bold'>E-mail:</label>
              <input
                className='p-4 block shadow bg-blue-200 my-1 rounded-lg'
                type='/text'
                placeholder='Email'
                onChange={onChange}
                name='Email'
                value={form.Email}
              />
              <label className='font-bold'>Whatsapp:</label>
              <input
                className='p-4 block shadow bg-blue-200 my-1 rounded-lg'
                type='/text'
                placeholder='Whatsapp'
                onChange={onChange}
                name='Whatsapp'
                value={form.Whatsapp}
              />
              <label className='font-bold'>Nota:</label>

              <div className='flex py-2 mx-auto'>
                {notas.map(nota => {
                  return (
                    <label className='block w-1/6'>
                      {nota}<br />
                      <input type='radio'
                        name='Nota'
                        value={nota}
                        onChange={onChange}
                      />
                    </label>
                  )
                })
                }
              </div>
            </div>

            <label className='font-bold text-jus'>
              <p>
                Sua crítica ou sugestão:<br />
          Máximo 150 Caracters.
        </p>
            </label>
            <input
              type='/text'
              maxLength="150"
              className='mb-6 p-4 block shadow bg-blue-200 my-1 rounded-lg'
              placeholder='Critica/Sugestão'
              onChange={onChange} name='Critica'
              value={form.Critica} />

            <button
              className='w-1/2 text-center mb-4 bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'
              onClick={save}>Salvar
          </button>


          </div>}
      </div>

      {sucess && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3' >Obrigado por sua crítica/sugestão. Sua opnião é muito importante.</p>
        {
          retorno.showCupon && <div className='mb-4 text-center border p-4'>
            Seu Cupom:<br />
            <span className='font-bold text-6x1'>
              {retorno.Cupom}
            </span>
          </div>
        }

        {
          retorno.showCupon && <div className='mb-4 text-center border p-4'>
            <span className='font-bold block mb-2'>
              {retorno.Promo}
            </span>
            <br />
            <span className='italic'>Tire um print ou foto desta tela e apresente no balcão do bar. Verifique se esta elegível </span>
          </div>
        }


      </div>}
    </div>

  )
}

export default Pesquisa