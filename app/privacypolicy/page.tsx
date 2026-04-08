import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CloudImages } from "@/components/CloudImages";

export default function Home() {
  return (
    <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden bg-[linear-gradient(to_bottom,_white_30%,_#F4F1EE_50%,_#C4DCF4_100%)] relative">
      <Header />

      <CloudImages />

      <div className="privacy-hero w-[100vw] h-[100%] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
        <div className="privacy-hero-body w-[940px] flex flex-col items-center mt-35">
          <div className="privacy-hero-head text-[64px] leading-[88px] font-semibold text-center">Privacy Policy</div>
          <div className="privacy-hero-content text-[18px] font-normal text-center text-slate-600 w-[400px] mt-4 mb-15 z-10">Last updated: April 2026</div>
        </div>
      </div>

      <div className="privacy-content content w-[750px] h-[100%] flex flex-col gap-4 p-20 z-10">
        <div className="privacy-content-body text-[16px] font-normal text-[#453F3D]">Astradial ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services at astradial.com.</div>
        <div className="privacy-content-body text-[16px] font-normal text-[#453F3D]">When you use our website or reach out to us, we may collect personal information such as your name, email address, business details, and any information you share through forms or direct correspondence. We also collect usage data - including IP address, browser type, pages visited, and time spent on our site - to understand how our services are being used. Like most websites, we use cookies and similar tracking technologies to improve your experience and analyse traffic.</div>
        <div className="privacy-content-body text-[16px] font-normal text-[#453F3D]">We use the data we collect to respond to your enquiries and provide support, improve and optimise our website and telecom services, send relevant updates or promotional content where you've given consent, and meet our legal and compliance obligations.</div>
        <div className="privacy-content-body text-[16px] font-normal text-[#453F3D]">We do not sell or rent your personal information. We may share data with trusted third-party service providers - such as hosting, analytics, or email platform vendors - who help us operate Astradial. We may also disclose information when required by law or to protect our legal rights.</div>
        <div className="privacy-content-body text-[16px] font-normal text-[#453F3D]">You have the right to access the personal data we hold about you, request corrections to inaccurate or incomplete information, opt out of marketing communications at any time, and request deletion of your data, subject to applicable legal obligations.</div>
        <div className="privacy-content-body text-[16px] font-normal text-[#453F3D]">We take reasonable technical and organisational measures to protect your data from unauthorised access or disclosure. That said, no online system is completely secure, and we cannot guarantee absolute protection.</div>
        <div className="privacy-content-body text-[16px] font-normal text-[#453F3D]">Our website may link to external sites. We are not responsible for their privacy practices and encourage you to review their policies independently.</div>
        <div className="privacy-content-body text-[16px] font-normal text-[#453F3D]">We may update this Privacy Policy as our practices or legal requirements evolve. We recommend checking this page periodically for any changes.</div>
      </div>

      <Footer />
    </main>
  );
}