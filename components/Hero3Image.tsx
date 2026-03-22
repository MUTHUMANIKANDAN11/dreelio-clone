"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";

export const Hero3Image = () => {
    const ref = useRef(null);
    const [activeDevice, setActiveDevice] = useState<"mobile" | "web">("mobile");

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scaleRaw = useTransform(scrollYProgress, [0, 1], [1.25, 1.0]);
    const scale = useSpring(scaleRaw, { stiffness: 60, damping: 15 });

    const activeClass = "text-[16px] bg-black text-white font-semibold rounded-full px-6 py-3 cursor-pointer";
    const inactiveClass = "text-[16px] px-6 py-3 rounded-full font-semibold text-white bg-gray-100/20 backdrop-blur-sm border border-white/30 font-medium cursor-pointer";

    return (
        <div ref={ref} className="hero3-images mt-10 w-[55vw] h-[650px] rounded-4xl overflow-hidden relative">
            <motion.div style={{ scale, width: "100%", height: "100%" }}>
                <motion.div 
                    className="w-[200%] h-[100%] flex"
                    animate={{ x: activeDevice === "mobile" ? "0%" : "-50%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <img 
                        src="./images/device1.png" 
                        className="w-[50%] h-[100%] object-cover" 
                        alt="device1" 
                    />
                    <img 
                        src="./images/device2.png" 
                        className="w-[50%] h-[100%] object-cover" 
                        alt="device2" 
                    />
                </motion.div>
            </motion.div>
            <div className="buttons absolute bottom-10 left-[50%] translate-x-[-50%] bg-gray-100/20 backdrop-blur-sm border border-white/30 rounded-full p-1.5 flex gap-2 transition-all">
                <AnimatedButton 
                    onClick={() => setActiveDevice("mobile")}
                    className={activeDevice === "mobile" ? activeClass : inactiveClass}
                >
                    Mobile App
                </AnimatedButton>
                <AnimatedButton 
                    onClick={() => setActiveDevice("web")}
                    className={activeDevice === "web" ? activeClass : inactiveClass}
                >
                    Web App
                </AnimatedButton>
            </div>
        </div>
    );
};
