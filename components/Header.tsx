"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 120 && !scrolled) {
            setScrolled(true);
        } else if (latest <= 120 && scrolled) {
            setScrolled(false);
        }
    });

    return (
        <motion.div 
            className={`header flex justify-between items-center fixed top-[20px] left-1/2 -translate-x-1/2 z-10 p-1.5 rounded-full transition-all duration-300 z-1009 ${
                scrolled ? 'bg-white/30 backdrop-blur-md shadow-sm' : 'bg-transparent shadow-none'
            } ${className}`}
            initial={false}
            animate={{
                width: scrolled ? "800px" : "940px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Link href="/" className="header-left flex text-[18px] leading-[21px] font-semibold cursor-pointer items-center">
                <svg className='ml-3' style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" preserveAspectRatio="none" width="100%" height="100%">
                    <use href="/icon1.svg"></use>
                </svg>
                <div className="ml-1">Dreelio</div>
            </Link>
            <div className={`header-middle w-[50%] text-[14px] flex justify-between items-center h-[100%] text-slate-800 ${scrolled ? '' : ''}`}>
                <Link href="/#features" className="header-nav px-3"><div>Features</div></Link>
                <Link href="/#benefits" className="header-nav px-3"><div>Benefits</div></Link>
                <Link href="/#pricing" className="header-nav px-3"><div>Pricing</div></Link>
                <Link href="/blogs" className="header-nav px-3"><div>Blog</div></Link>
                <Link href="/contact" className="header-nav px-3"><div>Contact Us</div></Link>
            </div>
            <Link href="/contact">
                <div className="header-right">
                    <button className="text-[14px] bg-black text-white font-semibold leading-[19px] rounded-full px-6 py-4 cursor-pointer">
                        Try Dreelio free
                    </button>
                </div>
            </Link>
        </motion.div>
    );
};
