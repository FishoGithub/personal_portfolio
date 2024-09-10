import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10'>
        <nav className="mb-10 py-5 mx-96 items-center backdrop-blur-xl bg-slate-200 opacity-85 my-10 rounded-full border-slate-300 border-2 border-solid border-opacity-50">
            <div className="position: relative flex ">
                {/* <a href='.'><img src='/src/assets/mihir_logo.png' className='max-w-14 opacity-100'/></a> */}
                <a href='.' className='w-fit position: relative font-semibold flex gap-x-5 px-10 '>Mihir Majgaonkar</a>


                    <a href='.' className='position: relative font-medium flex gap-x-5 px-10 text-gray-600' >LinkedIn</a>

                    <a href='.' className='position: relative font-medium flex gap-x-5 px-10 text-gray-600' >GitHub</a>

                    <a href='.' className='position: relative font-medium flex gap-x-5 px-10 text-gray-600' >Contact</a>

            </div>
        </nav>
    </div>
  )
}

export default Navbar
