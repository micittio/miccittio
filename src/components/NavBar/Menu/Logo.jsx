import React from 'react'
import { Link } from 'react-router-dom'


export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
            <img src="src/assets/Logo.png" className="h-6 mr-3 sm:h-9" alt="Mi Cittio" />
    </Link>
  )
}
