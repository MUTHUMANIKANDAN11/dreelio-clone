import React from 'react';
import Link from 'next/link';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    return (
        <div className={`header flex justify-between items-center w-[940px] fixed top-[20px] z-10 bg-white/30 backdrop-blur-md border-b border-gray-200 p-1.5 border-none rounded-full shadow-sm ${className}`}>
            <Link href="/" className="header-left flex text-[18px] leading-[21px] font-semibold cursor-pointer items-center">
                <svg className='ml-3' style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" preserveAspectRatio="none" width="100%" height="100%">
                    <use href="/icon1.svg"></use>
                </svg>
                <div className="ml-1">Dreelio</div>
            </Link>
            <div className="header-middle w-[40%] text-[14px] flex justify-between items-center h-[100%] text-slate-800">
                <Link href="/#features" className="header-nav px-2 py-1">Features</Link>
                <Link href="/#benefits" className="header-nav px-2 py-1">Benefits</Link>
                <Link href="/#pricing" className="header-nav px-2 py-1">Pricing</Link>
                <Link href="/blogs" className="header-nav px-2 py-1">Blog</Link>
                <Link href="/contact" className="header-nav px-2 py-1">Contact Us</Link>
            </div>
            <Link href="/contact">
                <div className="header-right">
                    <button className="text-[14px] bg-black text-white font-semibold leading-[19px] rounded-full px-6 py-4 cursor-pointer">
                        Try Dreelio free
                    </button>
                </div>
            </Link>
        </div>
    );
};
