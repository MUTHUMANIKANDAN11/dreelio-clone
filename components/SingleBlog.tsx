import { AnimatedButton } from "@/components/AnimatedButton";
import Link from "next/link"
import { blogs } from "../data/blogs"

export default function SingleBlog() {
    const blog = blogs[0];
    
    return (
        <Link href={`/blog/${blog.id}`} className="hero9-content flex items-center justify-center mt-10 group">
            <div className="hero9-content-left w-[500px] h-[510px] rounded-l-3xl bg-white/70">
                <div className="hero9-content-left-img w-full h-full overflow-hidden rounded-3xl">
                    <img src={blog.imageSrc} alt="" className="w-[100%] h-[100%] object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                </div>
            </div>

            <div className="hero9-content-right w-[500px] bg-white/70 h-[510px] rounded-r-3xl p-10 flex flex-col justify-between">
                <div className="flex flex-col">
                    <button className="card-tag flex items-center justify-center text-white bg-[#614A44] w-fit pt-2 pb-1 px-5 rounded-full">{blog.tag}</button>
                    <div className="card-head text-[34px] font-semibold mt-8">{blog.title}</div>
                    <div className="card-content text-[16px] text-[#453F3D] mt-5">{blog.description}</div>
                </div>

                <div className="card-footer flex items-center justify-between mt-10">
                    <div className="card-footer-left flex items-center gap-2">
                        <img src={blog.author.avatar} alt="" className="w-[50px] h-[50px] object-cover rounded-full" />
                        <div className="card-footer-left-content flex flex-col ml-2 justify-center">
                            <div className="card-footer-left-content-head text-[16px] font-semibold">{blog.author.name}</div>
                            <div className="card-footer-left-content-head text-[14px] text-[#757170]">{blog.author.role}</div>
                        </div>
                    </div>
                    <div className="card-footer-right flex items-center gap-2">
                        <button className="flex items-center text-[12px] justify-center font-bold text-white bg-[#C9502E] pt-2 pb-1 px-3 rounded-full">FEATURED</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}