import {
  Footer,
  Header,
  LineIcon,
  PlaceholderImage,
  SearchField,
} from "../components/WonderFlowShared.jsx";
import searchFields from "../data/searchFields.js";
const tabs = ["Stays", "Tours & experiences", "Build a trip"];
const features = [
  ["sparkle", "Handpicked, never endless"],
  ["shield", "Book with peace of mind"],
  ["map", "Every detail, one itinerary"],
  ["heart", "Local people. Lasting memories."],
];

function Hero() {
  return (
    <section
      className="app-hero relative bg-[#235a5b] text-white"
      id="explore"
    >
      <div className="relative z-10 px-[47px] pt-[62px] max-[760px]:px-[25px] max-[760px]:pt-[65px]">
        <p className="mb-[18px] text-xs font-semibold tracking-[.1px]">
          LESS ORDINARY. MORE YOU.
        </p>
        <h1 className="mb-[17px] whitespace-pre-line font-['Lora',Georgia,serif] text-[clamp(47px,4.2vw,68px)] font-semibold leading-[1.08] tracking-[-1.2px] max-[760px]:text-[clamp(37px,10vw,48px)]">
          A whole journey,{"\n"} brought together by{"\n"} you.
        </h1>
        <p className="whitespace-pre-line text-base leading-[1.45] text-white/90">
          Beautiful places to stay. Local stories to step into.{"\n"}A whole journey, brought together by you.
        </p>
      </div>
      <PlaceholderImage
        className="absolute inset-0 -z-0 h-full w-full rounded-none bg-[#235a5b]/40 text-white/80"
        label="Hero photo placeholder — choose an Albay or Philippine landscape"
      />
      <p className="hero-caption absolute right-[46px] z-10 m-0 rounded-full bg-[rgba(9,37,38,.48)] px-3 py-1.5 text-xs font-medium text-white max-[760px]:right-[25px]">
        A tropical escape along Albay Bay, Mayon
      </p>
    </section>
  );
}

function SearchPanel() {
  return (
    <section
      className="trip-search absolute left-[47px] right-[47px] min-h-[86px] rounded-lg border border-[#e1e4e0] bg-white px-[15px] pb-[13px] pt-[14px] shadow-[0_8px_18px_rgba(31,65,60,.09)] max-[760px]:left-4 max-[760px]:right-4 max-[760px]:top-[390px] max-[760px]:p-[14px]"
      aria-label="Search for a trip"
    >
      <div className="flex h-5 gap-[26px]">
        {tabs.map((tab, index) => (
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
          Find your stay <LineIcon name="search" />
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
        {features.map(([icon, text]) => (
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
