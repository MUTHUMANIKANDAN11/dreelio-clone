"use client";

import React from 'react';

export const AnimatedButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
    return (
        <button className={`group overflow-hidden relative ${className}`} {...props}>
            <div className="grid place-items-center w-full h-full overflow-hidden relative">
                <span className="col-start-1 row-start-1 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[calc(100%+0px)] w-full h-full">
                    {children}
                </span>
                <span className="col-start-1 row-start-1 flex items-center justify-center transition-transform duration-300 translate-y-[calc(100%+0px)] group-hover:translate-y-0 w-full h-full absolute">
                    {children}
                </span>
            </div>
        </button>
    );
};
