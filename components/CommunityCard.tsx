import { AnimatedButton } from "@/components/AnimatedButton";
import React from 'react';

interface CommunityCardProps {
    platform: string;
    logoSrc: string;
    followers: string;
    description: string;
    buttonText: string;
}

export const CommunityCard: React.FC<CommunityCardProps> = ({ platform, logoSrc, followers, description, buttonText }) => {
    return (
        <div className="content-card w-[450px] h-[400px] bg-white/70 backdrop-blur-md border-b border-gray-200 rounded-3xl p-7 flex flex-col justify-between">
            <div className="content-card-head">
                <img src={logoSrc} className="h-[60px] w-[60px] object-cover rounded-2xl bg-white p-1" alt={platform} />
                <div className="content-card-content flex flex-col">
                    <div className="content-card-content-head text-[24px] font-semibold mt-10">{platform}</div>
                    <div className="content-card-content-body text-[16px] text-[#453F3D] mt-2">{description}</div>
                </div>
            </div>
            <div className="content-card-footer flex items-center mt-10">
                <AnimatedButton className="flex items-center text-[16px] border-2 border-gray-200 justify-center font-bold py-4 px-6 rounded-full">{buttonText}</AnimatedButton>
            </div>
        </div>
    );
};
