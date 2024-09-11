import React from 'react'

const AboutMe = () => {
  return (
    <div className='pb-20'>
      <div className='bg-slate-100 opacity-85 rounded-3xl mx-32 my-32 py-32 px-14 border-slate-300 border-2 border-solid border-opacity-50 '>
        <div className='grid h-full w-full grid-cols-2 grid-rows-3'>
            <div className='col-span-1 row-span-3 flex items-center text-center justify-center '>
                <img src='/src/assets/mihir_logo.png' className='items-center justify-center size-80 drop-shadow-xl'></img>
            </div>
            <div className='col-span-1 row-span-1 flex items-center justify-center '>
                <h1 className='text-center font-semibold text-5xl mb-auto pt-10'>About Me ‎ ‎✌️</h1>
            </div>
            <div className='col-span-1 row-span-2 flex items-center justify-center mb-auto mt-auto' >
                <p className='font-medium text-lg leading-normal mb-10 justify-center px-20' >Hey, I'm Mihir Majgaonkar, a student who's an aspiring physician and developer based in Seattle, Washington.<br></br>
                <br></br>I'm passionate about medicine, and seek out clinical experience wherever possible. I love building interesting and fun projects which help improve my skills.<br></br>
                <br></br>My passion for medicine stems from my desire to solve problems. If a problem isn't solved, I don't stop trying until I can fix it. I'd love to take this approach into the clinic, hospital, or internships I'm a part of.<br></br>
                <br></br>In my free time, you can catch me playing tennis, programming, painting, working out, and spending time with my friends.</p>

            </div>
        </div>
      </div>

    </div>
  )
}

export default AboutMe
