import { Header } from "@/components/Header";
import BlogList from "@/components/BlogList";
import { Footer } from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { CloudImages } from "@/components/CloudImages";
import { isDevMode } from "@/lib/devMode";
import Link from "next/link";
import DeleteBlogButton from "@/components/DeleteBlogButton";

export function generateStaticParams() {
    return blogs.map((blog) => ({ id: String(blog.id) }));
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blogId = id;
    const blog = blogs.find(b => String(b.id) === String(blogId)) || blogs[0];
    const devMode = isDevMode();

    return (
        <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden bg-[linear-gradient(to_bottom,_white_30%,_#F4F1EE_50%,_#C4DCF4_100%)] relative">
            <Header />
            <CloudImages />

            <div className="single-blog-main w-[100vw] h-auto flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
                <div className="single-blog-hero-body w-[940px] flex flex-col items-center mt-40">
                    <div className="single-blog-hero-head text-[48px] font-[550] leading-[60px] text-center w-[600px] z-10">{blog.title}</div>
                    <div className="single-blog-hero-content text-[20px] font-normal leading-[28px] text-center text-slate-600 w-[600px] mt-4 z-10">{blog.description}</div>
                </div>

                <div className="single-blog-user-box user-box flex items-center gap-4 mt-6 z-10">
                    <div className="user-img p-[3px] bg-white rounded-full flex items-center justify-center">
                        <img src={blog.author.avatar} alt="" className="user-img-size w-[45px] h-[45px] rounded-full object-cover" />
                    </div>
                    <div className="user-details flex flex-col">
                        <div className="user-name text-[16px] font-semibold">{blog.author.name}</div>
                        <div className="user-date text-[14px] font-normal text-[#757170]">{blog.author.role}</div>
                    </div>
                </div>

                {devMode && (
                    <div className="flex gap-3 mt-4 z-10">
                        <Link href={`/blog/create?id=${blog.id}`}>
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">Edit Blog</button>
                        </Link>
                        <DeleteBlogButton blogId={blog.id} />
                    </div>
                )}

                <div className="single-blog-hero-img-wrapper relative w-[750px] flex items-center justify-center mt-8 rounded-t-2xl overflow-hidden z-10">
                    <img src={blog.imageSrc} alt="" className="single-blog-hero-img w-[100%] h-[450px] rounded-t-2xl object-cover" />
                    <div 
                        className="absolute top-6 right-6 flex items-center text-[12px] justify-center font-bold text-white pt-1 pb-1 px-5 rounded-full shadow-md" 
                        style={{ backgroundColor: blog.tagColor }}
                    >
                        {blog.tag}
                    </div>
                </div>
            </div>

            <div className="single-blog-content content w-[750px] h-[100%] flex flex-col gap-4 p-20 z-10">
                {blog.content ? (
                    blog.content.map((item: any, index: number) => {
                        switch (item.type) {
                            case "head":
                                return <div key={index} className="content-head text-[26px] font-bold mt-10">{item.value}</div>;
                            case "subhead":
                                return <div key={index} className="content-subhead text-[20px] font-semibold mt-6 text-[#2A2524]">{item.value}</div>;
                            case "body":
                                return <div key={index} className="content-body text-[16px] font-normal text-[#453F3D] text-align-justify">{item.value}</div>;
                            case "image":
                                return (
                                    <div key={index} className="content-img-wrapper w-full mt-6 mb-2 rounded-2xl overflow-hidden">
                                        <img src={item.value} alt="" className="w-full h-auto object-cover rounded-2xl" />
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })
                ) : (
                    <div className="content-body text-[16px] font-normal text-[#453F3D] text-center p-20 border border-dashed border-gray-300 rounded-2xl">
                        Full content for this blog post is coming soon!
                    </div>
                )}

                <div className="user-contact mt-10">
                    <div className="head text-[14px] font-normal text-[#453F3D]">Share on social media</div>
                    <div className="follow-icons flex mt-3 gap-2">
                        <img src="/images/linkedin.png" className="h-[40px] w-[40px] bg-black object-cover rounded-full p-2" alt="" />
                        <img src="/images/x-logo.png" className="h-[40px] w-[40px] bg-black object-cover rounded-full p-2" alt="" />
                    </div>
                </div>
            </div>

            <div className="single-blog-other-blogs other-blogs flex flex-col items-center justify-center mt-10 z-10 w-[100vw]">
                <div className="single-blog-other-blogs-head head text-[40px] font-[550] leading-[60px] text-center w-[600px]">You might also like</div>
                <BlogList excludeId={blog.id} />
            </div>

            <Footer />
        </main>
    );
}
