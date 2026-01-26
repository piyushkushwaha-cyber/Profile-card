"use client"


import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-gradient-to-r from-black via-gray-900 to-indigo-900font-serif">

    <div className="stars"></div>
      <motion.h1  
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className="text-3xl md:text-5xl font-bold text-white-200 mt-6 font-serif">
        
        Piyush Kushwaha
      </motion.h1>


      <div className="relative w-40 h-40  md:w-62 md:h-62 rounded-full overflow-hidden border-4 border-gray-600">
        <Image
          src="/piyush-photo.jpeg"   
          alt="Piyush"
          fill
          priority
          className="object-cover"
        />
      </div>

     
      <motion.div  
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center text-gray-400 space-y-2 mb-6 text-lg ">
        <p className="text-3xl mb-4 font-semibold">I work at UnifyApps as a Frontend Developer.</p>
        <p className="text-2xl mb-4">📞 93548XXXXX</p>
        <p className="text-2xl font-serif">✉️ piyush.kushwaha@unifyapps.com</p>
      </motion.div>

    </div>
  );
}
