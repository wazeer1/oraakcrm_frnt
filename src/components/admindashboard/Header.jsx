// Header.js
import Avatar from '@mui/material/Avatar';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { handleCustModal } from '../../store/handle/handleSlice';

const Header = () => {
  const [isModal, setModal] = useState(false);
  const Modal = () => {
    const dispatch = useDispatch();
    return (
      <div className={`absolute bg-white w-[250px] right-0 top-full shadow-md rounded transition-all transform overflow-hidden ${!isModal ? 'h-0' : 'p-5'}`}>
        <ul className='flex justify-between flex-wrap gap-2'>
          <li className='text-white bg-blue-500 rounded w-[48%] h-[40px] items-center flex justify-center font-bold' onClick={()=>dispatch(handleCustModal()) }>+ Customer</li>
          <li className='text-white bg-blue-500 rounded w-[48%] h-[40px] items-center flex justify-center font-bold'>+ Company</li>
          <li className='text-white bg-blue-500 rounded w-[48%] h-[40px] items-center flex justify-center font-bold'>+ Quete</li>
          <li className='text-white bg-blue-500 rounded w-[48%] h-[40px] items-center flex justify-center font-bold'>+ Invoice</li>
          <li className='text-white bg-blue-500 rounded w-[48%] h-[40px] items-center flex justify-center font-bold'>+ customer</li>
          <li className='text-white bg-blue-500 rounded w-[48%] h-[40px] items-center flex justify-center font-bold'>+ customer</li>
        </ul>
      </div>
    )
  }
  return (
    <div className="bg-white shadow-md p-5 flex justify-between items-center">
      <h1 className="text-xl font-bold">Hello, Oraak</h1>
      <div className="flex items-center gap-4">
        {/* <span className="mr-4">🔔 Announcements</span> */}
        <span onClick={() => setModal(!isModal)} className="cursor-pointer text-white bg-blue-500 px-3 py-1 rounded relative"><Modal/>+ Create</span>
        <Avatar sx={{ bgcolor: 'red' }}>N</Avatar>
      </div>
    </div>
  );
};

export default Header;
