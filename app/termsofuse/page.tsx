import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CloudImages } from "@/components/CloudImages";

export default function Home() {
  return (
    <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden bg-[linear-gradient(to_bottom,_white_30%,_#F4F1EE_50%,_#C4DCF4_100%)] relative">
      <Header />

      <CloudImages />

      <div className="terms-hero w-[100vw] h-[100%] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
        <div className="terms-hero-body w-[940px] flex flex-col items-center mt-35">
          <div className="terms-hero-head text-[64px] leading-[88px] font-semibold text-center">Terms of Use</div>
          <div className="terms-hero-content text-[18px] font-normal text-center text-slate-600 w-[400px] mt-4 mb-15 z-10">Last updated: April 2026</div>
        </div>
      </div>

      <div className="terms-content content w-[750px] h-[100%] flex flex-col gap-4 p-20 z-10">
        <div className="terms-content-body text-[16px] font-normal text-[#453F3D]">Welcome to Astradial. By accessing or using our website and services at astradial.com, you agree to be bound by the following terms and conditions. Please read them carefully before proceeding.</div>
        <div className="terms-content-body text-[16px] font-normal text-[#453F3D]">By accessing our website, you confirm that you are at least 18 years old or have the legal authority to enter into these terms. You agree to use our website and services solely for lawful purposes and in compliance with all applicable laws and regulations.</div>
        <div className="terms-content-body text-[16px] font-normal text-[#453F3D]">All content on this website — including text, images, logos, graphics, and designs — is the property of Astradial or its licensors and is protected under applicable copyright and intellectual property laws. You may not reproduce, distribute, or otherwise use any content without prior written consent from Astradial.</div>
        <div className="terms-content-body text-[16px] font-normal text-[#453F3D]">If you submit content to us — such as feedback, reviews, or testimonials — you grant Astradial a non-exclusive, royalty-free, and irrevocable licence to use, modify, and display that content for promotional or operational purposes.</div>
        <div className="terms-content-body text-[16px] font-normal text-[#453F3D]">Our website and services are provided on an "as is" basis without warranties of any kind. While we strive to keep information accurate and up to date, Astradial does not warrant the accuracy, reliability, or completeness of any content on this site.</div>
        <div className="terms-content-body text-[16px] font-normal text-[#453F3D]">Astradial is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services, including but not limited to loss of data, revenue, or business profits.</div>
        <div className="terms-content-body text-[16px] font-normal text-[#453F3D]">Our website may contain links to external websites for your convenience. Astradial does not endorse or assume responsibility for the content or practices of any third-party sites.</div>
        <div className="terms-content-body text-[16px] font-normal text-[#453F3D]">We reserve the right to suspend or terminate your access to our website at any time, without prior notice, if you breach these terms or engage in conduct that we determine to be harmful to Astradial or its users.</div>
        <div className="terms-content-body text-[16px] font-normal text-[#453F3D]">We may update these terms periodically to reflect changes in our practices or legal requirements. Your continued use of the website following any updates constitutes your acceptance of the revised terms.</div>
      </div>

      <Footer />
    </main>
  );
}