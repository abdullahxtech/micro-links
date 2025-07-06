"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaLink, FaMoon, FaSun } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
    const pathname = usePathname()
    const isActive = (path) => pathname === path
    const [menuopen, setmenuopen] = useState(false)

    return (
        <header>

            <nav className='p-5 md:px-10 bg-gradient-to-r bg-black border-b border-blue-500/30'>
                <div className='flex z-10 gap-10 w-full justify-between items-center '>
                    {/* logo */}
                    <Link href="/" className="flex items-center space-x-1 text-xl font-bold">
                        <FaLink className="text-sky-400" />
                        <span className="text-white">Micro</span>
                        <span className="text-sky-400">Links</span>
                    </Link>

                    {/* navigation to pages - home,about & more */}
                    <div className='hidden md:flex gap-5 text-xl text-white'>
                        <ul className='hidden md:flex gap-5 text-[18px] justify-center items-center'>
                            <li>
                                {/* <button className='' onClick={()=>settheme(theme === "light" ? "dark": "light")}>
                        <FaSun className='absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0'></FaSun>
                        <FaMoon className='absolute h-10 w-10 rotate-90 scale-0 dark:rotate-90 dark:scale-100'></FaMoon>
                        </button> */}
                            </li>
                            <li>
                                <Link href="/" className={`block py-2 px-3 text-white rounded-sm md:bg-transparent p-0 dark:bg-blue-600 md:dark:bg-transparent ${isActive("/") ? "text-blue-700 dark:text-blue-500 bg-blue-700" : ""}`} aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className={`block py-2 px-3 text-white rounded-sm md:bg-transparent p-0 dark:bg-blue-600 md:dark:bg-transparent ${isActive("/about") ? "text-blue-700 dark:text-blue-500 bg-blue-700" : ""}`} aria-current="page">About</Link>
                            </li>
                            <li className='bg-transparent border border-blue-500 text-[18px] text-blue-500 flex justify-center md:py-1 items-center px-1 rounded-lg font-bold'>
                                <button className='p-0 flex justify-center items-center'><Link href={"/shorten"}>Try Now</Link></button>
                            </li>
                        </ul>



                        <span className='text-white font-bold gap-6 flex justify-center text-[18px] items-center'>
                            <SignedOut>
                                <SignInButton />
                                <SignUpButton>
                                    <button className="bg-[#6c47ff] text-white rounded-lg text-sm sm:text-base h-10 sm:h-10 px-3 sm:px-5 cursor-pointer">
                                        Sign Up
                                    </button>
                                </SignUpButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </span>
                    </div>

                    {/* hamburger icon and navigation in it for small devices */}
                    <button onClick={() => { setmenuopen(!menuopen) }} className="text-white md:hidden flex items-center justify-center">
                        {menuopen ? <RxCross2 fontSize={30} /> : <GiHamburgerMenu fontSize={30} />}
                    </button>
                </div>


                {menuopen && <div className='md:hidden flex flex-col gap-3 mt-5 text-xl'>
                    <ul>
                        <li>
                            <Link href="/" className={`block py-2 px-3 rounded-sm md:bg-transparent p-0 md:dark:bg-transparent ${isActive("/") ? "text-blue-700 dark:text-blue-500" : "text-white"}`} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block py-2 px-3 rounded-sm md:bg-transparent p-0 md:dark:bg-transparent ${isActive("/about") ? "text-blue-700" : "text-white"}`} aria-current="page">About</Link>
                        </li>
                        <li className='bg-transparent border border-blue-500 m-3 text-blue-500 flex justify-center items-center px-0 py-1 rounded-lg font-bold'>
                            <button className='md:p-0 flex justify-center items-center'><Link href={"/shorten"}>Try Now</Link></button>
                        </li>
                    </ul>

                    <span className='text-white font-bold gap-6 flex justify-center items-center text-xl gap-3 m-5 mt-3'>
                        <SignedOut>
                            <SignInButton />
                            <SignUpButton>
                                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </span>
                </div>
                }

            </nav >
        </header>
    )
}

export default Navbar
