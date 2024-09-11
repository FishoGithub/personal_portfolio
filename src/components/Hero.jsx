import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { annotate } from 'rough-notation'

const Hero = () => {
  return (
    <div className='items-center text-center justify-center'>
      <div className='rounded-3xl mx-32 my-32 py-40 px-14' >
        <h1 className='text-center font-semibold text-7xl leading-snug py-3 pb-12'>Hey, I'm Mihir.‎ ‎ 👋</h1>

        <h2 className='text-center font-normal text-2xl text-gray-500 leading-tight justify-center'>Student @<a href='https://rhs.lwsd.org/' target='blank_' className='cursor-pointer hover:text-gray-400'> Redmond High School,</a> passionate </h2>
        <h2 className='text-center font-normal text-2xl text-gray-500 leading-tight justify-center'>about medicine, programming, tennis, and learning new skills. </h2>

        <div className='text-black'>
            <Stack direction="row" spacing={1} className='flex items-center justify-center py-10 text-black'>
                <a href='https://www.instagram.com/mihir.majgaonkar/' target='_blank'><Chip label="📸 ‎ ‎ ‎instagram" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                <a href='https://www.linkedin.com/in/mihirmajgaonkar/' target='_blank'><Chip label="🚀 ‎ ‎ ‎linkedin" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                <a href='https://github.com/FishoGithub' target='_blank'><Chip label="💻 ‎ ‎ ‎github" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                <a href='https://open.spotify.com/user/fmlr0ha5nozurbcoirw64hlj1?si=aed4b5992d334ab3' target='_blank'><Chip label="🎵 ‎ ‎ ‎spotify" size='large' variant='outlined' className='text-xl' color='primary'/></a>

            </Stack>
        </div>
        

      </div>
    </div>
  )
}

export default Hero
