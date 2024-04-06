import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className='mb-2'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-6'>
                <Link to='/'>
                    <h1 className="font-bold text-xl lg:text-3xl flex flex-warp">
                        <span className="text-neutral-300">Expresso</span>
                        <span className="text-neutral-400">Consulting</span>
                    </h1>
                </Link>

                <ul className='uppercase text-sm lg:text-lg flex gap-6'>
                    <Link to='/'>
                        <li className='sm:inline text-neutral-300 hover:underline hover:text-cyan-300 '>Home</li>
                    </Link>
                    <Link to='services'>
                        <li className='hidden sm:inline text-neutral-300 hover:underline hover:text-cyan-300 '>Services</li>
                    </Link>
                    <Link to='/contact'>
                        <li className='hidden sm:inline text-neutral-300 hover:underline hover:text-cyan-300'>Contact us</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
