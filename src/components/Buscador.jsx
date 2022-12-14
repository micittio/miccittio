import React from 'react'

function Buscador() {
  return (
    <div className='container items-center'>
        <div className='flex flex-wrap items-center '> 
            <div className=' baseMenu items-center flex-auto p-10 bg-cover bg-no-repeat bg-center'>
                <h1 className='text-center tracking-wider text-5xl text-cyan-600 font-semibold p-10  '>
                    Primero Local, Siempre Global
                </h1>
            </div>
            
        </div>
        <div className='max-w-2xl mx-auto -m-10 relative '>
            <form className='bg-[#53a388] p-3 rounded-md shadow-lg text-white'>
                <select
                    className='p-2 bg-[#53a388] b text-white rounded-md m-1 border border-white'
                >
                    <option>Ciudades</option>
                </select> 
                <input 
                    className='p-2 bg-[#53a388] text-white rounded-md m-1  border border-white'
                >
                </input>
                <button
                    className='p-2 text-slate-800 rounded-md w-40 m-1  border bg-white'
                >Buscar
                </button>
            </form>
        </div>
    </div>
  )
}

export default Buscador