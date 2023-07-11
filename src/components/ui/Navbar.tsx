import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <header className='h-20 bg-primary text-white flex flex-row items-center justify-between px-16'> 
        <section className='flex flex-row gap-4 relative'>
            <Image 
                src="/logo.png"
                alt='Logo TMDB'
                height={50}
                width={150}
            />
            <div id='dropdown' className='relative inline-block hover:cursor-pointer [&>div]:hover:block'>
                <button type='button' className='capitalize'>
                    Movies
                </button>
                <div className="hidden absolute rounded-md py-2 bg-white min-w-[160px] shadow-md z-10 [&>a]:text-black [&>a]:px-3 [&>a]:py-2 [&>a]:no-underline [&>a]:block">
                    <a href="#" className='hover:bg-gray-100'>Upcoming</a>
                    <a href="#" className='hover:bg-gray-100'>Top rated</a>
                    <a href="#" className='hover:bg-gray-100'>Popular</a>
                </div>
            </div>
        </section>
    </header>
  )
}
