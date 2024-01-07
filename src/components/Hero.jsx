import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section class="text-black">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div class="mx-auto max-w-3xl text-center relative block group p-[100px]">
            <img src='https://img.freepik.com/premium-vector/sheet-blank-white-notebook-grid-paper-new-background-extra-large-highly-detailed-abstract-design_665888-544.jpg' className='absolute inset-0 object-cover w-[100%] h-full z-0'/>
                <h1
                    class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl relative md:text-5xl w-full z-2"
                >
                    Unleashing the Next <br />Generation Of Card

                    <span class="sm:block md:text-5xl"> Solution. </span>
                </h1>
                <p className='bg-gray-400 from-green-300 bg-clip-text font-extrabold text-transparent sm:text-5xl relative md:text-2xl w-full z-2 mt-8'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>

                <button className='bg-[#582066] w-[fit-content] p-2 rounded-xl text-white relative flex mx-auto m-[5vh]'>Unlock your Card <IoMdArrowForward className='mt-1 m-1'/></button>
                <p className='text-gray-500 relative'>*No Credit Card Required</p>
            </div>

        </div>
    </section>
  )
}

export default Hero