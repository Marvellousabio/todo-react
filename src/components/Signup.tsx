import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, fetchUsers } from '../features/user/userSlice';

const Signup = () => {
    const dispatch= useDispatch();
    const {list,loading,error}=useSelector((state)=>state.users);
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');

    useEffect(()=>{
        dispatch(fetchUsers());
    }, [dispatch]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name|| !email) return;
        dispatch(createUser({name,email}));
        setName('');
        setEmail('');
    };
  return (
    <div className='bg-blue-800 items-center  mx-auto p-5 mt-10 float-right right-0 w-full'>
        <div className='flex  flex-col items-center text-white'>
            <h2 className='items-center text-2xl pb-2 font-semibold'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='flex flex-col text-white gap-2 items-center'>
                
                <input type='text' placeholder='Name'
                onChange={(e)=>setName(e.target.value)} className='text-white border-1 p-2' />
                <input type='email' placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}className='text-white border-1 p-2' />
                <button type='submit'className='rounded-2xl text-2xl bg-gray-300 text-blue-900 py-1 px-2 uppercase cursor-pointer  '>sign up</button>
            </form>
        </div>
    </div>
  )
}

export default Signup