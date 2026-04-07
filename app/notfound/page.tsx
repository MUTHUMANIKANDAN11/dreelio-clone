import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CloudImages } from "@/components/CloudImages";
import Link from "next/link";
import { AnimatedButton } from "@/components/AnimatedButton";

export default function Home() {
  return (
    <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden bg-[linear-gradient(to_bottom,_white_30%,_#F4F1EE_50%,_#C4DCF4_100%)] relative">
      <Header />

      <CloudImages />

      <div className="contact-hero w-[100vw] h-[100vh] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
        <div className="contact-hero-body w-[400px] flex flex-col items-center mt-60">
          <div className="blog-hero-badge text-[10px] font-bold text-[#614A44] px-3 py-2 bg-[#F4F1EE] rounded-full">PAGE NOT FOUND</div>
          <div className="contact-hero-head text-[45px] leading-[64px] font-bold text-center mt-5">Astradial can’t track this page.</div>
          <div className="contact-hero-content text-[18px] font-normal text-center text-slate-600 w-[430px] mt-5 z-10">Looks like this page is missing. Try heading back or exploring something new.</div>
          <Link href={'/'}>
            <AnimatedButton className="card-btn w-[100%] h-[50px] bg-black rounded-full px-5 text-white text-[16px] font-semibold cursor-pointer mt-5">Go Home</AnimatedButton>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}