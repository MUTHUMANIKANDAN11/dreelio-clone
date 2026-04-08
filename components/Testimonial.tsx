"use client";

import React, { useRef, useState, useEffect } from 'react';
import { TestimonialCard } from "./TestimonialCard";
import { testimonials, featuredTestimonial } from '@/data/testimonials';

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

    const handleMouseEnter = () => {
        if (scrollRef.current) {
            const animations = scrollRef.current.getAnimations();
            animations.forEach(anim => {
                anim.playbackRate = 0.5;
            });
        }
    };

    const handleMouseLeave = () => {
        if (scrollRef.current) {
            const animations = scrollRef.current.getAnimations();
            animations.forEach(anim => {
                anim.playbackRate = 1;
            });
        }
    };

    return (
        <div className="hero7 flex flex-col items-center justify-center mt-40 px-5 w-[100vw] overflow-hidden">
          <div className="hero7-head text-[50px] w-[720px] max-w-full font-semibold text-center">{featuredTestimonial.quote}</div>
          <div className="hero7-content flex flex-col items-center justify-center mt-10">
            <div className="hero7-user-img flex">
              <img src={featuredTestimonial.imageSrc} className="hero7-img h-[60px] w-[60px] object-cover rounded-full" alt={featuredTestimonial.userName} />
            </div>
            <div className="hero7-user-content flex flex-col items-center justify-center mt-5">
              <div className="hero7-user-name text-[18px] font-semibold">{featuredTestimonial.userName}</div>
              <div className="hero7-user-role text-[14px] text-[#757170]">{featuredTestimonial.userRole}</div>
            </div>
          </div>
          
          <div className="relative w-full max-w-[1200px] mt-10 flex justify-center md:block md:overflow-hidden md:[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
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
                className="hero7-footer flex md:justify-start gap-5 md:gap-0 overflow-x-auto w-[80vw] md:w-max snap-x snap-mandatory pb-5 px-[7.5vw] md:px-0 overflow-hidden md:animate-[scroll-left_40s_linear_infinite]"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
              {[...testimonials, ...testimonials].map((t, idx) => (
                <div key={idx} className={`snap-center shrink-0 flex justify-center w-[85vw] md:w-auto md:mr-5 ${idx >= testimonials.length ? 'max-md:hidden' : ''}`}>
                  <TestimonialCard
                    content={t.content}
                    imageSrc={t.imageSrc}
                    userName={t.userName}
                    userRole={t.userRole}
                  />
                </div>
              ))}
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