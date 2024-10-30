import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
const [open, setOpen]= useState(false)
const routes = [
    { id:1 ,path: "/", name: 'Home' },
    {  id:2, path: "/about", name:'About' },
    { id:3, path: "/services", name:'Services'},
    { id:4, path: "/contact", name:'Contact' },
    { id:5, path: "*", name:'NotFound'  }
  ];
  

const Navbar = () => {
    return (
        <nav>
          <div className='md:hidden' onClick={()=>setOpen(!open)}>
            {
                open=== true ?'open' :'close'
            }
          <AiOutlineMenu className='text-2xl '></AiOutlineMenu>
          </div>
            <ul className="md:flex">
            {
            routes.map(route=><li className="mr-10" key={route.id}>
                <a href={route.path}>{route.name}</a>
            </li>)
           } 
            </ul>
        </nav>
    );
};

export default Navbar;