export default function Home() {
  return (
    <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-white via-[#9FC2E6] to-[#ECDFD1]">
      <div className="header flex justify-between items-center w-[940px] fixed top-[20px] z-10 bg-white/30 backdrop-blur-md border-b border-gray-200">
        <div className="header-left flex text-[18px] leading-[21px] font-semibold cursor-pointer">
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" preserveAspectRatio="none" width="100%" height="100%"><use href="/icon1.svg"></use></svg>
          <div className="">Dreelio</div>
        </div>
        <div className="header-middle w-[40%] text-[14px] flex justify-between items-center h-[100%] text-slate-800">
          <a href="" className="header-nav">Features</a>
          <a href="" className="header-nav">Benefits</a>
          <a href="" className="header-nav">Pricing</a>
          <a href="" className="header-nav">Blog</a>
          <a href="" className="header-nav">Contact Us</a>
        </div>
        <div className="header-right">
          <button className="text-[14px] bg-black text-white font-semibold leading-[19px] rounded-full px-6 py-4 cursor-pointer">Try Dreelio free</button>
        </div>
      </div>

      <img src="./images/cloud1.png" className="w-[400px] h-[250px] bg-fit absolute top-40 left-[-200px]" alt="" />
      <img src="./images/cloud2.png" className="w-[400px] h-[250px] bg-fit absolute top-40 right-[-200px]" alt="" />

      <div className="hero w-[100vw] h-[110vh] flex items-center flex-col bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1]">
        <div className="h-[100vh] w-[940px] flex flex-col items-center mt-35">
          <div className="hero-head text-[68px] leading-[88px] font-semibold text-center">Run your freelance business like a pro</div>
          <div className="hero-content text-[20px] font-normal text-center text-slate-600 w-[75%] mt-4">All-in-one platform for managing cliens, projects, and payments without the chaos. From first contract to final invoice, we've got your back.</div>
          <div className="hero-button mt-10">
            <button className="
                text-[16px]
                bg-black text-white font-semibold rounded-full px-6 py-3 cursor-pointer 
                mr-2">
              Try Dreelio free
            </button>
            <button className="text-[16px] px-6 py-3 rounded-full
                bg-gray-100/20
                font-medium cursor-pointer
                ">
              See features
            </button>
          </div>
          <div className="hero-img mt-10">
            <img src="./images/hero.png" className="rounded-2xl" alt="" />
          </div>
        </div>
      </div>

      <div className="hero2 w-[100vw] h-[300px] bg-white flex flex-col items-center justify-start">
        <div className="hero2-head text-[14px] font-400 mt-30 text-[#757170]">Trusted by 7,000+ top startsups, freelancers and studios</div>
        <div className="hero2-content w-[750px] mt-7 flex items-center justify-between">
          <img src="./brand1.svg" alt="" />
          <img src="./brand2.svg" alt="" />
          <img src="./brand3.svg" alt="" />
          <img src="./brand4.svg" alt="" />
          <img src="./brand5.svg" alt="" />
        </div>
      </div>

      <div className="hero3 w-[100vw] h-[100%] bg-white flex flex-col items-center justify-start">
        <div className="hero3-subhead text-[14px] font-bold mt-20 text-[#614A44]">SEAMLESS ACROSS DEVICES</div>
        <div className="hero3-head text-[48px] leading-[62px] font-semibold text-center w-[600px] mt-5">Work from anywhere, stay in sync</div>

        <div className="hero3-images mt-10 w-[55vw] h-[650px] rounded-4xl overflow-hidden relative">
          <img src="./images/device1.png" className="w-[100%] h-[100%] object-cover" alt="" />
          <div className="buttons absolute bottom-10 left-[50%] translate-x-[-50%] bg-gray-100/20
               backdrop-blur-sm
               border border-white/30 rounded-full p-1.5">
            <button className="
                text-[16px]
                bg-black text-white font-semibold rounded-full px-6 py-3 cursor-pointer 
                mr-2">
              Mobile App
            </button>
            <button className="text-[16px] px-6 py-3 rounded-full
                font-semibold
                text-white
                bg-gray-100/20
                backdrop-blur-sm
                border border-white/30
                font-medium cursor-pointer
                ">
              Web App
            </button>
          </div>
        </div>
      </div>

      <div className="hero4 w-[100vw] h-[100%] flex items-center justify-center mt-30">
        <div className="hero4-left bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1] rounded-3xl">
          <div className="hero4-imgbox h-[650px] w-[100%] p-10">
            <img src="/images/hero4.png" className="h-[100%] w-[100%]" alt="" />
          </div>
        </div>
        <div className="hero4-right h-[650px] w-[370px] ml-15 flex flex-col justify-between">
          <div className="hero4-top">
            <div className="hero4-subhead text-[14px] font-bold text-[#614A44]">PROJECT MANAGEMENT</div>
            <div className="hero4-head text-[48px] leading-[62px] font-semibold mt-5">Keep every project moving forward</div>
            <div className="hero4-content text-[16px] leading-[26px] mt-5 text-[#453F3D]"> <span className="font-semibold">Plan, assign, and deliver your work</span> - all in one place. With smart task tracking, deadlines, and real-time progress, you stay organized and clients stay confident.</div>

            <button className="text-[16px] px-6 py-3 rounded-full mt-7
                font-semibold
                text-white
                bg-black
                font-medium cursor-pointer
                ">
              Try Dreelio free
            </button>
          </div>

          <div className="hero4-footer grid grid-cols-2 gap-4">
            <button className="text-[15px] py-2 rounded-full
              border border-gray-200
              text-[#453F3D]
              font-medium
              flex
              justify-center
              items-center
              w-[170px]
              ">
              <img src="./task.svg" className="mr-2" alt="" />
              Tasks
            </button>
            <button className="text-[15px] py-2 rounded-full
              border border-gray-200
              text-[#453F3D]
              font-medium
              flex
              justify-center
              items-center
              w-[170px]
              ">
              <img src="./clock.svg" className="mr-2" alt="" />
              Time tracking
            </button>
            <button className="text-[15px] py-2 rounded-full
              border border-gray-200
              text-[#453F3D]
              font-medium
              flex
              justify-center
              items-center
              w-[170px]
              ">
              <img src="./sheet.svg" className="mr-2" alt="" />
              Timesheets
            </button>
            <button className="text-[15px] py-2 rounded-full
              border border-gray-200
              text-[#453F3D]
              font-medium
              flex
              justify-center
              items-center
              w-[170px]
              ">
              <img src="./docs.svg" className="mr-2" alt="" />
              Reports
            </button>
          </div>
        </div>
      </div>

      <div className="hero5 w-[100vw] h-[100%] flex items-center justify-center mt-30">
        <div className="hero5-right h-[650px] w-[370px] mr-15 flex flex-col justify-between">
          <div className="hero5-top">
            <div className="hero5-subhead text-[14px] font-bold text-[#614A44]">FINANCIAL MANAGEMENT</div>
            <div className="hero5-head text-[48px] leading-[62px] font-semibold mt-5">Track income, get paid, stress less</div>
            <div className="hero5-content text-[16px] leading-[26px] mt-5 text-[#453F3D]"> <span className="font-semibold">Create branded invoices</span>log expenses, and keep tabs on your earnings. Whether you bill hourly or per project, everything’s automated and tax-friendly.</div>

            <button className="text-[16px] px-6 py-3 rounded-full mt-7
                font-semibold
                text-white
                bg-black
                font-medium cursor-pointer
                ">
              Try Dreelio free
            </button>
          </div>

          <div className="hero4-footer grid grid-cols-2 gap-4">
            <button className="text-[15px] py-2 rounded-full
              border border-gray-200
              text-[#453F3D]
              font-medium
              flex
              justify-center
              items-center
              w-[170px]
              ">
              <img src="./invoice.svg" className="mr-2" alt="" />
              Invoicing
            </button>
            <button className="text-[15px] py-2 rounded-full
              border border-gray-200
              text-[#453F3D]
              font-medium
              flex
              justify-center
              items-center
              w-[170px]
              ">
              <img src="./budget.svg" className="mr-2" alt="" />
              Budgets
            </button>
            <button className="text-[15px] py-2 rounded-full
              border border-gray-200
              text-[#453F3D]
              font-medium
              flex
              justify-center
              items-center
              w-[170px]
              ">
              <img src="./forecasting.svg" className="mr-2" alt="" />
              Forecasting
            </button>
            <button className="text-[15px] py-2 rounded-full
              border border-gray-200
              text-[#453F3D]
              font-medium
              flex
              justify-center
              items-center
              w-[170px]
              ">
              <img src="./integration.svg" className="mr-2" alt="" />
              Integrations
            </button>
          </div>
        </div>
        <div className="hero5-left bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1] rounded-3xl">
          <div className="hero5-imgbox h-[650px] w-[100%] p-10">
            <img src="/images/hero5.png" className="h-[100%] w-[100%]" alt="" />
          </div>
        </div>
      </div>

      <div className="hero6 w-[100vw] h-[100%] flex flex-col items-center justify-center mt-30">
        <div className="hero6-subhead text-[14px] font-bold text-[#614A44]">FEATURES</div>
        <div className="hero6-head text-[48px] leading-[62px] w-[700px] font-semibold mt-5 text-center">Build for freelancers, powered by simplicity</div>

        <div className="hero6-content flex items-center justify-center mt-10">
          <div className="hero6-content-left w-[500px] bg-[#F0EAE5] h-[510px] rounded-3xl p-10">
            <div className="hero6-content-left-head text-[24px] font-semibold">Smart, flexible, and built around your business workflow</div>
            <div className="hero6-content-left-content mt-10">
              <img src="./hero6.svg" className="h-[170px]" alt="" />
            </div>
            <div className="hero6-content-left-footer text-[16px] mt-5 text-[#453F3D] mt-20">
              <span className="font-semibold">Personalize every detail</span>
              , From branding and interface layout to colors and menus, so Dreelio feels like an extension of your brand.
            </div>
          </div>

          <div className="hero6-content-right ml-5 w-[500px] bg-[#F0EAE5] h-[510px] rounded-3xl p-10">
            <div className="hero6-content-right-head text-[24px] font-semibold">Integrates seamlessly with the tools you already use</div>
            <div className="hero6-content-right-content mt-10">
              <div className="hero6-right-top flex gap-2 overflow-x-hidden">
                <img src="./tool1.svg" alt="" />
                <img src="./tool2.svg" alt="" />
                <img src="./tool3.svg" alt="" />
                <img src="./tool4.svg" alt="" />
                <img src="./tool5.svg" alt="" />
                <img src="./tool6.svg" alt="" />
                <img src="./tool7.svg" alt="" />
                <img src="./tool8.svg" alt="" />
                <img src="./tool9.svg" alt="" />
              </div>
              <div className="hero6-right-bottom flex gap-2 overflow-x-hidden mt-5">
                <img src="./tool9.svg" alt="" />
                <img src="./tool8.svg" alt="" />
                <img src="./tool7.svg" alt="" />
                <img src="./tool6.svg" alt="" />
                <img src="./tool5.svg" alt="" />
                <img src="./tool4.svg" alt="" />
                <img src="./tool3.svg" alt="" />
                <img src="./tool2.svg" alt="" />
                <img src="./tool1.svg" alt="" />
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
          <div className="user-card w-[345px] h-[100%] bg-white/70 rounded-3xl p-7">
            <div className="card-content text-[16px] text-[#453F3D]">"As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built."</div>
            <div className="card-footer flex items-center gap-5 mt-10">
              <div className="user-img">
                <img src="./images/user2.png" className="h-[50px] w-[50px] object-cover rounded-full" alt="" />
              </div>
              <div className="user-content flex flex-col items-start">
                <div className="user-name text-[16px] font-semibold">Leah Daniel</div>
                <div className="user-role text-[12px] text-[#757170]">Design Ops lead, teamwork</div>
              </div>
            </div>
          </div>
          <div className="user-card w-[345px] h-[100%] bg-white/70 rounded-3xl p-7">
            <div className="card-content text-[16px] text-[#453F3D]">""As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built."</div>
            <div className="card-footer flex items-center gap-5 mt-10">
              <div className="user-img">
                <img src="./images/user3.png" className="h-[50px] w-[50px] object-cover rounded-full" alt="" />
              </div>
              <div className="user-content flex flex-col items-start">
                <div className="user-name text-[16px] font-semibold">Sergio Walker</div>
                <div className="user-role text-[12px] text-[#757170]">Agency Owner</div>
              </div>
            </div>
          </div>
          <div className="user-card w-[345px] h-[100%] bg-white/70 rounded-3xl p-7">
            <div className="card-content text-[16px] text-[#453F3D]">"We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro."</div>
            <div className="card-footer flex items-center gap-5 mt-10">
              <div className="user-img">
                <img src="./images/user4.png" className="h-[50px] w-[50px] object-cover rounded-full" alt="" />
              </div>
              <div className="user-content flex flex-col items-start">
                <div className="user-name text-[16px] font-semibold">Jane Jay Jay</div>
                <div className="user-role text-[12px] text-[#757170]">Project Manager, Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero8 flex flex-col items-center justify-center mt-40">
        <div className="hero8-sunhead text-[16px] font-semibold text-[#757170]">PRICING</div>
        <div className="hero8-head text-[46px] w-[390px] font-semibold text-center">Simple plans</div>
        <div className="hero8-head text-[46px] w-[390px] font-semibold text-center">for serious work</div>
        <div className="hero8-content flex items-end justify-center gap-5 mt-10">
          <div className="hero8-price-card w-[320px] h-[100%] bg-white rounded-3xl p-7">
            <div className="card-subhead text-[16px] font-semibold text-[#524C4A]">Dreelio Basic</div>
            <div className="card-head text-[40px] font-semibold">Free</div>
            <div className="card-content text-[16px] text-[#453F3D] mt-5">For solo use with light needs.</div>
            <div className="card-list text-[16px] text-[#453F3D] mt-5">
              <ul>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Unlimited projects</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Unlimited clients</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Time tracking</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />CRM</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />iOS & Android apps</li>
              </ul>
            </div>
            <button className="card-btn w-[100%] h-[50px] bg-[#F4F1EE] rounded-full text-black text-[16px] font-semibold mt-10">Try Freelio free</button>
          </div>

          <div className="hero8-price-card flex flex-col w-[320px] h-[100%] bg-gradient-to-b from-[#9FC2E6] to-[#ECDFD1] border border-[#84B9EF] border-[5px] rounded-3xl p-7 ">
              <div className="buttons flex justify-between rounded-full p-1.5 bg-[#F2EFEC]">
                <button className="
                    text-[14px]
                    text-black
                    bg-white
                    font-semibold rounded-full px-8 py-2 cursor-pointer 
                    mr-2">
                  Annually
                </button>
                <button className="text-[14px] px-8 py-2 rounded-full
                    font-semibold
                    font-medium cursor-pointer
                  ">
                Monthly
              </button>
            </div>
            <div className="card-subhead text-[16px] font-semibold text-[#524C4A] mt-7">Dreelio Premium</div>
            <div className="card-head text-[40px] font-semibold">$189/mo</div>
            <div className="card-content text-[16px] text-[#453F3D] mt-5">For pro use with light needs.</div>
            <div className="card-list text-[16px] text-[#453F3D] mt-5">
              <ul>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Everything in Basic</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Invoices & payments</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Expense tracking</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Income tracking</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Scheduling</li>
              </ul>
            </div>
            <button className="card-btn w-[100%] h-[50px] bg-black rounded-full text-white text-[16px] font-semibold mt-10">Get started</button>
          </div>

          <div className="hero8-price-card w-[320px] h-[100%] bg-white rounded-3xl p-7">
            <div className="card-subhead text-[16px] font-semibold text-[#524C4A]">Dreelio Enterprise</div>
            <div className="card-head text-[40px] font-semibold">Flexible</div>
            <div className="card-content text-[16px] text-[#453F3D] mt-5">For team use with light needs.</div>
            <div className="card-list text-[16px] text-[#453F3D] mt-5">
              <ul>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Everything in Premium</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Custom data import</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Advanced</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Hubspot</li>
                <li className="flex items-center gap-2 mt-3"> <img src="./tick.svg" alt="" />Timesheets</li>
              </ul>
            </div>
            <button className="card-btn w-[100%] h-[50px] bg-[#F4F1EE] rounded-full text-black text-[16px] font-semibold mt-10">Contact sales</button>
          </div>
        </div>
      </div>

      <div className="hero2 w-[100vw] h-[100px] flex flex-col items-center justify-start mt-15">
        <div className="hero2-head text-[14px] font-400 text-[#757170]">Trusted by 7,000+ top startsups, freelancers and studios</div>
        <div className="hero2-content w-[750px] mt-7 flex items-center justify-between">
          <img src="./brand1.svg" alt="" />
          <img src="./brand2.svg" alt="" />
          <img src="./brand3.svg" alt="" />
          <img src="./brand4.svg" alt="" />
          <img src="./brand5.svg" alt="" />
        </div>
      </div>

      <div className="hero9 w-[100vw] h-[1150px] flex flex-col items-center justify-start mt-20">
        <div className="hero9-head text-[14px] font-semibold text-[#757170]">BLOG</div>
        <div className="hero9-head text-[46px] w-[470px] font-semibold text-center">Ideas to level-up your freelance game</div>

        <div className="hero9-content flex items-center justify-center mt-10">
          <div className="hero9-content-left w-[500px] h-[510px] rounded-l-3xl bg-white/70">
            <img src="./images/hero9.1.png" alt="" className="w-[100%] h-[100%] object-cover rounded-3xl p-2" />
          </div>

          <div className="hero9-content-right w-[500px] bg-white/70 h-[510px] rounded-r-3xl p-10 flex flex-col justify-between">
            <div className="flex flex-col">
              <button className="flex items-center justify-center text-white bg-[#614A44] w-fit pt-2 pb-1 px-5 rounded-full">MUST READ</button>
              <div className="card-head text-[34px] font-semibold mt-8">How to start a 100k creative agency in 2025</div>
              <div className="card-content text-[16px] text-[#453F3D] mt-5">Learn how to kickstart your journey into agrncy ownership with our comprehensive guide.</div>  
            </div>

            <div className="card-footer flex items-center justify-between mt-10">
              <div className="card-footer-left flex items-center gap-2">
                <img src="./images/user1.png" alt="" className="w-[50px] h-[50px] object-cover rounded-full" />
                <div className="card-footer-left-content flex flex-col ml-2 justify-center">
                  <div className="card-footer-left-content-head text-[16px] font-semibold">Dhyna Phils</div>
                  <div className="card-footer-left-content-head text-[14px] text-[#757170]">Head of Marketing</div>
                </div>
              </div>
              <div className="card-footer-right flex items-center gap-2">
                <button className="flex items-center text-[12px] justify-center font-bold text-white bg-[#C9502E] pt-2 pb-1 px-3 rounded-full">FEATURED</button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero9-footer flex w-[1000px] justify-between items-center mt-7">
          <div className="footer-card w-[100%] h-[100%] rounded-3xl">
            <div className="card-top">
              <img src="./images/hero9.2.png" className="w-[320px] h-[300px] object-cover rounded-3xl" alt="" />
            </div>
            <div className="card-content flex justify-between items-center mt-5 pr-3">
              <div className="card-left w-[70%] text-[18px] font-semibold">Top 10 degital agency software</div>
              <div className="card-right]">
                <button className="flex items-center text-[12px] justify-center font-bold text-white bg-[#156CC2] pt-2 pb-1 px-3 rounded-full">TOOLS</button>
              </div>
            </div>
          </div>
          <div className="footer-card w-[100%] h-[100%] rounded-3xl">
            <div className="card-top">
              <img src="./images/hero9.3.png" className="w-[320px] h-[300px] object-cover rounded-3xl" alt="" />
            </div>
            <div className="card-content flex justify-between items-center mt-5 pr-3">
              <div className="card-left w-[70%] text-[18px] font-semibold">A complete guide to project success in 2026</div>
              <div className="card-right]">
                <button className="flex items-center text-[12px] justify-center font-bold text-white bg-[#CF8D13] pt-2 pb-1 px-3 rounded-full">INSIGHT</button>
              </div>
            </div>
          </div>
          <div className="footer-card w-[100%] h-[100%] rounded-3xl">
            <div className="card-top">
              <img src="./images/hero9.4.png" className="w-[320px] h-[300px] object-cover rounded-3xl" alt="" />
            </div>
            <div className="card-content flex justify-between items-center mt-5 pr-3">
              <div className="card-left w-[70%] text-[18px] font-semibold">What Are Billoble Hours</div>
              <div className="card-right]">
                <button className="flex items-center text-[12px] justify-center font-bold text-white bg-[#0EA158] pt-2 pb-1 px-3 rounded-full">MANAGEMENT</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1000px] w-[100vw] bg-white"></div>
    </main>
  );
}