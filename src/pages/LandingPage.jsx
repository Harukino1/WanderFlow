import {
  Footer,
  Header,
  LineIcon,
  PlaceholderImage,
  SearchField,
} from "../components/WonderFlowShared.jsx";
import searchFields from "../data/searchFields.js";
import { pageContent } from "../data/content.js";

function Hero() {
  const { landing } = pageContent;
  return (
    <section
      className="relative h-[clamp(400px,64vh,680px)] bg-[#235a5b] text-white"
      id="explore"
    >
      <div className="relative z-10 px-[47px] pt-[62px] max-[760px]:px-[25px] max-[760px]:pt-[65px]">
        <p className="mb-[18px] text-xs font-semibold tracking-[.1px]">
          {landing.eyebrow}
        </p>
        <h1 className="mb-[17px] whitespace-pre-line font-['Lora',Georgia,serif] text-[clamp(47px,4.2vw,68px)] font-semibold leading-[1.08] tracking-[-1.2px] max-[760px]:text-[clamp(37px,10vw,48px)]">
          {landing.title}
        </h1>
        <p className="whitespace-pre-line text-base leading-[1.45] text-white/90">
          {landing.description}
        </p>
      </div>
      <PlaceholderImage
        className="absolute inset-0 -z-0 h-full w-full rounded-none bg-[#235a5b]/40 text-white/80"
        label={landing.heroImage}
      />
      <p className="hero-caption absolute right-[46px] z-10 m-0 rounded-full bg-[rgba(9,37,38,.48)] px-3 py-1.5 text-xs font-medium text-white max-[760px]:right-[25px]">
        {landing.heroCaption}
      </p>
    </section>
  );
}

function SearchPanel() {
  const { landing } = pageContent;
  return (
    <section
      className="absolute left-[clamp(16px,4vw,47px)] right-[clamp(16px,4vw,47px)] top-[calc(clamp(59px,8vh,80px)+clamp(400px,64vh,680px)-78px)] z-20 min-h-[86px] rounded-lg border border-[#e1e4e0] bg-white p-[27px] shadow-[0_8px_18px_rgba(31,65,60,.09)] max-[760px]:top-[390px] max-[760px]:p-[14px]"
      aria-label={landing.searchLabel}
    >
      <div className="flex h-5 gap-[26px]">
        {landing.searchTabs.map((tab, index) => (
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
          {landing.searchAction} <LineIcon name="search" />
        </button>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const { landing } = pageContent;
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-['Inter',Arial,sans-serif] text-[#244f50]">
      <Header />
      <Hero />
      <SearchPanel />
      <section className="absolute left-0 right-0 top-[calc(clamp(59px,8vh,80px)+clamp(400px,64vh,680px)+105px)] z-10 flex justify-between px-[clamp(25px,5vw,90px)] pt-[73px] max-[760px]:static max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-x-3 max-[760px]:gap-y-[22px] max-[760px]:px-[25px] max-[760px]:pb-[30px] max-[760px]:pt-20">
        {landing.features.map(([icon, text]) => (
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
