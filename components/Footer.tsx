"use client";
import { AnimatedButton } from "@/components/AnimatedButton";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({  }) => {
    return (
        <div className="footer w-[100vw] h-[750px] flex flex-col items-center justify-start mt-40 relative">
          <div className="footer-head text-[46px] w-[470px] font-semibold text-center">Ready to get started</div>
          <div className="footer-subhead text-[18px] text-[#453F3D] mt-3">Download AstraDial for free. No credit card required.</div>
          <div className="footer-btn flex items-center gap-5 mt-10">
            <Link href={'/contact'}>
              <AnimatedButton className="card-btn w-[100%] h-[50px] bg-black rounded-full px-5 text-white text-[16px] font-semibold cursor-pointer">Try AstraDial free</AnimatedButton>
            </Link>
          </div>

          <motion.img 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            src="/images/cloud1.png" 
            className="footer-cloud-left w-[400px] h-[250px] bg-fit absolute top-10 left-[-200px] pointer-events-none z-10" 
            alt="cloud left" 
          />
          <motion.img 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            src="/images/cloud2.png" 
            className="footer-cloud-right w-[400px] h-[250px] bg-fit absolute top-10 right-[-200px] pointer-events-none z-10" 
            alt="cloud right" 
          />

          <div className="footer-content-main w-[970px] flex flex-col items-center justify-start mt-30 bg-white/25 rounded-3xl shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
            <div className="footer-content w-[900px] h-[250px] flex justify-between mt-10">
              <div className="footer-content-left flex flex-col gap-5">
                <div className="footer-content-left-head flex items-center gap-2">
                  <img src="/icon1.svg" className="h-[22px] w-auto" alt="AstraDial" />
                </div>
                <div className="footer-content-left-content flex flex-col">
                  <div className="footer-content-left-content-body text-[15px] text-[#453F3D] w-[250px]">Your favourite communication management software. Built for enterprise with larger customer base.</div>
                  <div className="follow-icons flex mt-3 gap-2">
                    <img src="/images/linkedin.png" className="h-[40px] w-[40px] bg-black object-cover rounded-full p-2" alt="" />
                    <img src="/images/x-logo.png" className="h-[40px] w-[40px] bg-black object-cover rounded-full p-2" alt="" />
                  </div>
                </div>
              </div>
              <div className="footer-bottom-right flex gap-20">
                <div className="footer-pages-section flex flex-col">
                  <div className="text-[14px] font-semibold">PAGES</div>
                  <div className="footer-pages text-[#5F6469] flex flex-col gap-4 mt-4">
                    <div className="text-[14px]">Home</div>
                    <div className="text-[14px]">Features</div>
                    <div className="text-[14px]">Pricing</div>
                    <div className="text-[14px]">Blog</div>
                  </div>
                </div>
                <div className="right-right">
                  <div className="text-[14px] font-semibold">INFORMATION</div>
                  <div className="footer-info text-[#5F6469] flex flex-col gap-4 mt-4">
                    <div className="text-[14px]">Contact</div>
                    <div className="text-[14px]">Privacy</div>
                    <div className="text-[14px]">Terms of use</div>
                    <div className="text-[14px]">404</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-footer w-[900px] flex justify-between items-center h-[70px] font-[#585556] border-t border-black/10">
              <div className="footer-left text-[14px] font-[#585556]">© 2026 AstraDial. Created by <span className="font-semibold font-[#1A1615]">Leon Chike</span></div>
              <div className="footer-right text-[14px] font-[#585556]">Built in <span className="font-semibold font-[#1A1615]">Next.js</span></div>
            </div>
          </div>
        </div>
    );
};