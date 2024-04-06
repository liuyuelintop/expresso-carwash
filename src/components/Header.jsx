import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from "react-icons/md"; // Import MdClose for the close icon

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='mb-2'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-6'>
                <Link to='/'>
                    <h1 className="font-bold text-xl lg:text-3xl flex flex-wrap">
                        <span className="text-neutral-300">Expresso</span>
                        <span className="text-neutral-400">Consulting</span>
                    </h1>
                </Link>

                <div className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MdMenu className="text-4xl text-neutral-300 hover:text-cyan-300 cursor-pointer" />
                </div>

                {/* Links for large screens */}
                <ul className='hidden sm:flex uppercase text-sm lg:text-lg gap-6'>
                    <li className='text-neutral-300 hover:underline hover:text-cyan-300 '>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='text-neutral-300 hover:underline hover:text-cyan-300 '>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li className='text-neutral-300 hover:underline hover:text-cyan-300'>
                        <Link to='/contact'>Contact us</Link>
                    </li>
                </ul>

                {/* Mobile menu overlay */}
                <div className={`fixed top-0 left-0 h-1/8 bg-neutral-900 w-full z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out sm:hidden`}>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed top-0 right-0 text-white p-4 hover:text-cyan-300"
                    >
                        <MdClose className="text-2xl" />
                    </button>
                    <nav className="mt-10 mb-2 flex flex-col uppercase text-white">
                        <Link to="/" className=" py-2 px-4 hover:bg-cyan-700" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/services" className=" py-2 px-4 hover:bg-cyan-700" onClick={() => setIsMenuOpen(false)}>Services</Link>
                        <Link to="/contact" className=" py-2 px-4 hover:bg-cyan-700" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    </nav>
                </div>

                {/* Dropdown Menu for small screens, hidden since we are using sidebar */}
                {isMenuOpen && (
                    <ul className='hidden'>
                        {/* ... menu items ... */}
                    </ul>
                )}
            </div>
        </header>
    )
}
