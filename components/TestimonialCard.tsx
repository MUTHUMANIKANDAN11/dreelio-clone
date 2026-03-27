import React from 'react';

interface TestimonialCardProps {
    content: string;
    imageSrc: string;
    userName: string;
    userRole: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, imageSrc, userName, userRole }) => {
    return (
        <div className="user-card w-[345px] h-[100%] bg-white/70 rounded-3xl p-7">
            <div className="card-content text-[16px] text-[#453F3D]">{content}</div>
            <div className="card-footer flex items-center gap-5 mt-10">
                <div className="user-img">
                    <img src={imageSrc} className="user-img-size h-[50px] w-[50px] object-cover rounded-full" alt={userName} />
                </div>
                <div className="user-content flex flex-col items-start">
                    <div className="user-name text-[16px] font-semibold">{userName}</div>
                    <div className="user-role text-[12px] text-[#757170]">{userRole}</div>
                </div>
            </div>
        </div>
    );
};
