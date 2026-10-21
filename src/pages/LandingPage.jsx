import {
  Footer,
  Header,
  LineIcon,
  PlaceholderImage,
} from "../components/WonderFlowShared.jsx";
import { pageContent } from "../data/content.js";

function Hero() {
  const { landing } = pageContent;
  return (
    <section
      className="relative h-[clamp(400px,64vh,680px)] bg-[#dfeae3] text-black"
      id="explore"
    >
      <div className="relative z-10 px-[47px] pt-[62px] max-[760px]:px-[25px] max-[760px]:pt-[65px]">
        <p className="mb-[18px] text-xs font-semibold tracking-[.1px]">
          {landing.eyebrow}
        </p>
        <h1 className="mb-[17px] whitespace-pre-line font-['Lora',Georgia,serif] text-[clamp(47px,4.2vw,68px)] font-semibold leading-[1.08] tracking-[-1.2px] max-[760px]:text-[clamp(37px,10vw,48px)]">
          {landing.title}
        </h1>
        <p className="whitespace-pre-line text-base leading-[1.45] text-black">
          {landing.description}
        </p>
      </div>
      <PlaceholderImage
        className="absolute inset-0 -z-0 h-full w-full rounded-none bg-[#dfeae3] text-black/60"
        label={landing.heroImage}
      />
      <p className="hero-caption absolute right-[46px] z-10 m-0 rounded-full bg-black/10 px-3 py-1.5 text-xs font-medium text-black max-[760px]:right-[25px]">
        {landing.heroCaption}
      </p>
    </section>
  );
}

export default function LandingPage() {
  const { landing } = pageContent;
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-['Inter',Arial,sans-serif] text-[#244f50]">
      <Header />
      <Hero />
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
