import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='bg-black md:p-1 p-3'>
        <nav className='flex justify-between items-center'>
            <div>
                <Link href={"/"} className=' text-white text-3xl md:text-lg'>SwiftSavourAdmin</Link>
            </div>
            <div className=''>
                <ul className='flex gap-x-3 md:text-xs'>
                    <li className=''>
                        <Link href={"/restaurant"} className=' text-white'>Restaurant</Link>
                    </li>
                    <li>
                        <Link href={"/dish"} className='text-white'>Dish</Link>
                    </li>
                    <li>
                        <Link href={"/category"} className='text-white'>Category</Link>
                    </li>
                </ul>
            </div>
            <div></div>
        </nav>
    </header>
  )
}

export default Navbar