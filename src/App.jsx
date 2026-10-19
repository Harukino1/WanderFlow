const features = [
  'Handpicked, never endless',
  'Book with peace of mind',
  'Every detail, one itinerary',
  'Local people. Lasting memories.',
]

function App() {
  return (
    <main className="app-shell relative overflow-hidden bg-white font-['Inter',Arial,sans-serif] text-[#244f50]">
      <header className="app-header flex items-center gap-6 bg-[#fcfcfa] px-[47px] max-[760px]:h-[68px] max-[760px]:px-[22px]">
        <a className="mr-auto font-['Lora',Georgia,serif] text-2xl font-semibold leading-none tracking-[-.7px] text-[#245556] no-underline" href="/" aria-label="WonderFlow home">
          WonderFlow<span>.</span>
        </a>
        <nav className="flex h-full gap-[25px] max-[760px]:hidden" aria-label="Primary navigation">
          <a className="relative flex items-center text-sm text-[#225354] no-underline after:absolute after:bottom-[14px] after:left-0 after:right-0 after:h-0.5 after:bg-[#d36d56]" href="#explore">Explore</a>
          <a className="flex items-center text-sm text-[#8a9691] no-underline" href="#stays">Stays</a>
          <a className="flex items-center text-sm text-[#8a9691] no-underline" href="#tours">Tours</a>
          <a className="flex items-center text-sm text-[#8a9691] no-underline" href="#planner">Trip planner</a>
        </nav>
        <div className="ml-[34px] flex items-center gap-[15px] max-[760px]:hidden">
          <button className="cursor-pointer border-0 bg-transparent p-0 text-xs text-[#385f5e]" type="button">EN / PHP⌄</button>
          <button className="cursor-pointer rounded border border-[#dfe3df] bg-white px-[14px] py-2 text-xs font-semibold text-[#245556]" type="button">Book Now</button>
        </div>
        <button className="hidden cursor-pointer border-0 bg-transparent text-sm font-semibold text-[#245556] max-[760px]:block" type="button">Menu</button>
      </header>

      <section className="app-hero relative bg-[linear-gradient(90deg,rgba(9,37,38,.62),rgba(9,37,38,.1)_68%),url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-[center_57%] text-white max-[760px]:h-[510px] max-[760px]:bg-[58%_center]" id="explore">
        <div className="px-[47px] pt-[62px] max-[760px]:px-[25px] max-[760px]:pt-[65px]">
          <p className="mb-[18px] text-xs font-semibold tracking-[.1px]">LESS ORDINARY. MORE YOU.</p>
          <h1 className="mb-[17px] font-['Lora',Georgia,serif] text-[clamp(47px,4.2vw,68px)] font-semibold leading-[1.08] tracking-[-1.2px] max-[760px]:text-[clamp(37px,10vw,48px)]">A whole journey,<br />brought together by<br />you.</h1>
          <p className="text-base leading-[1.45] text-white/90">Beautiful places to stay. Local stories to step into.<br />A whole journey, brought together by you.</p>
        </div>
        <p className="absolute bottom-[74px] right-[46px] m-0 text-xs text-white/85 max-[760px]:bottom-[126px] max-[760px]:right-[25px]">A tropical escape along Albay Bay, Mayon</p>
      </section>

      <section className="trip-search absolute left-[47px] right-[47px] min-h-[86px] rounded-lg border border-[#e1e4e0] bg-white px-[15px] pb-[13px] pt-[14px] shadow-[0_8px_18px_rgba(31,65,60,.09)] max-[760px]:left-4 max-[760px]:right-4 max-[760px]:top-[390px] max-[760px]:p-[14px]" aria-label="Search for a trip">
        <div className="flex h-5 gap-[26px]">
          <button className="cursor-pointer border-0 bg-transparent p-0 text-sm font-semibold text-[#285657]" type="button">Stays</button>
          <button className="cursor-pointer border-0 bg-transparent p-0 text-sm text-[#9aa3a0]" type="button">Tours &amp; experiences</button>
          <button className="cursor-pointer border-0 bg-transparent p-0 text-sm text-[#9aa3a0]" type="button">Build a trip</button>
        </div>
        <div className="flex items-center gap-[25px] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-x-2 max-[760px]:gap-y-[14px]">
          <div className="flex min-w-0 flex-1 items-center gap-2.5 max-[760px]:col-span-2">
            <div><span className="mb-[3px] block whitespace-nowrap text-[10px] font-semibold text-[#a4adab]">DESTINATION</span><span className="block whitespace-nowrap text-sm text-[#526866]">Biri Island, Northern Samar</span></div>
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2.5">
            <div><span className="mb-[3px] block whitespace-nowrap text-[10px] font-semibold text-[#a4adab]">CHECK-IN / CHECK-OUT</span><span className="block whitespace-nowrap text-sm text-[#526866]">17 Oct – 20 Oct 2026</span></div>
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2.5">
            <div><span className="mb-[3px] block whitespace-nowrap text-[10px] font-semibold text-[#a4adab]">GUESTS &amp; ROOMS</span><span className="block whitespace-nowrap text-sm text-[#526866]">2 adults · 1 room</span></div>
          </div>
          <button className="min-w-[123px] cursor-pointer rounded-[5px] border-0 bg-[#235a5b] px-[13px] py-[11px] text-sm font-semibold text-white max-[760px]:col-span-2 max-[760px]:w-full" type="button">Find your stay</button>
        </div>
      </section>

      <section className="flex justify-between px-[68px] pt-[73px] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-x-3 max-[760px]:gap-y-[22px] max-[760px]:px-[25px] max-[760px]:pb-[30px] max-[760px]:pt-20">
        {features.map((text) => <div className="text-sm text-[#596f6d]" key={text}>{text}</div>)}
      </section>
    </main>
  )
}

export default App
