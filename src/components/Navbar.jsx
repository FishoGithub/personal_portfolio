import React from 'react'


const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 '>
        <div className='drop-shadow-xl'>
            <nav className=" mb-10 py-5 mx-96 items-center bg-gray-200 opacity-95 my-10 rounded-full border-slate-300 border-2 border-solid border-opacity-50 ">
                <div className="position: relative flex  mx-20 text-center items-center ">
                    {/* <a href='.'><img src='/src/assets/mihir_logo.png' className='max-w-14 opacity-100'/></a> */}
                    <a href='.' className='w-fit position: relative font-semibold flex gap-x-5 backdrop-blur-md px-10'>Mihir M.</a>


                        <a href='https://www.linkedin.com/in/mihirmajgaonkar/' className='position: relative font-medium flex gap-x-5 px-10 text-gray-600 backdrop-blur-md' >LinkedIn</a>

                        <a href='https://github.com/FishoGithub/personal_portfolio' className='position: relative font-medium flex gap-x-5 px-10 text-gray-600 backdrop-blur-md' >GitHub</a>

                        <a href='https://www.instagram.com/mihir.majgaonkar/' className='position: relative font-medium flex gap-x-5 px-10 text-gray-600 backdrop-blur-md' >Instagram</a>

                        <a href='.' className='position: relative font-medium flex gap-x-5 px-10 text-gray-600 backdrop-blur-md' >Email</a>

                        <a href='.' className='position: relative font-medium flex gap-x-5 px-10 text-gray-600 backdrop-blur-md' >Projects</a>

                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
