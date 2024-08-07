import React, { useState } from 'react'
import { CgReorder } from "react-icons/cg";
import { VscPreview } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { FaIdeal } from "react-icons/fa6";
import { IoPlaySkipBackOutline } from "react-icons/io5";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle= () => setIsOpen(!isOpen);
  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300"
    >
        <h1 className="text-xl font-bold hidden md:block mt-4 text-center italic">CWY Shop
        </h1>
        <ul className="flex flex-col mt-5 text-xl">
        <li className="flex items-center py-3 px-2 space-x-4 hover:ronded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <FaHome />
                <span className="hidden md:inline">Dashboard</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:ronded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <CgReorder />
                <span className="hidden md:inline">Order History</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:ronded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <FaIdeal />
                <span className="hidden md:inline">Deals & Discounts</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:ronded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <VscPreview />
                <span className="hidden md:inline">Referals and Reviews</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:ronded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <BiSupport />
                <span className="hidden md:inline">Support</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:ronded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <FaQuestion />
                <span className="hidden md:inline">FAQ</span>
            </li>
        </ul>

        </div>
  )
}

export default SideBar