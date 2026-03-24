import { Header } from "@/components/Header";
import BlogList from "@/components/BlogList";
import { Footer } from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { CloudImages } from "@/components/CloudImages";

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blogId = id;
    const blog = blogs.find(b => String(b.id) === String(blogId)) || blogs[0];

    return (
        <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden bg-[linear-gradient(to_bottom,_white_30%,_#F4F1EE_50%,_#C4DCF4_100%)] relative">
            <Header />
            <CloudImages />

            <div className="hero w-[100vw] h-[100vh] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
                <div className="w-[940px] flex flex-col items-center mt-35">
                    <div className="hero-head text-[48px] font-[550] leading-[60px] text-center w-[600px]">{blog.title}</div>
                    <div className="hero-content text-[20px] font-normal leading-[28px] text-center text-slate-600 w-[600px] mt-4">{blog.description}</div>
                </div>

                <div className="user-box flex items-center gap-4 mt-10">
                    <div className="user-img p-[3px] bg-white rounded-full flex items-center justify-center">
                        <img src={blog.author.avatar} alt="" className="w-[45px] h-[45px] rounded-full object-cover" />
                    </div>
                    <div className="user-details flex flex-col">
                        <div className="user-name text-[16px] font-semibold">{blog.author.name}</div>
                        <div className="user-date text-[14px] font-normal text-[#757170]">{blog.author.role}</div>
                    </div>
                </div>

                <div className="w-[750px] flex items-center justify-center mt-10 rounded-t-2xl overflow-hidden">
                    <img src={blog.imageSrc} alt="" className="w-[100%] h-[450px] rounded-t-2xl object-cover" />
                </div>
            </div>

            <div className="content w-[750px] h-[100%] flex flex-col gap-4 p-20">
                {blog.content ? (
                    blog.content.map((item: any, index: number) => {
                        if (item.head) {
                            return <div key={index} className="content-head text-[26px] font-bold mt-10">{item.head}</div>;
                        } else if (item.body) {
                            return <div key={index} className="content-body text-[16px] font-normal text-[#453F3D]">{item.body}</div>;
                        }
                        return null;
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

            <div className="other-blogs flex flex-col items-center justify-center mt-10">
                <div className="head text-[40px] font-[550] leading-[60px] text-center w-[600px]">You might also like</div>
                <BlogList excludeId={blog.id} />
            </div>

            <Footer />
        </main>
    );
}
