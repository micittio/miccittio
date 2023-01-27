import React from 'react'
import { useTranslation } from 'react-i18next';


export default function Language(props) {
   const [ t, i18n ] = useTranslation("global");
   let MInactivo = "py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <div>
         <button className={MInactivo} onClick={()=>i18n.changeLanguage("es")}>{t('navbar.language.spanish')}</button> 
         <span  className='text-gray-700'> | </span> 
         <button className={MInactivo} onClick={()=>i18n.changeLanguage("en")}>{t('navbar.language.english')}</button>
    </div>
  )
}
