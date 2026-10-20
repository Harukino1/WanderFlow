import {
  Footer,
  Header,
  LineIcon,
  SearchField,
} from "../components/WonderFlowShared.jsx";
import searchFields from "../data/searchFields.js";
import { landingContent, siteContent } from "../data/content.js";

function Hero() {
  return (
    <section
      className="app-hero relative bg-[linear-gradient(90deg,rgba(9,37,38,.62),rgba(9,37,38,.1)_68%),url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-[center_57%] text-white max-[760px]:h-[510px] max-[760px]:bg-[58%_center]"
      id="explore"
    >
      <div className="px-[47px] pt-[62px] max-[760px]:px-[25px] max-[760px]:pt-[65px]">
        <p className="mb-[18px] text-xs font-semibold tracking-[.1px]">
          {landingContent.hero.eyebrow}
        </p>
        <h1 className="mb-[17px] whitespace-pre-line font-['Lora',Georgia,serif] text-[clamp(47px,4.2vw,68px)] font-semibold leading-[1.08] tracking-[-1.2px] max-[760px]:text-[clamp(37px,10vw,48px)]">
          {landingContent.hero.title}
        </h1>
        <p className="whitespace-pre-line text-base leading-[1.45] text-white/90">
          {landingContent.hero.description}
        </p>
      </div>
      <p className="hero-caption absolute right-[46px] m-0 rounded-full bg-[rgba(9,37,38,.48)] px-3 py-1.5 text-xs font-medium text-white max-[760px]:right-[25px]">
        {landingContent.hero.caption}
      </p>
    </section>
  );
}

function SearchPanel() {
  return (
    <section
      className="trip-search absolute left-[47px] right-[47px] min-h-[86px] rounded-lg border border-[#e1e4e0] bg-white px-[15px] pb-[13px] pt-[14px] shadow-[0_8px_18px_rgba(31,65,60,.09)] max-[760px]:left-4 max-[760px]:right-4 max-[760px]:top-[390px] max-[760px]:p-[14px]"
      aria-label={siteContent.search.tripLabel}
    >
      <div className="flex h-5 gap-[26px]">
        {landingContent.tabs.map((tab, index) => (
          <button
            className={`cursor-pointer border-0 bg-transparent p-0 text-sm ${index === 0 ? "font-semibold text-[#285657]" : "text-[#9aa3a0]"}`}
            type="button"
            key={tab}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-[25px] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-x-2 max-[760px]:gap-y-[14px]">
        {searchFields.map((field) => (
          <SearchField {...field} key={field.label} />
        ))}
        <button
          className="min-w-[123px] cursor-pointer rounded-[5px] border-0 bg-[#235a5b] px-[13px] py-[11px] text-sm font-semibold text-white max-[760px]:col-span-2 max-[760px]:w-full"
          type="button"
        >
          {siteContent.search.stayButton} <LineIcon name="search" />
        </button>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="app-shell relative overflow-hidden bg-white font-['Inter',Arial,sans-serif] text-[#244f50]">
      <Header />
      <Hero />
      <SearchPanel />
      <section className="feature-highlights flex justify-between px-[68px] pt-[73px] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-x-3 max-[760px]:gap-y-[22px] max-[760px]:px-[25px] max-[760px]:pb-[30px] max-[760px]:pt-20">
        {landingContent.features.map(([icon, text]) => (
          <div
            className="flex items-center gap-3 text-sm text-[#244f50]"
            key={text}
          >
            <LineIcon name={icon} />
            {text}
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
