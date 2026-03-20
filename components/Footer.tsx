import React from 'react';

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({  }) => {
    return (
        <div className="footer w-[100vw] h-[750px] flex flex-col items-center justify-start mt-40 relative">
          <div className="footer-head text-[46px] w-[470px] font-semibold text-center">Ready to get started</div>
          <div className="footer-subhead text-[18px] text-[#453F3D] mt-3">Download Dreelio for free. No credit card required.</div>
          <div className="footer-btn flex items-center gap-5 mt-10">
            <button className="card-btn w-[100%] h-[50px] bg-black rounded-full px-5 text-white text-[16px] font-semibold">Try Freelio free</button>
          </div>

          <img src="./images/cloud1.png" className="w-[400px] h-[250px] bg-fit absolute top-10 left-[-200px]" alt="" />
          <img src="./images/cloud2.png" className="w-[400px] h-[250px] bg-fit absolute top-10 right-[-200px]" alt="" />

          <div className="foot-content w-[970px] flex flex-col items-center justify-start mt-30 bg-white/20 rounded-3xl">
            <div className="footer-content w-[900px] h-[250px] flex justify-between mt-10 border-b border-black/30">
              <div className="footer-content-left flex flex-col gap-5">
                <div className="footer-content-left-head flex items-center gap-2">
                  <img src="./icon1.svg" className="h-[30px] w-[30px] object-cover rounded-2xl" alt="" />
                  <div className="footer-content-left-content-head text-[20px] font-semibold">Dreelio</div>
                </div>
                <div className="footer-content-left-content flex flex-col">
                  <div className="footer-content-left-content-body text-[15px] text-[#453F3D] w-[250px]">Your favourite business management software. Built for early startup founders.</div>
                  <div className="follow-icons flex mt-3 gap-2">
                    <img src="./images/linkedin.png" className="h-[40px] w-[40px] bg-black object-cover rounded-full p-2" alt="" />
                    <img src="./images/x-logo.png" className="h-[40px] w-[40px] bg-black object-cover rounded-full p-2" alt="" />
                  </div>
                </div>
              </div>
              <div className="footer-bottom-right flex gap-20">
                <div className="right-left">
                  <div className="text-[14px] font-semibold">PAGES</div>
                  <div className="text-[#5F6469] flex flex-col gap-4 mt-4">
                    <div className="text-[14px]">Home</div>
                    <div className="text-[14px]">Features</div>
                    <div className="text-[14px]">Pricing</div>
                    <div className="text-[14px]">Blog</div>
                  </div>
                </div>
                <div className="right-right">
                  <div className="text-[14px] font-semibold">INFORMATION</div>
                  <div className="text-[#5F6469] flex flex-col gap-4 mt-4">
                    <div className="text-[14px]">Contact</div>
                    <div className="text-[14px]">Privacy</div>
                    <div className="text-[14px]">Terms of use</div>
                    <div className="text-[14px]">404</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-footer w-[900px] flex justify-between items-center h-[70px] font-[#585556]">
              <div className="footer-left text-[14px] font-[#585556]">© 2026 Dreelio. Created by <span className="font-semibold font-[#1A1615]">Leon Chike</span></div>
              <div className="footer-right text-[14px] font-[#585556]">Built in <span className="font-semibold font-[#1A1615]">Next.js</span></div>
            </div>
          </div>
        </div>
    );
};