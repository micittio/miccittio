import i18next from 'i18next';
import React from 'react'
import { useTranslation } from 'react-i18next'

function HomePage() {
  const [ t, i18n ] = useTranslation();
  return (
    <div className='text-center pt-10'>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Bienvenidos
        <p>{t('title')}</p>
      </h1>
      <div>
          <button onClick={()=>i18n.changeLanguage("es")}>ES</button>
          <button onClick={()=>i18n.changeLanguage("en")}>EN</button>
      </div>
    </div>
  )
}

export default HomePage