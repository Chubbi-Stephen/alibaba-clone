import React from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/alibaba-logo.svg'

const MainNav = () => {
  return (
    <section className="border">
      <nav className="container mx-auto border-red-600 border w-5/6">
        <div className="flex items-center justify-between">
          <div className="logo border relative w-[100px] h-[50px]">
            <img src={Logo} alt="Logo" className="absolute w-full h-full" />
          </div>
          <div>
            <div className="border ">
              <input
                type="search"
                placeholder="what are you looking for..."
                className="w-[300px]"
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center'>
              <HiOutlineUser size={30}/>
              <div className='flex flex-col items-start justify-between text-xs space-y-2'>
                <Link to="/">Sign in</Link>
                <Link to="/">Join for free</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default MainNav
