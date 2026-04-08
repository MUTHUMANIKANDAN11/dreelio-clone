import { CommunityCard } from './CommunityCard';

export default function Community() {
    return (
        <div className="hero10 w-[100vw] h-[500px] flex flex-col items-center justify-start mt-50">
          <div className="hero10-subhead text-[14px] font-semibold text-[#757170]">COMMUNITY</div>
          <div className="hero10-head text-[46px] w-[470px] font-semibold text-center">Stay in the loop</div>

          <div className="hero10-content w-[100vw] flex items-center justify-center gap-5 mt-10">
            <CommunityCard
              platform="X/Twitter"
              logoSrc="./images/x-logo.png"
              followers="15.2K FOLLOWERS"
              description="Stay updated on new features and discover how others are using AstraDial."
              buttonText="Floow us"
            />
            <CommunityCard
              platform="YouTube"
              logoSrc="./images/youtube-logo.png"
              followers="32K SUBSCRIBERS"
              description="Tips, tutorials, and in-depth feature guides to inspire and enhance your AstraDial workflow."
              buttonText="Subscribe"
            />
          </div>
        </div>
    )
}