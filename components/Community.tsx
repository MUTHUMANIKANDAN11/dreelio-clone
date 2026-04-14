import { CommunityCard } from './CommunityCard';

export default function Community() {
  return (
    <div className="hero10 w-[100vw] h-[500px] flex flex-col items-center justify-start mt-50">
      <div className="hero10-subhead text-[14px] font-semibold text-[#757170]">CONNECT WITH US</div>
      <div className="hero10-head text-[46px] w-[470px] font-semibold text-center">We're just a message away</div>

      <div className="hero10-content w-[100vw] flex items-center justify-center gap-5 mt-10">
        <CommunityCard
          platform="WhatsApp"
          logoSrc="./tools/tool7.svg"
          followers="15.2K FOLLOWERS"
          description="Have a question or want to see a quick demo? Drop us a message on WhatsApp and we'll get back to you fast."
          buttonText="Message us"
        />
        <CommunityCard
          platform="Call us"
          logoSrc="./tools/tool3.svg"
          followers="32K SUBSCRIBERS"
          description="Prefer to just talk? Call us directly and our team will walk you through everything you need to know."
          buttonText="Call now"
        />
      </div>
    </div>
  )
}