"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero6Section = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const contentY = useTransform(scrollYProgress, [0, 0.7], [110, 10]);

    const { scrollYProgress: slideProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xForward = useTransform(slideProgress, [0, 1], ["0%", "-5%"]);
    const xBackward = useTransform(slideProgress, [0, 1], ["-5%", "0%"]);

    const toolsForward = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const toolsBackward = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    const renderToolsList = (tools: number[]) => (
        <>
            {tools.map((t, i) => <img key={`a-${i}`} src={`./tool${t}.svg`} alt="" className="h-[72px] w-auto" />)}
            {tools.map((t, i) => <img key={`b-${i}`} src={`./tool${t}.svg`} alt="" className="h-[72px] w-auto" />)}
            {tools.map((t, i) => <img key={`c-${i}`} src={`./tool${t}.svg`} alt="" className="h-[72px] w-auto" />)}
            {tools.map((t, i) => <img key={`d-${i}`} src={`./tool${t}.svg`} alt="" className="h-[72px] w-auto" />)}
        </>
    );

    return (
        <div ref={containerRef} className="hero6 w-[100vw] h-[100%] flex flex-col items-center justify-center mt-30">
          <div className="hero6-subhead text-[14px] font-bold text-[#614A44]">FEATURES</div>
          <div className="hero6-head text-[48px] leading-[62px] w-[700px] font-semibold mt-5 text-center">Build for freelancers, powered by simplicity</div>

          <div className="hero6-content flex items-center justify-center mt-10">
            <div className="hero6-content-left w-[500px] bg-[#F0EAE5] h-[510px] rounded-3xl p-10 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="hero6-content-left-head text-[24px] font-semibold">Smart, flexible, and built around your business workflow</div>
                <motion.div className="hero6-content-left-content mt-10 w-full overflow-hidden" style={{ y: contentY }}>
                  <img src="./hero6.svg" className="h-[170px]" alt="" />
                </motion.div>
              </div>
              <div className="hero6-content-left-footer text-[16px] text-[#453F3D] mt-20">
                <span className="font-semibold">Personalize every detail</span>
                , From branding and interface layout to colors and menus, so Dreelio feels like an extension of your brand.
              </div>
            </div>

            <div className="hero6-content-right ml-5 w-[500px] bg-[#F0EAE5] h-[510px] rounded-3xl p-10 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="hero6-content-right-head text-[24px] font-semibold">Integrates seamlessly with the tools you already use</div>
                <div className='h-[100%]' style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                 }}>
                  <motion.div className="hero6-content-right-content mt-10 w-full overflow-hidden" style={{ y: contentY }}>
                    <motion.div className="hero6-right-top flex gap-2 w-max" style={{ x: xForward }}>
                      {renderToolsList(toolsForward)}
                    </motion.div>
                    <motion.div className="hero6-right-bottom flex gap-2 w-max mt-5" style={{ x: xBackward }}>
                      {renderToolsList(toolsBackward)}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              <div className="hero6-content-right-footer text-[16px] text-[#453F3D] mt-20">
                <span className="font-semibold">Seamless integrations.</span>
                Plug Dreelio into the tools you love. Set up automations, sync your data, and make your systems work smarter together.
              </div>
            </div>
          </div>
          <div className="hero6-footer flex items-center justify-between mt-7 gap-7">
            <div className="footer-card w-[320px] h-[100%] bg-[#F0EAE5] rounded-3xl p-7">
              <div className="card-top">
                <img src="./collaborate.svg" className="bg-white h-12 rounded-full p-3" alt="" />
              </div>
              <div className="card-head text-[18px] font-semibold mt-10">Collaborate in realtime</div>
              <div className="card-content text-[16px] text-[#453F3D] mt-5">Keep every conversation in sync use comments, messages, and project chats to stay on the same page.</div>
            </div>
            <div className="footer-card w-[320px] h-[100%] bg-[#F0EAE5] rounded-3xl p-7">
              <div className="card-top">
                <img src="./language.svg" className="bg-white h-12 rounded-full p-3" alt="" />
              </div>
              <div className="card-head text-[18px] font-semibold mt-10">Speaks your language</div>
              <div className="card-content text-[16px] text-[#453F3D] mt-5">Set your language, currency, time, and date preferences for a seamless experience that feels truly local.</div>
            </div>
            <div className="footer-card w-[320px] h-[100%] bg-[#F0EAE5] rounded-3xl p-7">
              <div className="card-top">
                <img src="./view.svg" className="bg-white h-12 rounded-full p-3" alt="" />
              </div>
              <div className="card-head text-[18px] font-semibold mt-10">View things your way</div>
              <div className="card-content text-[16px] text-[#453F3D] mt-5">Easily toggle between various views, including Kanban, cards, list, table, timeline, table, and calendar.</div>
            </div>
          </div>
        </div>
    );
};
