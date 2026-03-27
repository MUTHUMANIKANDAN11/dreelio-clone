import React from 'react';

interface TrustedBrandsProps {
    className?: string;
    titleClassName?: string;
}

const brands = [
    "/brand1.svg",
    "/brand2.svg",
    "/brand3.svg",
    "/brand4.svg",
    "/brand5.svg",
];

export const TrustedBrands: React.FC<TrustedBrandsProps> = ({
    className = 'h-[300px]',
    titleClassName = 'mt-30'
}) => {
    return (
        <div className={`hero2 w-[100vw] flex flex-col items-center justify-start ${className}`}>
            <div className={`hero2-head text-[14px] font-400 text-[#757170] ${titleClassName}`}>
                Trusted by 7,000+ top startups, freelancers and studios
            </div>
            <div className="hero2-content w-[800px] mt-7 overflow-hidden relative"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
            >
                <div className="hero2-scroll-bar flex items-center gap-10 animate-scroll-left w-[1000px]">
                    {[...brands, ...brands, ...brands, ...brands].map((src, i) => (
                        <img key={i} src={src} alt="" className="h-4 shrink-0" />
                    ))}
                </div>
            </div>
        </div>
    );
};
