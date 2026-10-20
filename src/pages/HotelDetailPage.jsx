import {
  Footer,
  Header,
  LineIcon,
  PlaceholderImage,
  SearchField,
} from "../components/WonderFlowShared.jsx";
import searchFields from "../data/searchFields.js";
import { hotels, pageContent } from "../data/content.js";

function getAmenityIcon(amenity) {
  const value = amenity.toLowerCase();

  if (value.includes("breakfast") || value.includes("restaurant")) {
    return "sparkle";
  }
  if (
    value.includes("location") ||
    value.includes("parking") ||
    value.includes("view")
  ) {
    return "location";
  }
  if (value.includes("pool") || value.includes("beach")) {
    return "map";
  }
  return "heart";
}

function BookingPanel({ hotel }) {
  const { booking } = pageContent.hotel;
  const room = hotel.rooms?.[0] || {
    title: "Standard room",
  };

  return (
    <aside className="booking-panel rounded-xl border border-[#dce1db] bg-white p-8 shadow-[0_12px_30px_rgba(31,65,60,.07)]">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#d36d56]">
        {booking.heading}
      </p>
      <p className="my-6 text-4xl font-semibold text-[#244f50]">
        {hotel.getFormattedPrice().replace("/night", "")}{" "}
        <span className="text-sm font-normal text-[#71807d]">
          / night
        </span>
      </p>
      <div className="grid grid-cols-2 gap-6 border-t border-[#e1e5df] py-5 text-sm">
        <div>
          <span className="block text-[10px] text-[#71807d]">
            {booking.checkIn}
          </span>
          <strong>{booking.dates[0]}</strong>
        </div>
        <div>
          <span className="block text-[10px] text-[#71807d]">
            {booking.checkOut}
          </span>
          <strong>{booking.dates[1]}</strong>
        </div>
      </div>
      <div className="rounded border border-[#dce1db] px-4 py-3 text-sm">
        {booking.guests}
      </div>
      <p className="mt-7 text-sm font-semibold">
        {room.title} · {booking.nights}
      </p>
      <div className="mt-5 grid gap-4 border-b border-[#e1e5df] pb-5 text-sm">
        <div className="flex justify-between">
          <span>
            {hotel.getFormattedPrice().replace("/night", "")} × {booking.nights}
          </span>
          <span>{booking.totalAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>{booking.taxes}</span>
          <span>{booking.included}</span>
        </div>
      </div>
      <div className="flex justify-between py-6 text-xl font-semibold">
        <span>{booking.total}</span>
        <span>{booking.totalAmount}</span>
      </div>
      <button
        className="w-full rounded bg-[#235a5b] px-5 py-4 text-sm font-semibold text-white"
        type="button"
      >
        {booking.reserve}
      </button>
      <p className="mt-4 text-center text-xs text-[#71807d]">
        {booking.notice}
      </p>
      <ul className="mt-7 grid gap-4 pl-0 text-sm text-[#244f50] [&_li]:list-none">
        {booking.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
    </aside>
  );
}

export default function HotelDetailPage() {
  const hotel =
    hotels.find((item) =>
      window.location.pathname.endsWith(item.id),
    ) || hotels.find((item) => item.id === "hotel-fina") || hotels[0];
  const { gallery, locationAction, photos, reviews } = pageContent.hotel;
  const amenities = hotel.amenities.length
    ? hotel.amenities
    : pageContent.hotel.amenities;

  return (
    <main className="hotel-page bg-[#faf9f4] font-['Inter',Arial,sans-serif] text-[#244f50]">
      <Header activePage="stays" />
      <div className="stays-search-wrap bg-[#f0ede4] px-[clamp(32px,6vw,90px)] py-6">
        <div className="stays-search rounded-lg border border-[#e1e4df] bg-white px-5 py-4 shadow-[0_8px_18px_rgba(31,65,60,.08)]">
          <div className="flex items-center gap-8 max-[760px]:grid max-[760px]:gap-4">
            {searchFields.map((field) => (
              <SearchField {...field} key={field.label} />
            ))}
            <button
              className="min-w-[142px] rounded-[5px] border-0 bg-[#235a5b] px-4 py-3 text-sm font-semibold text-white"
              type="button"
            >
              Find your stay <LineIcon name="search" />
            </button>
          </div>
        </div>
      </div>
      <div className="hotel-content mx-auto max-w-[1320px] px-[clamp(32px,6vw,90px)] py-10">
        <div className="flex items-end justify-between gap-5 max-[760px]:block">
          <div>
            <h1 className="font-['Lora',Georgia,serif] text-6xl font-medium max-[760px]:text-4xl">
              {hotel.title}
            </h1>
            <p className="mt-4 text-sm">
              {hotel.location} · {locationAction}{" "}
              <strong className="ml-6 rounded bg-[#e8f0eb] px-3 py-2">
                {hotel.rating} · Excellent
              </strong>
              <span className="ml-5 text-[#71807d]">
                {hotel.reviewCount} {reviews}
              </span>
            </p>
          </div>
        </div>
        <div className="hotel-gallery mt-9 grid grid-cols-[2fr_1fr] gap-5 max-[760px]:grid-cols-1">
          <PlaceholderImage className="h-[600px] w-full rounded-xl max-[760px]:h-72" label={gallery[0].alt} />
          <div className="grid gap-5">
            <PlaceholderImage className="h-[290px] w-full rounded-xl" label={gallery[1].alt} />
            <div className="relative">
              <PlaceholderImage className="h-[290px] w-full rounded-xl" label={gallery[2].alt} />
              <button
                className="absolute bottom-4 right-4 rounded bg-white px-4 py-3 text-sm font-semibold"
                type="button"
              >
                {photos}
              </button>
            </div>
          </div>
        </div>
        <div className="hotel-description mt-16 grid grid-cols-[1fr_400px] gap-12 max-[900px]:grid-cols-1">
          <section>
            <h2 className="font-['Lora',Georgia,serif] text-4xl font-medium">
              {hotel.tagline}
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-[#71807d]">
              {hotel.description}
            </p>
            <div className="mt-12 grid grid-cols-4 gap-6 border-b border-[#dfe4df] pb-12 max-[760px]:grid-cols-2">
              {amenities.map((amenity) => (
                <div key={amenity}>
                  <LineIcon name={getAmenityIcon(amenity)} />
                  <p className="text-sm">{amenity}</p>
                </div>
              ))}
            </div>
          </section>
          <BookingPanel hotel={hotel} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
