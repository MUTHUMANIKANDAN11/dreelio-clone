import React from 'react';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    return (
        <div className={`header flex justify-between items-center w-[940px] fixed top-[20px] z-10 bg-white/30 backdrop-blur-md border-b border-gray-200 ${className}`}>
            <div className="header-left flex text-[18px] leading-[21px] font-semibold cursor-pointer">
                <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" preserveAspectRatio="none" width="100%" height="100%">
                    <use href="/icon1.svg"></use>
                </svg>
                <div className="">Dreelio</div>
            </div>
            <div className="header-middle w-[40%] text-[14px] flex justify-between items-center h-[100%] text-slate-800">
                <a href="" className="header-nav">Features</a>
                <a href="" className="header-nav">Benefits</a>
                <a href="" className="header-nav">Pricing</a>
                <a href="" className="header-nav">Blog</a>
                <a href="" className="header-nav">Contact Us</a>
            </div>
            <div className="header-right">
                <button className="text-[14px] bg-black text-white font-semibold leading-[19px] rounded-full px-6 py-4 cursor-pointer">
                    Try Dreelio free
                </button>
            </div>
        </div>
    );
};
