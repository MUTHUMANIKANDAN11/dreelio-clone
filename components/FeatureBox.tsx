"use client";
import { AnimatedButton } from "@/components/AnimatedButton";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FeatureItem {
    icon: string;
    text: string;
}

interface FeatureBoxProps {
    subhead: string;
    head: string;
    content: React.ReactNode;
    buttonText?: string;
    features: FeatureItem[];
    imageSrc: string;
    reverse?: boolean;
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({
    subhead,
    head,
    content,
    buttonText = "Try AstraDial free",
    features,
    imageSrc,
    reverse = false,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [60, 0]);

    const leftBlock = (
        <div ref={containerRef} className="feature-box-image-block bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1] rounded-3xl overflow-hidden">
            <div className="feature-box-img-wrapper h-[640px] w-[100%] p-10">
                <motion.img
                    src={imageSrc}
                    className="h-[100%] w-[100%]"
                    alt={head}
                    style={{ y: imageY }}
                />
            </div>
        </div>
    );

    const rightBlock = (
        <div className={`feature-box-content-block h-[650px] w-[370px] flex flex-col justify-between ${reverse ? 'mr-15' : 'ml-15'}`}>
            <div>
                <div className="text-[14px] font-bold text-[#614A44]">{subhead}</div>
                <div className="feature-box-head text-[48px] leading-[62px] font-semibold mt-5">{head}</div>
                <div className="feature-box-content text-[16px] leading-[26px] mt-5 text-[#453F3D]">{content}</div>
                {buttonText && (
                    <Link href={'/contact'} className="feature-box-main-btn-wrapper">
                        <AnimatedButton className="feature-box-main-btn text-[16px] px-6 py-3 rounded-full mt-7 font-semibold text-white bg-black font-medium cursor-pointer w-[100%]">
                            {buttonText}
                        </AnimatedButton>
                    </Link>
                )}
            </div>
            <div className="feature-box-features grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                    <button key={idx} className="text-[15px] py-2 rounded-full border border-gray-200 text-[#453F3D] font-medium flex justify-center items-center w-[170px]">
                        <img src={feature.icon} className="mr-2" alt={feature.text} />
                        {feature.text}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className="feature-box-container w-[100vw] h-[100%] flex justify-center mt-30">
            {reverse ? (
                <>
                    {rightBlock}
                    {leftBlock}
                </>
            ) : (
                <>
                    {leftBlock}
                    {rightBlock}
                </>
            )}
        </div>
    );
};
