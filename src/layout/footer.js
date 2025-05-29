import Image from 'next/image';
import Location from "../../public/images/location.png";
import Mail from "../../public/images/mail.png";
import Phone from "../../public/images/phone2.svg"

export default function Footer() {
  return (
    <div className='bg-[#035A33] w-full'>
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-6 justify-center px-4 py-10">
        {/* Left Section */}
        <div className='lg:w-[420px] w-full px-4 space-y-4'>
          <div className="flex gap-2 text-white items-center text-[23px] font-bold">
            <h1 className="bg-[#3D9970] p-2 rounded-full">BH</h1>
            <h1>BetaHouse</h1>
          </div>
          <p className='text-white text-sm'>
            Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!
          </p>
          <div>
            <div className='flex gap-2 items-start'>
              <Image src={Location} alt="location" width={20} height={20} />
              <span className="text-white text-sm">95 Tinubu Estate, Lekki, Lagos</span>
            </div>
            <div className='flex gap-2 items-start'>
<Image src={Phone} alt="location" width={20} height={20} />
 <span className="text-white text-sm">34567847747</span>
            </div>
            <div className='flex gap-2 items-start mt-2'>
              <Image src={Mail} alt='mail' width={20} height={20} />
              <span className='text-white text-sm'>support@rentbetahouse.com</span>
            </div>
          </div>
        </div>

        
        <div className='flex flex-wrap gap-10 px-4'>
          
          <div>
            <h2 className='text-white mb-2 text-lg font-semibold'>Quick Link</h2>
            <ul className='text-white space-y-2 text-sm'>
              <li>Home</li>
              <li>Properties</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          
          <div>
            <h2 className='text-white mb-2 text-lg font-semibold'>More</h2>
            <ul className='text-white space-y-2 text-sm'>
              <li>Agent</li>
              <li>Affordable House</li>
              <li>FAQs</li>
            </ul>
          </div>

          
          <div>
            <h2 className='text-white mb-2 text-lg font-semibold'>Popular Search</h2>
            <ul className='text-white space-y-2 text-sm'>
              <li>Apartment for sale</li>
              <li>Apartment for rent</li>
              <li>3 Bedroom Flat</li>
              <li>Bungalow</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className='border-gray-500 mx-4' />

    
      <div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-6 text-white text-sm'>
        <p className='text-center'>© 2023 Betahouse | Designed by Michael.fig</p>
        <p className='mt-2 md:mt-0'>Privacy Policy</p>
      </div>
    </div>
  );
}
