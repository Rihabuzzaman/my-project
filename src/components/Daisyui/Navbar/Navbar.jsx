import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const routes = [
    { id: 1, path: "/", name: 'Home' },
    { id: 2, path: "/about", name: 'About' },
    { id: 3, path: "/services", name: 'Services' },
    { id: 4, path: "/contact", name: 'Contact' },
    { id: 5, path: "*", name: 'NotFound' }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='text-black bg-yellow-200'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {open ? 'open' : 'close'}
                <AiOutlineMenu className='text-2xl' />
            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-yellow-200 ${open ? 'block' : 'hidden'}`}>
                {routes.map(route => (
                    <li className="mr-10" key={route.id}>
                        <a href={route.path}>{route.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
