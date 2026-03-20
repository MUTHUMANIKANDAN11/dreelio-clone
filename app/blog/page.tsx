import { Header } from "@/components/Header";
import BlogList from "@/components/BlogList";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden   bg-[linear-gradient(to_bottom,_white_30%,_#F4F1EE_50%,_#C4DCF4_100%)]">
            <Header />
            <img src="./images/cloud1.png" className="w-[400px] h-[250px] bg-fit absolute top-40 left-[-200px]" alt="" />
            <img src="./images/cloud2.png" className="w-[400px] h-[250px] bg-fit absolute top-40 right-[-200px]" alt="" />

            <div className="hero w-[100vw] h-[100vh] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
                <div className="w-[940px] flex flex-col items-center mt-35">
                    <div className="hero-head text-[48px] font-[550] leading-[60px] text-center w-[600px]">How to start a 100k creative agency in 2025</div>
                    <div className="hero-content text-[20px] font-normal leading-[28px] text-center text-slate-600 w-[600px] mt-4">Learn how to kickstart your journey into agency ownership with our comprehensive guide.</div>
                </div>

                <div className="user-box flex items-center gap-4 mt-10">
                    <div className="user-img p-[3px] bg-white rounded-full flex items-center justify-center">
                        <img src="./images/user1.png" alt="" className="w-[45px] h-[45px] rounded-full object-cover" />
                    </div>
                    <div className="user-details flex flex-col">
                        <div className="user-name text-[16px] font-semibold">Dhyna Phils</div>
                        <div className="user-date text-[14px] font-normal text-[#757170]">Head of Marketing</div>
                    </div>
                </div>

                <div className="w-[750px] flex items-center justify-center mt-10 rounded-t-2xl overflow-hidden">
                    <img src="./images/hero9.1.png" alt="" className="w-[] h-[450px] bg-fit" />
                </div>
            </div>

            <div className="content w-[750px] h-[100%] flex flex-col gap-4 p-20">
                <div className="content-body text-[16px] font-normal text-[#453F3D]">
                    According to Forbes, digital agencies grew 32.1% between 2024 and 2025, with 89,912 agencies in business by the end of last year. Better yet – revenues support that growth. This means the numbers add up. And you, as somebody who’s interested in starting a new business, can see that the agency model could be key to your success.
                </div>

                <div className="content-body text-[16px] font-normal text-[#453F3D]">
                    That brings the question: How can I start an agency?
                </div>

                <div className="content-head text-[26px] font-bold mt-10">What is an Agency Business?</div>

                <div className="content-body text-[16px] font-normal text-[#453F3D]">The agency business in simple terms is bringing together a team of specialized experts within a specific niche to deliver a set of services. Take design as an example. In a design agency, you’ll have a host of experts like Product designers, web designers and developers, animators and 3D designers, search engine optimization (SEO) specialists. Each provides a specific service for which you can charge money.</div>
                <div className="content-body text-[16px] font-normal text-[#453F3D]">The trick lies in finding a service that people actually want and then building an agency business around that service.</div>

                <div className="content-head text-[26px] font-bold mt-10">How much does It cost to start an agency?</div>

                <div className="content-body text-[16px] font-normal text-[#453F3D]">Well!!! This is a tricky question to answer.</div>
                <div className="content-body text-[16px] font-normal text-[#453F3D]">Your agency costs may vary depending on the type and size of agency you create. If your agency offers one service and has a couple of employees costs less to start than a multi-service agency.</div>
                <div className="content-body text-[16px] font-normal text-[#453F3D]">Let's say an average cost of starting a digital agency falls within a high range: <span className="font-semibold">$730 to $29,100.</span></div>

                <div className="content-head text-[26px] font-bold mt-10">How to start an agency – The 5 solid steps</div>

                <div className="content-body text-[16px] font-normal text-[#453F3D]">Now you know the pros and cons, here're 5 solid steps you can take to start an agency:</div>
                <div className="content-body text-[16px] font-normal text-[#453F3D]">1. Choose a Niche</div>
                <div className="content-body text-[16px] font-normal text-[#453F3D]">2. Know your audience</div>
                <div className="content-body text-[16px] font-normal text-[#453F3D]">3. Choose the best agency software</div>
                <div className="content-body text-[16px] font-normal text-[#453F3D]">4. Plan, Plan, Plan</div>
                <div className="content-body text-[16px] font-normal text-[#453F3D]">5. Choose a strategy.</div>

                <div className="content-body text-[16px] font-normal text-[#453F3D]">Baseline is, don't allow the vastness of current agencies, be flexible with your strategy, grind, temper your expectations and keep a positive attitude throughout.</div>

                <div className="user-contact mt-10">
                    <div className="head text-[14px] font-normal text-[#453F3D]">Share on social media</div>
                    <div className="follow-icons flex mt-3 gap-2">
                        <img src="./images/linkedin.png" className="h-[40px] w-[40px] bg-black object-cover rounded-full p-2" alt="" />
                        <img src="./images/x-logo.png" className="h-[40px] w-[40px] bg-black object-cover rounded-full p-2" alt="" />
                    </div>
                </div>
            </div>

            <div className="other-blogs flex flex-col items-center justify-center mt-10">
                <div className="head text-[40px] font-[550] leading-[60px] text-center w-[600px]">You might also like</div>
                <BlogList />
            </div>

            <Footer />
        </main>
    );
}