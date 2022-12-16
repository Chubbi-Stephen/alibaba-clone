import React from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import { TbMessageDots } from 'react-icons/tb'
import { GiLightBackpack } from 'react-icons/gi'
import { BsCart4 } from 'react-icons/bs'
import { MdOutlineSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/alibaba-logo.svg'

const navItems = [
  {
    id: 0,
    title: 'Messages',
    icon: <TbMessageDots size={19} />,
  },
  {
    id: 1,
    title: 'Orders',
    icon: <GiLightBackpack size={19} />,
  },
  {
    id: 2,
    title: 'Cart',
    icon: <BsCart4 size={19} />,
  },
]

const MainNav = () => {
  return (
    <section className="border-b-2 pb-6">
      <nav className="container mx-auto w-5/6">
        <div className="flex items-center justify-between">
          <div className="logo  relative w-[100px] h-[50px]">
            <img src={Logo} alt="Logo" className="absolute w-full h-full" />
          </div>
          <div>
            <div className=" flex">
              <input
                type="search"
                placeholder="what are you looking for..."
                className="w-[500px] border border-orange-500 px-8 outline-none rounded-l-full"
              />
              <div>
                <button className="w-[100px] flex items-center justify-center border-none outline-none px-3 py-3 bg-orange-500 rounded-r-full text-white text-xl">
                  <MdOutlineSearch />
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-8">
            <div className="flex items-center justify-center">
              <HiOutlineUser size={30} />
              <div className="flex flex-col items-start justify-between text-xs space-y-2">
                <Link to="/">Sign in</Link>
                <Link to="/">Join for free</Link>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-10">
              {navItems.map((item) => (
                <Link
                  to="/"
                  key={item.id}
                  className="flex flex-col items-center text-xs"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default MainNav
