import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TrustedBrands } from '../components/TrustedBrands';
import { FeatureBox } from '../components/FeatureBox';
import Testimonial from '@/components/Testimonial';
import { PricingCard } from '../components/PricingCard';
import SingleBlog from '@/components/SingleBlog';
import BlogList from '@/components/BlogList';
import Community from '@/components/Community';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden">
      <Header />

      <img src="./images/cloud1.png" className="w-[400px] h-[250px] bg-fit absolute top-40 left-[-200px]" alt="" />
      <img src="./images/cloud2.png" className="w-[400px] h-[250px] bg-fit absolute top-40 right-[-200px]" alt="" />

      <div className="hero w-[100vw] h-[110vh] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
        <div className="h-[100vh] w-[940px] flex flex-col items-center mt-35">
          <div className="hero-head text-[68px] leading-[88px] font-semibold text-center">Run your freelance business like a pro</div>
          <div className="hero-content text-[20px] font-normal text-center text-slate-600 w-[75%] mt-4">All-in-one platform for managing cliens, projects, and payments without the chaos. From first contract to final invoice, we've got your back.</div>
          <div className="hero-button mt-10">
            <Link href={'/contact'}>
              <button className="text-[16px] bg-black text-white font-semibold rounded-full px-6 py-3 cursor-pointer mr-2">
                Try Dreelio free
              </button>
            </Link>
            <Link href={'/#features'}>
              <button className="text-[16px] px-6 py-3 rounded-full bg-gray-100/20 font-medium cursor-pointer">
                See features
              </button>
            </Link>
          </div>
          <div className="hero-img mt-10">
            <img src="./images/hero.png" className="rounded-2xl" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(to_bottom,_white_20%,_#F4F1EE_50%,_#C6DCF4_80%)]">
        <TrustedBrands className="h-[300px]" titleClassName="mt-30" />

        <div className="hero3 w-[100vw] h-[100%] flex flex-col items-center justify-start scroll-mt-24">
          <div className="hero3-subhead text-[14px] font-bold mt-20 text-[#614A44]">SEAMLESS ACROSS DEVICES</div>
          <div className="hero3-head text-[48px] leading-[62px] font-semibold text-center w-[600px] mt-5">Work from anywhere, stay in sync</div>

          <div className="hero3-images mt-10 w-[55vw] h-[650px] rounded-4xl overflow-hidden relative">
            <img src="./images/device1.png" className="w-[100%] h-[100%] object-cover" alt="" />
            <div className="buttons absolute bottom-10 left-[50%] translate-x-[-50%] bg-gray-100/20 backdrop-blur-sm border border-white/30 rounded-full p-1.5">
              <button className="text-[16px] bg-black text-white font-semibold rounded-full px-6 py-3 cursor-pointer mr-2">
                Mobile App
              </button>
              <button className="text-[16px] px-6 py-3 rounded-full font-semibold text-white bg-gray-100/20 backdrop-blur-sm border border-white/30 font-medium cursor-pointer">
                Web App
              </button>
            </div>
          </div>
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

        <div className="hero6 w-[100vw] h-[100%] flex flex-col items-center justify-center mt-30">
          <div className="hero6-subhead text-[14px] font-bold text-[#614A44]">FEATURES</div>
          <div className="hero6-head text-[48px] leading-[62px] w-[700px] font-semibold mt-5 text-center">Build for freelancers, powered by simplicity</div>

          <div className="hero6-content flex items-center justify-center mt-10">
            <div className="hero6-content-left w-[500px] bg-[#F0EAE5] h-[510px] rounded-3xl p-10">
              <div className="hero6-content-left-head text-[24px] font-semibold">Smart, flexible, and built around your business workflow</div>
              <div className="hero6-content-left-content mt-10">
                <img src="./hero6.svg" className="h-[170px]" alt="" />
              </div>
              <div className="hero6-content-left-footer text-[16px] text-[#453F3D] mt-20">
                <span className="font-semibold">Personalize every detail</span>
                , From branding and interface layout to colors and menus, so Dreelio feels like an extension of your brand.
              </div>
            </div>

            <div className="hero6-content-right ml-5 w-[500px] bg-[#F0EAE5] h-[510px] rounded-3xl p-10">
              <div className="hero6-content-right-head text-[24px] font-semibold">Integrates seamlessly with the tools you already use</div>
              <div className="hero6-content-right-content mt-10">
                <div className="hero6-right-top flex gap-2 overflow-x-hidden">
                  <img src="./tool1.svg" alt="" /><img src="./tool2.svg" alt="" /><img src="./tool3.svg" alt="" /><img src="./tool4.svg" alt="" /><img src="./tool5.svg" alt="" /><img src="./tool6.svg" alt="" /><img src="./tool7.svg" alt="" /><img src="./tool8.svg" alt="" /><img src="./tool9.svg" alt="" />
                </div>
                <div className="hero6-right-bottom flex gap-2 overflow-x-hidden mt-5">
                  <img src="./tool9.svg" alt="" /><img src="./tool8.svg" alt="" /><img src="./tool7.svg" alt="" /><img src="./tool6.svg" alt="" /><img src="./tool5.svg" alt="" /><img src="./tool4.svg" alt="" /><img src="./tool3.svg" alt="" /><img src="./tool2.svg" alt="" /><img src="./tool1.svg" alt="" />
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