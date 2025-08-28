import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full h-[250px] flex flex-col gap-4 items-center border-t-2 border-t-white/30 py-4 text-white text-center'>
     <div className='flex gap-4 text-xs'>
      <p>Home</p>
      <p>Favorites</p>
      <p>My Movies</p>
     </div>
     <div className='flex gap-2 text-xs'>
      <p className='opacity-45 hover:opacity-100'>Help Center & Contact Us</p>
      <p className='opacity-45 hover:opacity-100'>Legal Notices</p>
      <p className='opacity-45 hover:opacity-100'>Privacy Policy</p>
      <p className='opacity-45 hover:opacity-100'>Terms of Use</p>
      <p className='opacity-45 hover:opacity-100'>Activate Your Device</p>
     </div>
     <div className='flex gap-2 text-xs'>
      <a href="#" className='opacity-45 hover:opacity-100'>Open Source</a>
      <a href="#" className='opacity-45 hover:opacity-100'>Api Source</a>
      <a href="#" className='opacity-45 hover:opacity-100'>Github</a>
      <a href="#" className='opacity-45 hover:opacity-100'>LinkedIn</a>
     </div>
     <div className='flex gap-2 text-xs'>
      <p>© {currentYear} Movies Anywhere. All Rights Reserved.</p>
     </div>
     <div>
      <p className='text-xs opacity-45'>Made By:</p>
      <p className=' '>Rabgyen Moktan</p>
     </div>
    </div>
  )
}

export default Footer
