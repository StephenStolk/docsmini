import React from 'react'
import Card from './Card'
import {motion } from "framer-motion";
import {useRef } from "react";
function Background() {

    const ref = useRef(null);
    const data = [
        {
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize: "0.4mb",
            close: true,
            tag: {
                isOpen: true, tagtitle: "Download Now",
                tagcolour: "green"
            },
        },
        {
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize: "0.4mb",
            close: false,
            tag: {
                isOpen: true, tagtitle: "Uploading",
                tagcolour: "green"
            },
        },
        {
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize: "0.4mb",
            close: true,
            tag: {
                isOpen: true, tagtitle: "Download Now",
                tagcolour: "blue"
            },
        },
    ]
  return (
    <>
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/2 flex flex-wrap gap-10 py-10 px-10 flex-shrink-0">
        {data.map((item,index) => (
            <Card key={index} data={item} refer={ref}/>
        ))}
        </div>
    </>
  )
}

export default Background