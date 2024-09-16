import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { annotate } from 'rough-notation'
import {motion} from 'framer-motion'
import Button from '@mui/material/Button'


// const n1 = document.querySelector('#name');
// const a1 = annotate(n1, { type: 'highlight', color: 'yellow', iterations: 1 });
// a1.show();


const Hero = () => {
  return (
    <div className='items-center text-center justify-center'>
      <div className='rounded-3xl mx-32 my-32 py-20 pb-40 px-14 pt-56' >
        <motion.h1 

        initial={{x: -50, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1, delay: 0.3, type: "spring", stiffness: 200}}
        
        className='text-center font-semibold text-7xl leading-snug py-3 pb-12'>Hey, I'm <a id='name'>Mihir.</a>‎ ‎ 👋</motion.h1>
        <motion.div 
          initial={{x: -10, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1, delay: 0.7, type: "spring"}} 
        >
          <h2 className='text-center font-normal text-2xl text-gray-500 leading-tight justify-center'>Student @<a href='https://rhs.lwsd.org/' target='blank_' className='cursor-pointer hover:text-gray-400'> Redmond High School,</a> passionate </h2>
          <h2 className='text-center font-normal text-2xl text-gray-500 leading-tight justify-center pb-5'>about medicine, programming, tennis, and learning new skills. </h2>
        </motion.div>

        <motion.div className='text-black' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1}}>
            <Stack direction="row" spacing={2} className='flex items-center justify-center py-10 text-black'>
                <a href='https://www.instagram.com/mihir.majgaonkar/' target='_blank'><Chip label="📸 ‎ ‎ ‎instagram" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                <a href='https://www.linkedin.com/in/mihirmajgaonkar/' target='_blank'><Chip label="🚀 ‎ ‎ ‎linkedin" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                <a href='https://github.com/FishoGithub' target='_blank'><Chip label="💻 ‎ ‎ ‎github" size='large' variant='outlined' className='text-xl' color='primary'/></a>
                <a href='https://open.spotify.com/user/fmlr0ha5nozurbcoirw64hlj1?si=aed4b5992d334ab3' target='_blank'><Chip label="🎵 ‎ ‎ ‎spotify" size='large' variant='outlined' className='text-xl' color='primary'/></a>

            </Stack>

          {/* <Button variant="outlined" size="large">
              About Me
          </Button> */}
        </motion.div>

        <div>

        </div>
      </div>
    </div>
  )
}


export default Hero
