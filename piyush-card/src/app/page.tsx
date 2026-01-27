
"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from 'next/link'



export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-gradient-to-r from-black via-gray-900 to-indigo-950 font-serif">

      

      <motion.h1  
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className="text-3xl md:text-5xl font-bold text-white-200 mt-6 font-fancy text-amber-50 ">
        Piyush Kushwaha
      </motion.h1>

      <div className="relative w-50 h-50 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-600">
        <Image
          src="/piyush-photo.jpeg"   
          alt="Piyush"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex gap-5 md:gap-8 mt-6 text-gray-300 text-3xl">
        <Link href="https://www.linkedin.com/in/piyush1405" target="_blank" className="text-4xl md:text-5xl cursor-pointer">
          <FaLinkedin />
        </Link>
        <a href="#" className="text-4xl md:text-5xl cursor-pointer">
          <FaInstagram />
        </a>
        <a href="#" className="text-4xl md:text-5xl cursor-pointer">
          <FaTwitter />
        </a>
        <a href="#" className="text-4xl md:text-5xl cursor-pointer">
          <FaFacebook />
        </a>
      </div>

      <motion.div  
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center text-gray-400  mb-6 text-lg">
        <p className="text-2xl md:text-3xl text-gray-300 md:mb-4 mb-5 font-fancy">
          I work at UnifyApps as a Frontend Developer.
        </p>
        <p className="text-2xl mb-4 flex items-center justify-center gap-2">
       <span className="mt-2">📞</span>
       <span>9354914749</span>
       </p>

        <p className="md:text-2xl text-xl font-serif">
          ✉️ piyush.kushwaha@unifyapps.com
        </p>
      </motion.div>

    </div>
  );
}
