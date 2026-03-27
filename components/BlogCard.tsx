import { AnimatedButton } from "@/components/AnimatedButton";
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
    id: string;
    imageSrc: string;
    title: string;
    tag: string;
    tagColor: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ id, imageSrc, title, tag, tagColor }) => {
    return (
        <Link href={`/blog/${id}`} className="block w-[100%] h-[100%] group">
            <div className="footer-card w-[100%] h-[100%] rounded-3xl">
                <div className="card-top overflow-hidden rounded-3xl">
                    <img src={imageSrc} className="w-[320px] h-[300px] object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt={title} />
                </div>
                <div className="card-content w-[100%] flex justify-between items-center mt-5 gap-1">
                    <div className="card-left text-[18px] font-semibold">{title}</div>
                    <div className="card-right">
                        <AnimatedButton className={`flex items-center text-[12px] justify-center font-bold text-white pt-2 pb-1 px-3 rounded-full`} style={{ backgroundColor: tagColor }}>
                            {tag}
                        </AnimatedButton>
                    </div>
                </div>
            </div>
        </Link>
    );
};
