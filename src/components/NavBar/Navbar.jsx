import React from 'react'
import MenuElement from './Menu/Menu'
import { useTranslation } from 'react-i18next'
import Logo from './Menu/Logo'
import Language from './Menu/Language'

export default function Navbar() {
  const [t] = useTranslation('global')

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Logo />
            <div className="flex items-center md:order-2">
                <ul className="py-2" role="none">
                        <Language />
                </ul>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" 
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden
                 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                aria-controls="navbar-default" aria-expanded="false"
                >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <MenuElement path="/" text={t("navbar.menu.home")} /> 
                    <MenuElement path="/Login" text={t("navbar.menu.login")} /> 
                    <MenuElement path="/noticePrivacy" text={t("navbar.menu.noticePrivacy")} /> 
                    <MenuElement path="/termsConditions" text={t("navbar.menu.termsConditions")} />
                    <MenuElement path="/aboutUs" text={t("navbar.menu.aboutUs")} />
                    <MenuElement path="/signUp" text={t("navbar.menu.singup")} /> 
                </ul>
            </div>
        </div>
    </nav>
  )
}

