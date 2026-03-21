"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroImage = () => {
    const { scrollY } = useScroll(); 

    const rotateXRaw = useTransform(scrollY, [0, 300], [10, 0]);
    const scaleRaw = useTransform(scrollY, [0, 300], [0.85, 1]);
    const opacityRaw = useTransform(scrollY, [0, 300], [0.9, 1]);

    const rotateX = useSpring(rotateXRaw, { stiffness: 60, damping: 15 });
    const scale = useSpring(scaleRaw, { stiffness: 60, damping: 15 }); 
    const opacity = useSpring(opacityRaw, { stiffness: 60, damping: 15 });

    return (
        <div className="hero-img mt-20" style={{ perspective: "1200px" }}>
            <motion.img 
                src="./images/hero.png"
                className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)]" 
                alt="Dashbord Hero" 
                style={{ 
                    rotateX, 
                    scale,
                    opacity,
                    transformOrigin: "top center",
                    willChange: "transform, opacity"
                }} 
            />
        </div>
    );
};
