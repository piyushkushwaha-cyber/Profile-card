"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from 'next/link'
import { FaMapMarkerAlt } from "react-icons/fa";


export default function Page() {
  return (
    <>
    <div className="h-screen h-[100dvh] overflow-hidden bg-gradient-to-r from-black via-gray-900 to-indigo-950 font-serif flex flex-col">

      <div className="flex-1 text-center pt-10">
      <motion.h1  
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className="text-3xl md:text-5xl font-bold text-white-200 mt-6 font-fancy text-amber-50 ">
        Piyush Kushwaha
      </motion.h1>
       <p className="md:text-4xl text-2xl flex items-center text-white justify-center gap-2 mt-10 font-stretch-110%">
       <FaMapMarkerAlt />
       <span>Delhi, India</span>
       </p>

      </div>
      <div className="flex-1 flex items-center justify-center">
      <div className="relative w-50 h-50 md:w-65 md:h-65 rounded-full overflow-hidden border-4 border-gray-600">
        <Image
          src="/piyush-photo.jpeg"   
          alt="Piyush"
          fill
          priority
          className="object-cover"
        />
      </div>
      </div>

      <div className="flex-1 items-center justify-center pt-8">
      <div className="flex justify-center gap-5 md:gap-8  text-gray-300 text-3xl">
        <Link href="https://www.linkedin.com/in/piyush1405" target="_blank" className="text-4xl md:text-5xl cursor-pointer">
          <FaLinkedin />
        </Link>
        <a href="https://www.instagram.com/" target="_blank" className="text-4xl md:text-5xl cursor-pointer">
          <FaInstagram />
        </a>
        <a href="https://x.com/" target="_blank" className="text-4xl md:text-5xl cursor-pointer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/" target="_blank" className="text-4xl md:text-5xl cursor-pointer">
          <FaFacebook />
        </a>
      </div>

      <motion.div  
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center text-gray-400  mt-8 text-lg">
        <p className="text-2xl md:text-3xl text-gray-300 md:mb-4 mb-5 font-fancy">
          I work at UnifyApps as a Frontend Developer.
        </p>
  
       <a href="tel:+919354994749" className="text-xl md:text-2xl mb-4 flex items-center justify-center gap-2 hover:text-white ">
  <span className="mt-2">📞</span>
  <span>9354994749</span>
</a>

<a
  href="mailto:piyush.kushwaha@unifyapps.com"
  className="md:text-2xl text-xl font-serif  text-center hover:text-white "
>
  ✉️ piyush.kushwaha@unifyapps.com
</a>

      </motion.div>

    </div>
    </div>
    </>
  );
}