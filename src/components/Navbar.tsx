import React, { useState } from 'react'
import {Laptop, LogOut,  Moon,  PenTool, Sun, UserCircle2Icon} from 'lucide-react'
import Signup from '../pages/Signup';
import {Link} from 'react-router-dom'
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [user,setUser]= useState(false);
    const [opensign,setOpensign]=useState(false)
    const {theme,setTheme}=useTheme();

    const handleUser=()=>{
        setUser(true)
        setOpensign(true)
    }
    const Signout=()=>{
        setUser(false)
        setOpensign(false)
    }
  return (
    <div className='relative flex justify-between mx-auto bg-blue-800 items-center px-5 md:px-15 align-center p-3 md:p-5'>
        
            <div className="text-2xl items-center flex"><PenTool className='rotate-200 text-sm'/> Hi,<span className='text-blue-300 flex flex-row'>Marv</span></div>
        <nav className='hidden md:flex text-2xl '>
            <ul>
                <li>Todo</li>
            </ul>
        </nav>
        <div className='flex items-center gap-3'>
            
        {user?(<UserCircle2Icon className='w-7 h-7' xlinkTitle='user Profile'/>):
        (<Link to='/signup' className='px-4 py-2 rounded-2xl bg-blue-900 hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-300 text-white' onClick={handleUser} >Sign Up</Link>)
        
}
        {user &&(<button aria-label='Sign-out'
         className='ml-2 flex items-center gap-1 rounded-2xl bg-blue-900 hover:bg-red-600 transition px-4 py-2 ' onClick={Signout}><LogOut className='w-5 h-5'/>
         <span className='text-sm'>Log out</span>
         </button>)}
            {/* Theme toggle dropdown */}
        <select
        aria-label='theme'
          value={theme}
          onChange={(e) => setTheme(e.target.value as "light" | "dark" | "system")}
          className="bg-blue-900 text-white dark:bg-gray-700 rounded-lg px-2 py-1"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
        </div>
        {opensign &&(<div className="absolute left-0 top-full w-full flex justify-center mt-60 z-40 bg-white bg-opacity-90 pt-8 pb-16 shadow-lg "><Signup /></div>)}
        </div>
    
    
  )
}

export default Navbar