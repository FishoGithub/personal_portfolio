import React from 'react'
import LocalTime from './LocalTime'
import Chip from '@mui/material/Chip';
import { IoLocationOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";




const Footer = () => {
  return (
    <div className='pb-10'>
      <div className='grid grid-cols-2 grid-rows-1 bg-slate-100 opacity-85 rounded-3xl border-slate-300 border-2 border-solid border-opacity-50 mx-32 py-16' >
        <div className='col-span-1 px-20 '>
            <h1 className='font-semibold text-3xl leading-snug py-1' >Got Questions?</h1>
            <h1 className='font-semibold text-3xl leading-snug py-1'>Let's Chat‎ ‎ 🤙 </h1>
            <p className='py-1 font-medium leading-snug text-gray-500'>Feel free to reach out for any projects, questions, or proposals.</p>
            <p className='py-2 font-medium leading-snug text-purple-500'>mihir.majgaonkar@gmail.com</p>

        </div>
        <div className='col-span-1 '>
            <div className='grid grid-cols-3 grid-rows-1'>
                {/* socials portion */}

                <div className='col-span-1'>
                    <ul className='font-semibold text-xl'><a className=''>Socials</a>
                        <li className='font-medium pt-3 text-sm text-gray-500' ><a href='https://www.instagram.com/mihir.majgaonkar/' target='_blank'>Instagram</a></li>
                        <li className='font-medium text-sm text-gray-500'><a href='https://www.linkedin.com/in/mihirmajgaonkar/' target='_blank'>LinkedIn</a></li>
                        <li className='font-medium text-sm text-gray-500'><a href='https://github.com/FishoGithub/personal_portfolio' target='_blank'>Github</a></li>
                        <li className='font-medium text-sm text-gray-500'><a href='https://open.spotify.com/user/fmlr0ha5nozurbcoirw64hlj1?si=ca67eebefd094561' target='_blank'>Spotify</a></li>
                    </ul>
                </div> 

                {/* page sections portion */}
                
                <div className='col-span-1'>
                    <ul className='font-semibold text-xl'><a className=''>Built With</a>
                        <li className='font-medium pt-3 text-sm text-gray-500' >React.js</li>
                        <li className='font-medium text-sm text-gray-500'>Tailwind CSS</li>
                        <li className='font-medium text-sm text-gray-500'>Node.js</li>
                        <li className='font-medium text-sm text-gray-500'>Vite</li>
                    </ul> 
                </div>

                <div className='col-span-1'>
                  <a href='.' target='_blank'><Chip label="🟢 ‎ ‎ available to work" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                  <LocalTime />
                  <p className='font-medium text-md text-gray-500'><a className='text-xl'>📍</a> ‎ ‎Seattle, WA</p>
                  {/* <p className='font-semibold text-lg pt-11'>Mihir M.</p> */}
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
