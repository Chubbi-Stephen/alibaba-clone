import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <section className="border py-4">
      <nav className="container mx-auto">
        <ul className="flex items-center justify-center space-x-4">
          <li className="text-sm font-semibold isActive">
            <Link to="/">Products</Link>
          </li>
          <li className="text-xs">
            <Link to="/">Manufacturers</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default TopNav
