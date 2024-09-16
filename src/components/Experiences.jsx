import React from 'react'
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import { Timeline } from '@mui/lab'
import { TimelineItem } from '@mui/lab'
import { TimelineSeparator } from '@mui/lab'
import { TimelineConnector } from '@mui/lab'
import { TimelineContent } from '@mui/lab'
import { TimelineDot } from '@mui/lab'
import { TimelineOppositeContent } from '@mui/lab'

const Experiences = () => {
  return (
    <div className='pb-40'>
        <div>
            <h1 className='text-center font-semibold text-5xl leading-snug pb-28'>Experiences</h1>
        </div>

        <Timeline position='alternate'>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot  />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className='py-10 mr-80 bg-slate-100 opacity-85 rounded-3xl border-slate-300 border-2 border-solid border-opacity-50'>
                        <h1 className='font-semibold text-2xl  py-3 bg-cyan-300 rounded-xl bg-opacity-30 px-3 mr-60 ml-8'>Founder & CEO‎ ‎ ❤️</h1>
                        <p className='px-10 py-1 text-gray-500 pt-3 font-medium'>June 2024 - Present</p>
                        <p className='py-3 px-10 font-medium text-lg leading-normal'>The South Asian Heart Foundation is a nonprofit organization I started to help spread awareness and raise funds for Heart Disease in South Asian people.</p>

                        <Stack direction="row" spacing={1} className=' text-black py-5 px-10'>
                            <Chip label="leadership" size='small' variant='filled' className='text-xl drop-shadow-2xl' color=''/>
                            <Chip label="teamwork" size='small' variant='filled' className='text-xl drop-shadow-2xl' color=''/>
                            <Chip label="marketing" size='small' variant='filled' className='text-xl drop-shadow-2xl' color=''/>
                            
                        </Stack>
                    </div>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <div className='py-10 ml-80  bg-slate-100 opacity-85 rounded-3xl border-slate-300 border-2 border-solid border-opacity-50 text-left'>
                        <h1 className='font-semibold text-2xl  py-3 bg-emerald-400 rounded-xl bg-opacity-30 px-3 mr-60 ml-8'>Hospital Intern‎ ‎ 💊</h1>
                        <p className='px-10 py-1 text-gray-500 pt-3'>August 2024 - Present</p>
                        <p className='py-3 px-10'>Intern at COPE Health Solutions, working at Swedish Medical Center in Seattle. Assisted in both Lobby and Orthopedic Insititute departments.</p>

                        <Stack direction="row" spacing={1} className=' text-black py-5 px-10'>
                            <Chip label="time-management" size='small' variant='filled' className='text-xl drop-shadow-2xl' color=''/>
                            <Chip label="teamwork" size='small' variant='filled' className='text-xl drop-shadow-2xl' color=''/>
                            <Chip label="clinical skills" size='small' variant='filled' className='text-xl drop-shadow-2xl' color=''/>
                            
                        </Stack>
                    </div>
    
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot  />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className='py-10 mr-80 bg-slate-100 opacity-85 rounded-3xl border-slate-300 border-2 border-solid border-opacity-50 text-left'>
                        <h1 className='font-semibold text-2xl  py-3 bg-red-300 rounded-xl bg-opacity-30 px-3 mr-44 ml-8'>Youth Tennis Coach‎ ‎ 🎾</h1>
                        <p className='px-10 py-1 text-gray-500 pt-3'>June 2024 - Present</p>
                        <p className='py-3 px-10'>The South Asian Heart Foundation is a nonprofit organization I started to help spread awareness and raise funds for Heart Disease in South Asian people.</p>

                        <Stack direction="row" spacing={1} className=' text-black py-5 px-10'>
                            <Chip label="leadership" size='small' variant='filled' className='text-xl drop-shadow-2xl' color=''/>
                            <Chip label="teamwork" size='small' variant='filled' className='text-xl drop-shadow-2xl' color=''/>
                            <Chip label="marketing" size='small' variant='filled' className='text-xl drop-shadow-2xl' color=''/>
                            
                        </Stack>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  )
}

{/* <div className='py-10 mr-80 bg-slate-100 opacity-85 rounded-3xl border-slate-300 border-2 border-solid border-opacity-50 text-left'> */}


export default Experiences
