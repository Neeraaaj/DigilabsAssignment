import React from 'react'

const Stats = () => {
  return (
    <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 md:grid-cols-4 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
                <div class="flex flex-col px-4 py-8 text-center">
                <dt className='order-last text-lg font-medium text-black m-2'>Happy Customers</dt>
                <dt class="order-last text-lg font-medium text-gray-500">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</dt>

                <dd class="text-4xl font-extrabold text-[#82588C] md:text-5xl">$2 Million</dd>
                </div>

                <div class="flex flex-col px-4 py-8 text-center">
                <dt className='order-last text-lg font-medium text-black'>Downloads</dt>
                <dt class="order-last text-lg font-medium text-gray-500">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</dt>

                <dd class="text-4xl font-extrabold text-[#82588C] md:text-5xl">1K</dd>
                </div>

                <div class="flex flex-col px-4 py-8 text-center">
                <dt className='order-last text-lg font-medium text-black'>Total Transactions</dt>
                <dt class="order-last text-lg font-medium text-gray-500">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</dt>

                <dd class="text-4xl font-extrabold text-[#82588C] md:text-5xl">76 Million</dd>
                </div>

                <div class="flex flex-col px-4 py-8 text-center">
                <dt className='order-last text-lg font-medium text-black'>Latest Version</dt>
                <dt class="order-last text-lg font-medium text-gray-500">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</dt>

                <dd class="text-4xl font-extrabold text-[#82588C] md:text-5xl">2.0</dd>
                </div>
            </dl>
            </div>
        </div>
    </section>
  )
}

export default Stats