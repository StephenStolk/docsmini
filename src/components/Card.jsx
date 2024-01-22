import React from 'react'
import { FaRegFileAlt, FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {motion } from "framer-motion";
function Card({data, refer}) {
  return (
    <>
        <motion.div drag dragConstraints={refer} whileDrag={{scale: 1.1}} dragElastic={0.3} dragTransition={{bounceStiffness:600 , bounceDamping:50}} className="w-60 h-72 rounded-[20px] overflow-hidden bg-sky-600 text-white py-10">
        <FaRegFileAlt size={20} className="mt-2 ml-10" />
        <p className='text-2sm mt-6 px-10'>{data.description}</p>
        <div className="flex justify-around mt-8">
            <span className="font-semibold text-sm">{data.filesize}</span>
            {data.close ? <IoClose /> : <FaDownload />}
        </div>
       {data.tag.isOpen &&  (
        <div className={`flex w-full mt-4 items-center ${data.tag.tagcolour === "blue" ? "bg-blue-400" : "bg-green-600"} py-5 justify-center`}><h3 className="text-sm">{data.tag.tagtitle}</h3></div>
       ) }
        </motion.div>
    </>
  )
}

export default Card