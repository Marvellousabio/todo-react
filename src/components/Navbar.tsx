import React, { useState } from 'react'
import {LogOut,  PenTool, UserCircle2Icon} from 'lucide-react'
import Signup from './Signup';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [user,setUser]= useState(false);
    const [opensign,setOpensign]=useState(false)

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
        <div className='flex'>
            
        {user?<UserCircle2Icon/>:<Link to='/sigup' className='p-3 rounded-2xl bg-blue-900 text-white' onClick={handleUser} >SignUp</Link>
        
}
        {user && <LogOut className='flex' onClick={Signout}/>}

        </div>
        {opensign &&<div className="absolute mt-60 z-20 "><Signup /></div>}
        </div>
    
    
  )
}

export default Navbar