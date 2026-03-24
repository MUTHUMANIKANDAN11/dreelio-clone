"use client";
import { AnimatedButton } from "@/components/AnimatedButton";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface PricingCardProps {
    title: string;
    price: string;
    monthlyPrice?: string;
    annuallyPrice?: string;
    description: string;
    features: string[];
    buttonText: string;
    isPremium?: boolean;
    hasToggle?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({ 
    title, price, monthlyPrice, annuallyPrice, description, features, buttonText, isPremium, hasToggle 
}) => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");
    const displayPrice = hasToggle ? (billingCycle === "monthly" ? monthlyPrice : annuallyPrice) : price;
    const variants = {
        enter: (cycle: "monthly" | "annually") => ({
            y: cycle === 'monthly' ? -40 : 40,
            opacity: 0,
        }),
        center: {
            y: 0,
            opacity: 1,
        },
        exit: (cycle: "monthly" | "annually") => ({
            y: cycle === 'monthly' ? 40 : -40,
            opacity: 0,
        }),
    };

    return (
        <div className={`hero8-price-card ${isPremium ? 'flex flex-col w-[320px] h-[100%] bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1] border-[#84B9EF] border-[5px]' : 'w-[320px] h-[100%] bg-white'} rounded-3xl p-7`}>
            {hasToggle && (
                <div className="buttons flex justify-between rounded-full p-1.5 bg-[#F2EFEC] mb-7">
                  <AnimatedButton 
                    onClick={() => setBillingCycle("annually")}
                    className={`text-[14px] rounded-full px-8 py-2 cursor-pointer transition-colors duration-300 font-semibold ${billingCycle === "annually" ? "text-black bg-white" : "text-[#5F6469] bg-transparent font-medium hover:bg-white/50"}`}
                  >
                    Annually
                  </AnimatedButton>
                  <AnimatedButton 
                    onClick={() => setBillingCycle("monthly")}
                    className={`text-[14px] rounded-full px-8 py-2 cursor-pointer transition-colors duration-300 font-semibold ${billingCycle === "monthly" ? "text-black bg-white" : "text-[#5F6469] bg-transparent font-medium hover:bg-white/50"}`}
                  >
                    Monthly
                  </AnimatedButton>
                </div>
            )}
            <div className={`card-subhead text-[16px] font-semibold text-[#524C4A]`}>{title}</div>
            <div className="card-head text-[40px] font-semibold h-[60px] overflow-hidden flex items-center relative w-full">
                <AnimatePresence mode="popLayout" initial={false} custom={billingCycle}>
                    <motion.div
                        key={billingCycle}
                        custom={billingCycle}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute whitespace-nowrap"
                    >
                        {displayPrice}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="card-content text-[16px] text-[#453F3D] mt-5">{description}</div>
            <div className="card-list text-[16px] text-[#453F3D] mt-5">
                <ul>
                    {features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 mt-3">
                            <img src="./tick.svg" alt="" />
                            {feat}
                        </li>
                    ))}
                </ul>
            </div>
            <Link href={'/contact'}>
                <button className={`card-btn w-[100%] h-[50px] ${isPremium ? 'bg-black text-white' : 'bg-[#F4F1EE] text-black'} rounded-full text-[16px] font-semibold mt-10 cursor-pointer`}>
                    {buttonText}
                </button>
            </Link>
        </div>
    );
};
