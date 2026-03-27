"use client";
import { AnimatedButton } from "@/components/AnimatedButton";

import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { HeroImage } from "./HeroImage";
import { CloudImages } from "./CloudImages";

const AnimatedText = ({ text, className, delayOffset = 0 }: { text: string; className: string, delayOffset?: number }) => {
    let charIndex = 0;
    
    return (
        <div className={className} style={{ wordBreak: "keep-all", overflowWrap: "normal" }}>
            {text.split(" ").map((word, wordIndex, array) => {
                const isLateWord = wordIndex > 0;
                if (isLateWord) charIndex++;

                return (
                <React.Fragment key={wordIndex}>
                    <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                        {word.split("").map((char, charIdx) => {
                            const index = charIndex++;
                            return (
                                <motion.span
                                    key={charIdx}
                                    initial={{ opacity: 0, x: 20, y: 0, rotate: 3 }}
                                    animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                                    transition={{
                                        duration: 0.1,
                                        delay: delayOffset + index * 0.01,
                                        ease: "easeOut"
                                    }}
                                    style={{ display: "inline-block" }}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </span>
                    {wordIndex < array.length - 1 && " "}
                </React.Fragment>
            )})}
        </div>
    );
};

export const HeroSection = () => {
    return (
        <>
            <CloudImages />

            <div className="hero w-[100vw] h-[110vh] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1] bg-red-500">
                <div className="hero-content w-[920px] flex flex-col items-center mt-35">
                    <AnimatedText 
                        text="Run your freelance business like a pro" 
                        className="hero-head text-[68px] leading-[88px] font-semibold text-center"
                        delayOffset={0.2}
                    />
                    <AnimatedText 
                        text="All-in-one platform for managing cliens, projects, and payments without the chaos. From first contract to final invoice, we've got your back." 
                        className="hero-content-text text-[20px] font-normal text-center text-[#453F3D] w-[75%] mt-4"
                        delayOffset={0.2}
                    />
                    <motion.div 
                        className="hero-button mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                    >
                        <Link href={'/contact'}>
                            <AnimatedButton className="text-[16px] bg-black text-white font-semibold rounded-full px-6 py-3 cursor-pointer mr-2">
                                Try Dreelio free
                            </AnimatedButton>
                        </Link>
                        <Link href={'/#features'}>
                            <AnimatedButton className="text-[16px] px-6 py-3 rounded-full bg-gray-100/20 font-medium cursor-pointer">
                                See features
                            </AnimatedButton>
                        </Link>
                    </motion.div>
                    
                    <HeroImage />
                </div>
            </div>
        </>
    );
};
