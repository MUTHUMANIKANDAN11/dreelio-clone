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
    <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden">
      <Header />

      <HeroSection />

      <div className="bg-[linear-gradient(to_bottom,_white_20%,_#F4F1EE_50%,_#C6DCF4_80%)] z-1000">
        <TrustedBrands className="h-[300px]" titleClassName="mt-30" />

        <div className="hero3 w-[100vw] h-[100%] flex flex-col items-center justify-start scroll-mt-24">
          <div className="hero3-subhead text-[14px] font-bold mt-20 text-[#614A44]">SEAMLESS ACROSS DEVICES</div>
          <div className="hero3-head text-[48px] leading-[62px] font-semibold text-center w-[600px] mt-5">Work from anywhere, stay in sync</div>

          <Hero3Image />
        </div>

        <div id="features" className=""></div>
        <FeatureBox
          subhead="PROJECT MANAGEMENT"
          head="Keep every project moving forward"
          content={<><span className="font-semibold">Plan, assign, and deliver your work</span> - all in one place. With smart task tracking, deadlines, and real-time progress, you stay organized and clients stay confident.</>}
          features={[
            { icon: "./task.svg", text: "Tasks" },
            { icon: "./clock.svg", text: "Time tracking" },
            { icon: "./sheet.svg", text: "Timesheets" },
            { icon: "./docs.svg", text: "Reports" },
          ]}
          imageSrc="/images/hero4.png"
          reverse={false}
        />

        <FeatureBox
          subhead="FINANCIAL MANAGEMENT"
          head="Track income, get paid, stress less"
          content={<><span className="font-semibold">Create branded invoices</span>, log expenses, and keep tabs on your earnings. Whether you bill hourly or per project, everything’s automated and tax-friendly.</>}
          features={[
            { icon: "./invoice.svg", text: "Invoicing" },
            { icon: "./budget.svg", text: "Budgets" },
            { icon: "./forecasting.svg", text: "Forecasting" },
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
          <div className="hero8-head text-[46px] w-[390px] font-semibold text-center">Simple plans</div>
          <div className="hero8-head text-[46px] w-[390px] font-semibold text-center">for serious work</div>
          <div className="hero8-content flex items-end justify-center gap-5 mt-10">
            <PricingCard
              title="Dreelio Basic"
              price="Free"
              description="For solo use with light needs."
              features={["Unlimited projects", "Unlimited clients", "Time tracking", "CRM", "iOS & Android apps"]}
              buttonText="Try Freelio free"
              isPremium={false}
            />
            <PricingCard
              title="Dreelio Premium"
              price="$189/mo"
              description="For pro use with light needs."
              features={["Everything in Basic", "Invoices & payments", "Expense tracking", "Income tracking", "Scheduling"]}
              buttonText="Get started"
              isPremium={true}
              topContent={
                <div className="buttons flex justify-between rounded-full p-1.5 bg-[#F2EFEC]">
                  <button className="text-[14px] text-black bg-white font-semibold rounded-full px-8 py-2 cursor-pointer mr-2">Annually</button>
                  <button className="text-[14px] px-8 py-2 rounded-full font-semibold font-medium cursor-pointer">Monthly</button>
                </div>
              }
            />
            <PricingCard
              title="Dreelio Enterprise"
              price="Flexible"
              description="For team use with light needs."
              features={["Everything in Premium", "Custom data import", "Advanced", "Hubspot", "Timesheets"]}
              buttonText="Contact sales"
              isPremium={false}
            />
          </div>
        </div>

        <TrustedBrands className="h-[100px] mt-15" titleClassName="text-[#757170]" />

        <div className="hero9 w-[100vw] h-[1150px] flex flex-col items-center justify-start mt-20">
          <div className="hero9-head text-[14px] font-semibold text-[#757170]">BLOG</div>
          <div className="hero9-head text-[46px] w-[470px] font-semibold text-center">Ideas to level-up your freelance game</div>

          <SingleBlog />

          <BlogList excludeMainBlog={true} />
        </div>

        <Community />

        <Footer />
      </div>
    </main>
  );
}