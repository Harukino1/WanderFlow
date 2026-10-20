import {
  Footer,
  Header,
  LineIcon,
  PlaceholderImage,
  SearchField,
} from "../components/WonderFlowShared.jsx";
import { pageContent, tours } from "../data/content.js";

function TourSearch() {
  const { searchFields } = pageContent.tour;

  return (
    <div className="tour-detail-search bg-[#f0ede4] px-[clamp(32px,6vw,90px)] py-3">
      <div className="mx-auto flex max-w-[1280px] items-center gap-7 rounded-lg border border-[#e1e4df] bg-white px-4 py-3 shadow-[0_8px_18px_rgba(31,65,60,.08)] max-[760px]:grid max-[760px]:grid-cols-2">
        {searchFields.map((field) => (
          <SearchField {...field} key={field.label} />
        ))}
        <button
          className="rounded-[5px] border-0 bg-[#235a5b] px-4 py-3 text-xs font-semibold text-white max-[760px]:col-span-2"
          type="button"
        >
          Find tours <LineIcon name="search" />
        </button>
      </div>
    </div>
  );
}

function BookingPanel({ tour }) {
  const { booking } = pageContent.tour;

  return (
    <aside className="tour-booking rounded-xl border border-[#dce1db] bg-white p-5 shadow-[0_12px_30px_rgba(31,65,60,.07)]">
      <p className="text-[10px] font-semibold uppercase text-[#d36d56]">
        {booking.heading}
      </p>
      <p className="my-4 text-3xl font-semibold">
        {tour.getFormattedPrice().replace("/person", "")}{" "}
        <span className="text-[10px] font-normal text-[#71807d]">
          / person
        </span>
      </p>
      <p className="border-b border-[#e1e5df] pb-4 text-[10px] text-[#71807d]">
        {booking.duration}
      </p>
      <p className="mt-4 text-xs font-semibold">{booking.departureLabel}</p>
      <div className="mt-3 grid gap-2">
        {booking.departures.map(([date, places], index) => (
          <button
            className={`rounded border px-3 py-3 text-left text-[10px] ${index === 0 ? "border-[#235a5b] bg-[#e8f0eb]" : "border-[#dce1db] bg-white"}`}
            type="button"
            key={date}
          >
            <strong className="block">{date}</strong>
            <span className="text-[#71807d]">{places}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-xs">
        <span>{booking.travelers}</span>
        <span>{booking.travelerCount}</span>
      </div>
      <div className="mt-4 grid gap-2 border-t border-[#e1e5df] pt-4 text-xs">
        <div className="flex justify-between">
          <span>{booking.lineItem}</span>
          <span>{booking.subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>{booking.taxes}</span>
          <span>{booking.included}</span>
        </div>
        <div className="flex justify-between pt-1 text-base font-semibold">
          <span>{booking.total}</span>
          <span>{booking.subtotal}</span>
        </div>
      </div>
      <button
        className="mt-4 w-full rounded bg-[#235a5b] px-4 py-3 text-xs font-semibold text-white"
        type="button"
      >
        {booking.reserve}
      </button>
      <p className="mt-3 text-center text-[9px] text-[#71807d]">
        {booking.notice}
      </p>
      <ul className="mt-5 grid gap-2 pl-0 text-[10px] [&_li]:list-none">
        {booking.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
    </aside>
  );
}

export default function TourDetailPage() {
  const tour =
    tours.find((item) =>
      window.location.pathname.endsWith(item.id),
    ) || tours[0];
  const {
    gallery,
    details,
    photos,
    tabs,
    heading,
    description,
    highlights,
    route,
  } = pageContent.tour;
  const detail = details[tour.id] || {
    gallery,
    heading,
    description,
    highlights,
    route,
  };

  return (
    <main className="tour-detail-page bg-[#faf9f4] font-['Inter',Arial,sans-serif] text-[#244f50]">
      <Header activePage="tours" />
      <TourSearch />
      <div className="mx-auto max-w-[1280px] px-[clamp(32px,6vw,90px)] py-6">
        <div className="flex items-end justify-between gap-5 max-[760px]:block">
          <div>
            <h1 className="font-['Lora',Georgia,serif] text-5xl font-medium max-[760px]:text-3xl">
              {tour.title}
            </h1>
            <p className="mt-2 text-xs text-[#71807d]">{tour.description}</p>
            <p className="mt-2 text-[10px]">
              <strong className="rounded bg-[#e8f0eb] px-2 py-1">
                ★ {tour.rating} · {tour.reviewCount} reviews
              </strong>
              <span className="ml-3">
                {tour.getFormattedDuration()} · {tour.groupSize} · English ·
                Tagalog
              </span>
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-[2fr_1fr] gap-3 max-[760px]:grid-cols-1">
          <div className="relative">
            <PlaceholderImage className="h-[350px] w-full rounded-lg max-[760px]:h-64" label={detail.gallery[0].alt} />
          </div>
          <div className="grid gap-3">
            <PlaceholderImage className="h-[168px] w-full rounded-lg" label={detail.gallery[1].alt} />
            <div className="relative">
              <PlaceholderImage className="h-[168px] w-full rounded-lg" label={detail.gallery[2].alt} />
              <span className="absolute bottom-3 right-3 rounded bg-white px-3 py-2 text-[10px] font-semibold">
                {photos}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-[1fr_300px] gap-8 max-[900px]:grid-cols-1">
          <section>
            <nav className="flex gap-6 border-b border-[#dfe4df] pb-3 text-[10px] text-[#71807d] max-[760px]:gap-3">
              {tabs.map((tab, index) => (
                <a
                  className={index === 0 ? "font-semibold text-[#244f50]" : ""}
                  href={
                    ["#experience", "#day", "#included", "#know", "#reviews"][
                      index
                    ]
                  }
                  key={tab}
                >
                  {tab}
                </a>
              ))}
            </nav>
            <div className="pt-5" id="experience">
              <h2 className="font-['Lora',Georgia,serif] text-2xl font-medium">
                {detail.heading}
              </h2>
              <p className="mt-3 text-xs leading-5 text-[#71807d]">
                {detail.description}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-5 text-[10px] max-[760px]:grid-cols-1">
                <div>
                  <LineIcon name="map" />
                  <strong className="mt-2 block">{detail.highlights[0]}</strong>
                </div>
                <div>
                  <LineIcon name="sparkle" />
                  <strong className="mt-2 block">{detail.highlights[1]}</strong>
                </div>
                <div>
                  <LineIcon name="location" />
                  <strong className="mt-2 block">{detail.highlights[2]}</strong>
                </div>
              </div>
              <p className="mt-5 rounded bg-[#e8f0eb] px-4 py-3 text-[10px]">
                {detail.route}
              </p>
            </div>
          </section>
          <BookingPanel tour={tour} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
