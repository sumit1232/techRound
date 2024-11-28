import React from 'react'
import Navbar from '../Navbar/Navbar'

function NewEchallan() {
    return (
        <>
        <Navbar />
        <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                <div class="max-w-5xl mx-auto mt-12 sm:mt-16">

                    <div class="mt-6 overflow-hidden bg-white rounded-xl">
                        <div class="px-6 py-12 sm:p-12">
                            {/* <h3 class="text-3xl font-semibold text-center text-gray-900">Send us a message</h3> */}
                            <h1>Service</h1>
                            <hr className='sm:col-span-2' />
                            <form action="#" method="POST" class="mt-10">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900" required> User Type </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="User Type" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Department </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Department" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Service </label>
                                        <div class="mt-2.5 relative">
                                            <input type="tel" name="" id="" placeholder="Service" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Bank </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Bank" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <hr className='sm:col-span-2' />

                                    {/* <div class="sm:col-span-2">
                                        <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Send
                                        </button>
                                    </div> */}
                                </div>
                                <br />

                                {/* Challan  */}
                                <h1>Challan</h1>
                                <br />
                                <hr className='sm:col-span-2' />
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Challan Ref Number </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Nature of remittance </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>
                                    <hr className='sm:col-span-2' />
                                </div>
                                {/* Party  */}
                                <h1>Party</h1>
                                <br />
                                <hr className='sm:col-span-2' />
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Name of party </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Address of party</label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your Address" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Mobile number</label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your Number" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Email Address</label>
                                        <div class="mt-2.5 relative">
                                            <input type="email" name="" id="" placeholder="Enter your Email" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>
                                    <hr className='sm:col-span-2' />
                                </div>

                                {/* Head  */}
                                <h1>Head</h1>
                                <br />
                                <hr className='sm:col-span-2' />
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Major</label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Sub Major</label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900">Recipt Amount</label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Recipt Amount" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                        <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Submit
                                    </button>
                                    <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Reset
                                    </button>
                                    </div>
                                    
                                    <hr className='sm:col-span-2' />
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default NewEchallan