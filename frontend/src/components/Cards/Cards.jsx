import React from 'react'

function Cards() {
  return (
    <section class=" py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <div class="text-center">
          <h4 class="text-xl font-medium text-gray-900">Numbers tell the hard works we’ve done in last 6 years</h4>
        </div> */}

        <div class=" grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div class="px-4 py-6">
              <div class="ml-4">
                <svg class="flex-shrink-0 w-12 h-12 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">New User ?</p>
                <br />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Register Now
                </button>
              </div>

            </div>
          </div>

          <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div class="px-4 py-6">
              <div class="ml-4">
                <svg class="flex-shrink-0 w-12 h-12 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Register User ?</p>
                <br />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Click Here
                </button>
              </div>

            </div>
          </div>

          <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div class="px-4 py-6">
              <div class="ml-4">
                <svg class="flex-shrink-0 w-12 h-12 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Payment ?</p>
                <br />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Register Now
                </button>
              </div>

            </div>
          </div>

          <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div class="px-4 py-6">
              <div class="ml-4">
                <svg class="flex-shrink-0 w-12 h-12 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Have a e-challan Number?</p>
                <br />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Pay Now
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

  )
}

export default Cards