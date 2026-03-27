import { Header } from "@/components/Header";
import SingleBlog from "@/components/SingleBlog";
import BlogList from "@/components/BlogList";
import { Footer } from "@/components/Footer";
import { CloudImages } from "@/components/CloudImages";

export default function Home() {
    return (
        <main className="blog-page-main flex items-center flex-col overflow-x-hidden overflow-y-hidden  bg-[linear-gradient(to_bottom,_white_30%,_#F4F1EE_50%,_#C4DCF4_100%)] relative">
            <Header />
            <CloudImages />

            <div className="blog-hero w-[100vw] h-[115vh] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
                <div className="blog-hero-body w-[940px] flex flex-col items-center mt-35 z-10">
                    <div className="blog-hero-badge text-[10px] font-bold text-[#614A44] px-3 py-2 bg-[#F4F1EE] rounded-full">BLOG</div>
                    <div className="blog-hero-head text-[64px] leading-[88px] font-semibold text-center">Ideas to level-up your freelance game</div>
                    <div className="blog-hero-content text-[18px] font-normal text-center text-slate-600 w-[600px] mt-4">Explore expert tips, strategies, and data-driven insights to improve customer retention and engagement.</div>
                </div>

                <SingleBlog />
            </div>
            <div className="blog-page-list">
                <BlogList excludeMainBlog={true} />
            </div>
            <Footer />
        </main>
    );
}