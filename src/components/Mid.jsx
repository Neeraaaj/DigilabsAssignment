import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoKey } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";

const Mid = () => {
  return (
    <div className='flex justify-center items-center mx-auto m-[120px] flex-col'>
    <div className='mx-auto'>
        <h1 className='text-black text-5xl mx-auto text-center font-bold'>
            Elevating Card Programs
            <span className='block'>
                with Cutting-Edge Technology
            </span> 
        </h1>
        <p className='text-gray-500 m-12'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <p className='flex mx-auto items-center justify-center text-[#82588C] font-bold'>Compare all Pro Features <FaArrowRightLong className='mt-2 m-2' /></p>
    </div>

    <section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    
    <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4 bg-gray-200 w-[fit-content] p-2 rounded">
          <AiOutlineGlobal className='text-[violet] text-2xl'/>
        </div>
        <h1 className='font-bold text-black text-1xl flex flex-end m-2'>Globally Accepted</h1>
        <p class="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4 bg-gray-200 w-[fit-content] p-2 rounded">
          <IoKey className='text-[violet] text-2xl' />
        </div>
        <h1 className='font-bold text-black text-1xl flex flex-end m-2'>Biometric Integrated</h1>
        <p class="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4 bg-gray-200 w-[fit-content] p-2 rounded">
          <FaLock className='text-[violet] text-2xl'/>
        </div>
        <h1 className='font-bold text-black text-1xl flex flex-end m-2'>Fully Secured</h1>
        <p class="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>
    </div>
  </div>
</section>
</div>

  )
}

export default Mid