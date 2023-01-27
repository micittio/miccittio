import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';


function HomePage() {
  const [ t ] = useTranslation("global");
  return (
    <div className='text-center pt-10'>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        <p>{t('global.hi')}</p>
        
      </h1>
      <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
        <p>{t('global.slogan')}</p>
      </h2>
    </div>
  )
}

export default HomePage