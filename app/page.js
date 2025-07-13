"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaLink, FaMoon, FaSun } from "react-icons/fa";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Home() {

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 h-[50vh] p-10 px-15 justify-center items-center">
      <div className='text-white flex flex-col justify-center items-center gap-5 w-full'>
        <div className='text-3xl font-bold flex flex-col gap-3 justify-center items-center text-center'>
          <span>Welcome to MicroLinks</span>
          <span className="flex items-center space-x-1 font-bold">
            <FaLink className="text-sky-400" />
            <span className="text-white">Micro</span>
            <span className="text-sky-400">Links</span>
          </span>
        </div>
        <p className='text-xl text-center'>The Best URL shortener in the market. Create short, memorable links for your website.</p>

        <button className='p-0 flex justify-center items-center'><Link
          href="/shorten"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          Get Started
        </Link></button>

        <span className='text-white md:hidden  gap-10 flex justify-center text-2xl items-center'>
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-lg text-2xl sm:text-base h-10 sm:h-10 px-3 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </span>

      </div>
      <div className='relative w-full h-50 md:h-90 flex md:mt-0 mt-10'>
        <Image className='rounded-lg' alt="home background image" src="/vector.jpg" fill={true} />
      </div>
    </section>
  );
}
