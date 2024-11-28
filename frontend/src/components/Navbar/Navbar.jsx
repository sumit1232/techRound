import React from 'react'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
<header class="pb-6 bg-white lg:pb-0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

    <div class="flex items-center justify-between hidden mb-6 lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> <img src="https://echallan.parivahan.gov.in/www/img/logo1.png" alt="logo" width="200px"/> </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> <img src="https://echallan.parivahan.gov.in/www/img/logo1.png" alt="logo" width="200px"/> </a>

                <a href="/aboutus" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> <img src="https://echallan.parivahan.gov.in/www/img/logo1.png" alt="logo" width="200px"/> </a>

            </div>
        {/* <nav class="flex items-center justify-between h-16 lg:h-20"> */}

            <div class="flex items-center justify-between hidden bg-blue-300 p-4 lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> E-challan </a>

                <a href="/aboutus" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About Us </a>

                <a href="/faqs" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> FAQS </a>
           
                <a href="/contctus" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contactus </a>

            </div>

        {/* </nav>   */}
    </div>
</header>

  )
}

export default Navbar