import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Community from "@/components/Community";
import Testimonial from "@/components/Testimonial";
import { CloudImages } from "@/components/CloudImages";
import { AnimatedButton } from "@/components/AnimatedButton";

export default function Home() {
  return (
    <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden bg-[linear-gradient(to_bottom,_white_30%,_#F4F1EE_50%,_#C4DCF4_100%)] relative">
      <Header />

      <CloudImages />

      <div className="hero w-[100vw] h-[100vh] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
        <div className="w-[940px] flex flex-col items-center mt-35">
          <div className="text-[10px] font-bold text-[#614A44] px-3 py-2 bg-[#F4F1EE] rounded-full">CONTACT US</div>
          <div className="hero-head text-[64px] leading-[88px] font-semibold text-center">Let's connect</div>
          <div className="hero-content text-[18px] font-normal text-center text-slate-600 w-[400px] mt-4">Have questions about Dreelio? Contact us and we'll be happy to help.</div>
        </div>

        <form action="" className="bg-white/60 flex flex-col gap-6 p-6 rounded-3xl mt-10">
          <div className="row1 flex gap-4">
            <div className="name-box flex flex-col gap-2">
              <label htmlFor="name" className="text-[14px] font-semibold text-[#614A44]">Name</label>
              <input type="text" className="bg-white border border-gray-300 rounded-md px-3 py-2" placeholder="Eg. Jane Smith" id="name" />
            </div>
            <div className="email-box flex flex-col gap-2">
              <label htmlFor="email" className="text-[14px] font-semibold text-[#614A44]">Email</label>
              <input type="email" className="bg-white border border-gray-300 rounded-md px-3 py-2" placeholder="jane@framer.com" id="email" />
            </div>
          </div>
          <div className="message-box flex flex-col gap-2">
            <label htmlFor="message" className="text-[14px] font-semibold text-[#614A44]">Message</label>
            <textarea id="message" className="bg-white border border-gray-300 rounded-md px-3 py-2" placeholder="Enter your message..."></textarea>
          </div>
          <div className="existing-customer flex flex-col gap-2">
            <label htmlFor="existing-customer" className="text-[14px] font-semibold text-[#614A44]">Are you an existing customer?</label>
            <select name="existing-customer" id="existing-customer" className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-500 text-[14px]">
              <option className="" value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <AnimatedButton type="submit" className="bg-black text-white font-semibold rounded-full px-6 py-3 cursor-pointer mt-5">Send a message</AnimatedButton>
        </form>
      </div>

      <Community />

      <Testimonial />

      <Footer />
    </main>
  );
}