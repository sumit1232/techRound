import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function ContactUs() {
  return (
    <>
      <Navbar />
      <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div class="absolute inset-0">
          <img class="object-cover w-full h-500 md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
        </div>
      </section>
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div class="">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Contact Us</h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">Address: abc street, gujarat, india</p>
              <p class="mt-4 text-base leading-relaxed text-gray-600">sumit@gmail.com</p>
              <p class="mt-4 text-base leading-relaxed text-gray-600">+91 1234567890</p>
            </div>

            
            {/* <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773346.661584042!2d61.03019197055083!3d19.690812551779832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1732786044031!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div> */}

          </div>
        </div>
      </section>
      <Footer />
    </>

  )
}

export default ContactUs