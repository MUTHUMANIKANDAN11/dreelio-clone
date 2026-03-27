"use client";
import { AnimatedButton } from "@/components/AnimatedButton";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 120 && !scrolled) {
            setScrolled(true);
        } else if (latest <= 120 && scrolled) {
            setScrolled(false);
        }
    });

    return (
        <>
        <motion.div 
            className={`header flex justify-between items-center fixed top-[20px] left-1/2 -translate-x-1/2 p-1.5 rounded-full transition-all duration-300 z-1009 ${
              scrolled ? 'bg-white/30 backdrop-blur-md shadow-sm' : 'bg-transparent shadow-none'
            } ${className}`}
            initial={false}
            animate={{
                width: scrolled ? "800px" : "940px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Link href="/" className="header-left flex text-[18px] leading-[21px] font-semibold cursor-pointer items-center">
                <svg className='ml-4 header-icon' style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" preserveAspectRatio="none" width="100%" height="100%">
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
                    <AnimatedButton className="text-[14px] bg-black text-white font-semibold leading-[19px] rounded-full px-6 py-4 cursor-pointer">
                        Try Dreelio free
                    </AnimatedButton>
                </div>
            </Link>
            <div className="hamburger-btn cursor-pointer pr-3" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <motion.line 
                        x1="3" y1="6" x2="21" y2="6"
                        animate={{ 
                            x1: isMobileMenuOpen ? 5 : 3, 
                            y1: isMobileMenuOpen ? 5 : 6, 
                            x2: isMobileMenuOpen ? 19 : 21, 
                            y2: isMobileMenuOpen ? 19 : 6 
                        }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }} 
                    />
                    <motion.line 
                        x1="3" y1="12" x2="21" y2="12"
                        animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }} 
                    />
                    <motion.line 
                        x1="3" y1="18" x2="21" y2="18"
                        animate={{ 
                            x1: isMobileMenuOpen ? 5 : 3, 
                            y1: isMobileMenuOpen ? 19 : 18, 
                            x2: isMobileMenuOpen ? 19 : 21, 
                            y2: isMobileMenuOpen ? 5 : 18 
                        }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }} 
                    />
                </svg>
            </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
            <div className="mobile-menu-dropdown fixed top-[80px] left-0 w-full px-4 z-[1008]">
                <div className="flex flex-col justify-center items-center bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-4 border gap-2 border-black/5">
                    <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-slate-900 w-[100%] h-[40px] text-center flex items-center justify-center rounded-full hover:bg-white/20">Features</Link>
                    <Link href="/#benefits" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-slate-900 w-[100%] h-[40px] text-center flex items-center justify-center rounded-full hover:bg-white/20">Benefits</Link>
                    <Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-slate-900 w-[100%] h-[40px] text-center flex items-center justify-center rounded-full hover:bg-white/20">Pricing</Link>
                    <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-slate-900 w-[100%] h-[40px] text-center flex items-center justify-center rounded-full hover:bg-white/20">Blog</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-slate-900 w-[100%] h-[40px] text-center flex items-center justify-center rounded-full hover:bg-white/20">Contact Us</Link>
                    <Link href="/contact" className="w-[100%]" onClick={() => setIsMobileMenuOpen(false)}>
                        <AnimatedButton className="w-full text-[14px] bg-black text-white font-semibold leading-[19px] rounded-full px-6 py-4 cursor-pointer text-center flex justify-center mt-6">
                            Try Dreelio free
                        </AnimatedButton>
                    </Link>
                </div>
            </div>
        )}
        </>
    );
};
