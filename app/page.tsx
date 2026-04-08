import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TrustedBrands } from '../components/TrustedBrands';
import { FeatureBox } from '../components/FeatureBox';
import Testimonial from '@/components/Testimonial';
import { PricingCard } from '../components/PricingCard';
import SingleBlog from '@/components/SingleBlog';
import BlogList from '@/components/BlogList';
import Community from '@/components/Community';
import { HeroSection } from '../components/HeroSection';
import { Hero3Image } from '../components/Hero3Image';
import { Hero6Section } from '../components/Hero6Section';

export default function Home() {
  return (
    <main className="main flex items-center flex-col overflow-x-hidden overflow-y-hidden relative">
      <Header />

      <HeroSection />

      <div className="bg-[linear-gradient(to_bottom,_white_20%,_#F4F1EE_50%,_#C6DCF4_80%)] z-1000 flex flex-col justify-center items-center">
        <TrustedBrands className="h-[300px]" titleClassName="mt-30" />

        <div className="hero3 w-[100vw] h-[100%] flex flex-col items-center justify-start scroll-mt-24">
          <div className="hero3-subhead text-[14px] font-bold mt-20 text-[#614A44]">TICKETS & QUEUES</div>
          <div className="hero3-head text-[48px] leading-[62px] font-semibold text-center w-[600px] mt-5">No call slips through, no customer left waiting</div>

          <Hero3Image />
        </div>

        <div id="features" className=""></div>
        <FeatureBox
          subhead="TEAM MANAGEMENT"
          head="Never miss what happened on a call."
          content={<><span className="font-semibold">Full call history, live call monitoring, and direction filters</span> Track who called, when, how long it lasted, which direction it went (inbound, outbound, or internal) and the status of every call, all without digging through logs.</>}
          features={[
            { icon: "./task.svg", text: "Call History" },
            { icon: "./clock.svg", text: "Live Calls" },
            { icon: "./sheet.svg", text: "Directions" },
            { icon: "./docs.svg", text: "Recordings" },
          ]}
          imageSrc="/images/hero4.png"
          reverse={false}
        />

        <FeatureBox
          subhead="WORKFLOWS"
          head="Set it once, let it run"
          content={<><span className="font-semibold">Build a calls and message flow in exactly the way your operation works.</span> Set the order, timing, and trigger - whether it's a guest check-in call, a WhatsApp reminder, or a checkout nudge. Once it's configured, it just runs.</>}
          features={[
            { icon: "./invoice.svg", text: "Cloud SIP" },
            { icon: "./budget.svg", text: "Call Logs" },
            { icon: "./forecasting.svg", text: "Reminder Calls" },
            { icon: "./integration.svg", text: "Integrations" },
          ]}
          imageSrc="/images/hero5.png"
          reverse={true}
        />

        <div id="benefits" className=""></div>

        <Hero6Section />

        <Testimonial />

        <div id="pricing" className=""></div>
        <div className="hero8 flex flex-col items-center justify-center mt-40">
          <div className="hero8-sunhead text-[16px] font-semibold text-[#757170]">PRICING</div>
          <div className="hero8-head-one text-[46px] w-[390px] font-semibold text-center">Simple plans</div>
          <div className="hero8-head-two text-[46px] w-[390px] font-semibold text-center">for serious work</div>

          <div className="hero8-content flex items-end justify-center gap-5 mt-10">
            <PricingCard
              title="AstraDial Basic"
              price="₹7,000/mo"
              description=""
              features={["Unlimited channels", "Unlimited users", "Feature Requests", "CRM"]}
              buttonText="Try AstraDial free"
              isPremium={false}
            />
            <PricingCard
              title="AstraDial Support"
              price="₹20,000/mo"
              description=""
              features={["Everything in Trial", "Private Cloud", "Call Recordings", "WhatsApp Integration", "10 Channels", "Unlimited users"]}
              buttonText="Get started"
              isPremium={true}
              hasToggle={false}
            />
            <PricingCard
              title="Astradial Enterprise"
              price="Flexible"
              description="For large team use."
              features={["Everything in support", "Custom data import", "Advanced"]}
              buttonText="Contact sales"
              isPremium={false}
            />
          </div>
        </div>

        <TrustedBrands className="h-[100px] mt-15" titleClassName="text-[#757170]" />

        <div className="hero9 w-[100vw] h-[1150px] flex flex-col items-center justify-start mt-20">
          <div className="hero9-subhead text-[14px] font-semibold text-[#757170]">BLOG</div>
          <div className="hero9-head text-[46px] w-[470px] font-semibold text-center">Ideas to level-up your customer experience</div>

          <SingleBlog />

          <BlogList excludeMainBlog={true} />
        </div>

        <Community />

        <Footer />
      </div>
    </main>
  );
}