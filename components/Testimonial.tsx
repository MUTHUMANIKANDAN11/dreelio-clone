"use client";

import React, { useRef, useState, useEffect } from 'react';
import { TestimonialCard } from "./TestimonialCard";

export default function Testimonial() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const slideLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -345, behavior: "smooth" });
        }
    };

    const slideRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 345, behavior: "smooth" });
        }
    };

    return (
        <div className="hero7 flex flex-col items-center justify-center mt-40 px-5 w-[100vw] overflow-hidden">
          <div className="hero7-head text-[50px] w-[720px] max-w-full font-semibold text-center">"AstraDial is by far the best agency tool I have ever used"</div>
          <div className="hero7-content flex flex-col items-center justify-center mt-10">
            <div className="hero7-user-img flex">
              <img src="./images/user1.png" className="hero7-img h-[60px] w-[60px] object-cover rounded-full" alt="" />
            </div>
            <div className="hero7-user-content flex flex-col items-center justify-center mt-5">
              <div className="hero7-user-name text-[18px] font-semibold">Martha punla</div>
              <div className="hero7-user-role text-[14px] text-[#757170]">VP Marketing, Meta</div>
            </div>
          </div>
          
          <div className="relative w-full max-w-[1200px] mt-10 flex justify-center">
            {canScrollLeft && (
                <button 
                    onClick={slideLeft} 
                    className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-black/20 shadow-md p-2 rounded-full hover:bg-white md:hidden flex justify-center items-center"
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" color='white'>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            <div 
                ref={scrollRef} 
                onScroll={checkScroll} 
                className="hero7-footer flex md:justify-center gap-5 overflow-x-auto md:overflow-x-visible w-full snap-x md:snap-none snap-mandatory pb-5 px-[7.5vw] md:px-0"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="snap-center shrink-0 flex justify-center w-[85vw] md:w-auto">
                <TestimonialCard
                  content="&quot;As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.&quot;"
                  imageSrc="./images/user2.png"
                  userName="Leah Daniel"
                  userRole="Design Ops lead, teamwork"
                />
              </div>
              <div className="snap-center shrink-0 flex justify-center w-[85vw] md:w-auto">
                <TestimonialCard
                  content="&quot;As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.&quot;"
                  imageSrc="./images/user3.png"
                  userName="Sergio Walker"
                  userRole="Agency Owner"
                />
              </div>
              <div className="snap-center shrink-0 flex justify-center w-[85vw] md:w-auto">
                <TestimonialCard
                  content="&quot;We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.&quot;"
                  imageSrc="./images/user4.png"
                  userName="Jane Jay Jay"
                  userRole="Project Manager, Google"
                />
              </div>
            </div>

            {canScrollRight && (
                <button 
                    onClick={slideRight} 
                    className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-black/20 shadow-md p-2 rounded-full hover:bg-white md:hidden flex justify-center items-center"
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" color='white'>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
          </div>
        </div>
    )
}