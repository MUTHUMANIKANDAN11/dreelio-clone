import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
    imageSrc: string;
    title: string;
    tag: string;
    tagColor: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title, tag, tagColor }) => {
    return (
        <Link href="/blog" className="block w-[100%] h-[100%]">
            <div className="footer-card w-[100%] h-[100%] rounded-3xl">
                <div className="card-top">
                    <img src={imageSrc} className="w-[320px] h-[300px] object-cover rounded-3xl" alt={title} />
                </div>
                <div className="card-content flex justify-between items-center mt-5 pr-3">
                    <div className="card-left w-[70%] text-[18px] font-semibold">{title}</div>
                    <div className="card-right">
                        <button className={`flex items-center text-[12px] justify-center font-bold text-white pt-2 pb-1 px-3 rounded-full`} style={{ backgroundColor: tagColor }}>
                            {tag}
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
