"use client"

import React, { useState } from "react"
import { slc } from "@/locales/slc"

interface Props {
    className?: string
}

const HomeNavbar: React.FC<Props> = ({ className }) => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)
    let hideTimeout: NodeJS.Timeout | null = null

    const handleMouseEnter = (index: number) => {
        if (hideTimeout) {
            clearTimeout(hideTimeout)
        }
        setOpenDropdown(index)
    }

    const handleMouseLeave = () => {
        hideTimeout = setTimeout(() => {
            setOpenDropdown(null)
        }, 200)
    }

    return (
        <nav className={`${className} w-full h-16 flex px-6 justify-center items-center bg-white shadow-sm`}>
            <div className="w-full max-w-screen-lg h-full flex justify-between items-center">
                <ul className="h-full flex items-center gap-6">
                    <h1 className="text-xl cursor-default">{slc.body.title}</h1>
                </ul>
                <ul className="h-full flex items-center gap-6">
                    {slc.dropdown.home_navbar.map((item, index) => (
                        <li
                            key={index}
                            className="relative group"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="hover:underline cursor-pointer">
                                {item.label}
                            </span>
                            {item.options.length > 0 && openDropdown === index && (
                                <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 py-2 w-40">
                                    {item.options.map((option, optionIndex) => (
                                        <li
                                            key={optionIndex}
                                            className="px-4 py-2 hover:bg-gray-100 hover:underline cursor-pointer"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default HomeNavbar
