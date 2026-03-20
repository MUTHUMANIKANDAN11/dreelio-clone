import { TestimonialCard } from "./TestimonialCard";

export default function Testimonial() {
    return (
<div className="hero7 flex flex-col items-center justify-center mt-40">
          <div className="hero7-head text-[50px] w-[720px] font-semibold text-center">"Dreelio is by far the best agency tool I have ever used"</div>
          <div className="hero7-content flex flex-col items-center justify-center mt-10">
            <div className="user-img flex">
              <img src="./images/user1.png" className="h-[60px] w-[60px] object-cover rounded-full" alt="" />
            </div>
            <div className="user-content flex flex-col items-center justify-center mt-5">
              <div className="user-name text-[18px] font-semibold">Martha punla</div>
              <div className="user-role text-[14px] text-[#757170]">VP Marketing, Meta</div>
            </div>
          </div>
          <div className="hero7-footer mt-10 flex gap-5">
            <TestimonialCard
              content="&quot;As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.&quot;"
              imageSrc="./images/user2.png"
              userName="Leah Daniel"
              userRole="Design Ops lead, teamwork"
            />
            <TestimonialCard
              content="&quot;As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.&quot;"
              imageSrc="./images/user3.png"
              userName="Sergio Walker"
              userRole="Agency Owner"
            />
            <TestimonialCard
              content="&quot;We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.&quot;"
              imageSrc="./images/user4.png"
              userName="Jane Jay Jay"
              userRole="Project Manager, Google"
            />
          </div>
        </div>
    )
}