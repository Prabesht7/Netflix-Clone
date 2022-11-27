import Image from "next/image"
import Netflix from "../public/assets/logo/netflix.png"
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from "next/link"
import NetflixProfile from "../public/assets/logo/netflix-profile.png"
import { useEffect, useState } from "react"

function Header() {
    const [isScrolled , setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    },[])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
        {/* Left Section of Header*/}
        <div className="flex items-center space-x-2 md:space-x-10">
            <Image src={Netflix} alt="" width={100} height={100} className='cursor-pointer object-contain' />
            <ul className="hidden space-x-4 md:flex ">
                <li className="headerLink">Home</li>
                <li className="headerLink">TV Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">My List</li>
            </ul>
        </div>
        {/* Right Section of Header */}
        <div className="flex items-center space-x-4 text-sm font-light">
            <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6 "/>
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6" />
            <Link href="/account">
                <Image src={NetflixProfile} alt="" className="cursor-pointer rounded w-9 h-9"/>
            </Link>
        </div>
    </header>
  )
}

export default Header