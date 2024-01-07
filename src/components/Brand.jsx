import React from 'react'

const Brand = () => {
  return (
    <section class="bg-white ">
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-black md:text-4xl">You’ll be in good company</h2>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" class="flex justify-center items-center">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png' className='h-20'/>             
            </a>
            <a href="#" class="flex justify-center items-center">
                <img src='https://cdn.freebiesupply.com/logos/large/2x/miro-logo-svg-vector.svg' className='h-20' />                                            
            </a>

            <a href="#" class="flex justify-center items-center">
                <img src='https://framerusercontent.com/images/seoAiO7bLdPJSQPBWtN4XVVk7A.svg' className='h-20' />                                                                     
            </a>
            <a href="#" class="flex justify-center items-center">
                <img src='https://upload.wikimedia.org/wikipedia/commons/e/e8/Wise_Logo_512x124.svg' className='h-20' />                                                                      
            </a>
            <a href="#" class="flex justify-center items-center">
                <img src='https://logowik.com/content/uploads/images/dribbble.jpg' className='h-20' />                                                                  
            </a>
            <a href='#' className='flex justify-center items-center'>
                <img src='https://webmetools.com/wp-content/uploads/2020/04/kinsta-logo.png' className='h-20' />
            </a>
            <a href='#' className='flex justify-center items-center'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/2560px-Behance_logo.svg.png'
                className='h-20' />
            </a>
            <a className='flex justify-center items-center relative'>
                <img src='https://logovectorseek.com/wp-content/uploads/2019/11/angellist-logo-vector.png' className='h-20' />
            </a>
        </div>
        
    </div>
</section>
  )
}

export default Brand