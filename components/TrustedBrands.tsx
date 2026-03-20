import React from 'react';

interface TrustedBrandsProps {
    className?: string;
    titleClassName?: string;
}

export const TrustedBrands: React.FC<TrustedBrandsProps> = ({ 
    className = 'h-[300px]', 
    titleClassName = 'mt-30'
}) => {
    return (
        <div className={`hero2 w-[100vw] flex flex-col items-center justify-start ${className}`}>
            <div className={`hero2-head text-[14px] font-400 text-[#757170] ${titleClassName}`}>
                Trusted by 7,000+ top startsups, freelancers and studios
            </div>
            <div className="hero2-content w-[750px] mt-7 flex items-center justify-between">
                <img src="./brand1.svg" alt="" />
                <img src="./brand2.svg" alt="" />
                <img src="./brand3.svg" alt="" />
                <img src="./brand4.svg" alt="" />
                <img src="./brand5.svg" alt="" />
            </div>
        </div>
    );
};
