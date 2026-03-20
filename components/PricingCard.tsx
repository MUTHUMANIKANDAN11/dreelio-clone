import React from 'react';

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    buttonText: string;
    isPremium?: boolean;
    topContent?: React.ReactNode;
}

export const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, buttonText, isPremium, topContent }) => {
    return (
        <div className={`hero8-price-card ${isPremium ? 'flex flex-col w-[320px] h-[100%] bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1] border-[#84B9EF] border-[5px]' : 'w-[320px] h-[100%] bg-white'} rounded-3xl p-7`}>
            {topContent}
            <div className={`card-subhead text-[16px] font-semibold text-[#524C4A] ${topContent ? 'mt-7' : ''}`}>{title}</div>
            <div className="card-head text-[40px] font-semibold">{price}</div>
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
            <button className={`card-btn w-[100%] h-[50px] ${isPremium ? 'bg-black text-white' : 'bg-[#F4F1EE] text-black'} rounded-full text-[16px] font-semibold mt-10`}>
                {buttonText}
            </button>
        </div>
    );
};
