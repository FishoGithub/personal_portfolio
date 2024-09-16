import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const AboutMe = () => {
  return (
    <div className='pb-20'>
      <div className='bg-slate-100 opacity-85 rounded-3xl mx-32 my-32 py-32 px-14 border-slate-300 border-2 border-solid border-opacity-50 '>
        <div className='grid h-full w-full grid-cols-2 grid-rows-3'>
            <div className='col-span-1 row-span-3 flex items-center text-center justify-center '>
                <img src='/src/assets/mihir_logo.png' className='items-center justify-center size-80 drop-shadow-xl'></img>
            </div>
            <div className='col-span-1 row-span-1 flex items-center justify-center '>
                <h1 className='text-center font-semibold text-5xl mb-auto py-3 px-3 bg-emerald-300 rounded-xl bg-opacity-30 ' >About Me ‎ ‎✌️</h1>
            </div>
            <div className='col-span-1 row-span-2 flex items-center justify-center ' >
                <p className='font-medium text-lg leading-normal justify-center px-20' >Hey, I'm <a className='font-semibold'>Mihir Majgaonkar</a>, a student who's an aspiring physician and developer based in Seattle, Washington.<br></br>
                <br></br>I'm passionate about medicine, and seek out clinical experience wherever possible. I love building interesting and fun projects which help improve my skills.<br></br>
                <br></br>My passion for medicine stems from my desire to solve problems. If a problem isn't solved, I won't stop trying until I can fix it. I'd love to take this approach into the clinic, hospital, or internships I'm a part of.<br></br>
                <br></br>In my free time, you can catch me playing tennis, painting, working out, and spending time with my friends.<br></br></p>

                {/* <Stack direction="row" spacing={1} className=''>
                    <a href='https://www.instagram.com/mihir.majgaonkar/' target='_blank'><Chip label="📸 ‎ ‎ ‎instagram" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                    <a href='https://www.linkedin.com/in/mihirmajgaonkar/' target='_blank'><Chip label="🚀 ‎ ‎ ‎linkedin" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                    <a href='https://github.com/FishoGithub' target='_blank'><Chip label="💻 ‎ ‎ ‎github" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                    <a href='https://open.spotify.com/user/fmlr0ha5nozurbcoirw64hlj1?si=aed4b5992d334ab3' target='_blank'><Chip label="🎵 ‎ ‎ ‎spotify" size='large' variant='outlined' className='text-xl' color='primary'/></a>

                </Stack> */}
            </div>
        </div>
      </div>

    </div>
  )
}

export default AboutMe
