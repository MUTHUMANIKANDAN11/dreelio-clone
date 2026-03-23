"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroImage = () => {
    const [entryDone, setEntryDone] = useState(false);
    const { scrollY } = useScroll();

    const scrollRotateX = useTransform(scrollY, [0, 500], [8, 0]);
    const scrollScale = useTransform(scrollY, [0, 500], [0.95, 1.05]);

    return (
        <div className="hero-img mt-20" style={{ perspective: "1200px" }}>
            <motion.img
                src="/images/hero.png"
                className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-full"
                alt="Dashboard Hero"
                initial={{ y: 60, opacity: 0, rotateX: 16, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, rotateX: 8, scale: 0.95 }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
                onAnimationComplete={() => setEntryDone(true)}
                style={{
                    ...(entryDone ? { rotateX: scrollRotateX, scale: scrollScale } : {}),
                    transformOrigin: "top center",
                    willChange: "transform",
                }}
            />
        </div>
    );
};
