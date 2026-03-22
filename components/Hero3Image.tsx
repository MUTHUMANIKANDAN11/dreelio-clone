"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const Hero3Image = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scaleRaw = useTransform(scrollYProgress, [0, 1], [1.25, 1.0]);
    const scale = useSpring(scaleRaw, { stiffness: 60, damping: 15 });

    return (
        <div ref={ref} className="hero3-images mt-10 w-[55vw] h-[650px] rounded-4xl overflow-hidden relative">
            <motion.img 
                src="./images/device1.png" 
                className="w-[100%] h-[100%] object-cover" 
                alt="Seamless Across Devices" 
                style={{ scale }}
            />
            <div className="buttons absolute bottom-10 left-[50%] translate-x-[-50%] bg-gray-100/20 backdrop-blur-sm border border-white/30 rounded-full p-1.5">
                <button className="text-[16px] bg-black text-white font-semibold rounded-full px-6 py-3 cursor-pointer mr-2">
                    Mobile App
                </button>
                <button className="text-[16px] px-6 py-3 rounded-full font-semibold text-white bg-gray-100/20 backdrop-blur-sm border border-white/30 font-medium cursor-pointer">
                    Web App
                </button>
            </div>
        </div>
    );
};
