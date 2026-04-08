"use client";

import { motion } from "framer-motion";

export const CloudImages = () => {
    return (
        <>
            <motion.img
                src="/images/cloud1.png"
                className="cloud-left w-[400px] h-[250px] bg-fit absolute top-40 left-[-200px] z-10 pointer-events-none"
                alt="cloud left"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.img
                src="/images/cloud2.png"
                className="cloud-right w-[400px] h-[250px] bg-fit absolute top-40 right-[-200px] z-10 pointer-events-none"
                alt="cloud right"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
        </>
    );
};