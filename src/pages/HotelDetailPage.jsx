import { useState } from "react";

import {
  Footer,
  Header,
  LineIcon,
  PlaceholderImage,
  ReviewSection,
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

const formatDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));

const getNights = (checkIn, checkOut) => {
  const difference =
    (new Date(`${checkOut}T00:00:00`) - new Date(`${checkIn}T00:00:00`)) /
    (1000 * 60 * 60 * 24);
  return Math.max(1, Math.round(difference));
};

function HotelReviewModal({
  hotel,
  checkIn,
  checkOut,
  nights,
  guests,
  rooms,
  pricePerNight,
  onClose,
  onConfirmed,
}) {
  const total = pricePerNight * nights * rooms;
  const { review } = pageContent.hotel;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#244f50]/60 px-5 py-8">
      <section
        className="w-full max-w-lg rounded-xl bg-white p-8 text-[#244f50] shadow-[0_20px_60px_rgba(31,65,60,.2)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hotel-review-title"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#d36d56]">
              {review.eyebrow}
            </p>
            <h2
              className="mt-2 font-['Lora',Georgia,serif] text-3xl font-medium"
              id="hotel-review-title"
            >
              {hotel.title}
            </h2>
          </div>
          <button
            className="rounded-full border-0 bg-[#e8f0eb] px-3 py-1 text-xl leading-none"
            type="button"
            aria-label={review.close}
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <p className="mt-5 text-sm text-[#71807d]">
          {formatDate(checkIn)} – {formatDate(checkOut)}
        </p>
        <div className="mt-6 rounded-lg border border-[#dce1db] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#71807d]">
            {review.selection}
          </p>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="flex justify-between">
              <dt>{review.stay}</dt>
              <dd className="font-semibold">{nights} {nights === 1 ? review.night : review.nights}</dd>
            </div>
            <div className="flex justify-between">
              <dt>{review.guests}</dt>
              <dd className="font-semibold">{guests} {review.adults}</dd>
            </div>
            <div className="flex justify-between">
              <dt>{review.rooms}</dt>
              <dd className="font-semibold">{rooms} {rooms === 1 ? review.room : review.rooms.toLowerCase()}</dd>
            </div>
          </dl>
        </div>
        <div className="mt-6 flex justify-between border-y border-[#e1e5df] py-4 text-sm">
          <span>
            ₱{pricePerNight.toLocaleString()} {pageContent.common.priceSeparator} {nights} {pageContent.common.nights} {pageContent.common.priceSeparator} {rooms}{" "}
            {rooms === 1 ? review.room : review.rooms.toLowerCase()}
          </span>
          <strong>₱{total.toLocaleString()}</strong>
        </div>
        <button
          className="mt-6 w-full rounded bg-[#235a5b] px-5 py-3 text-sm font-semibold text-white"
          type="button"
          onClick={() => onConfirmed({ total })}
        >
          {review.confirm}
        </button>
      </section>
    </div>
  );
}

function HotelConfirmedModal({ hotel, total, onClose }) {
  const { review } = pageContent.hotel;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#244f50]/60 px-5 py-8">
      <section
        className="w-full max-w-md rounded-xl bg-white p-8 text-[#244f50] shadow-[0_20px_60px_rgba(31,65,60,.2)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hotel-confirmed-title"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-[#d36d56]">
          {review.confirmedEyebrow}
        </p>
        <h2
          className="mt-2 font-['Lora',Georgia,serif] text-3xl font-medium"
          id="hotel-confirmed-title"
        >
          {review.confirmedTitle}
        </h2>
        <p className="mt-5 text-sm leading-6 text-[#71807d]">
          {review.confirmedMessagePrefix} <strong className="text-[#244f50]">{hotel.title}</strong>{" "}
          has been confirmed.
        </p>
        <div className="mt-6 flex justify-between border-y border-[#e1e5df] py-4 text-sm">
          <span>{pageContent.confirmation.totalPaid.replace(" paid", "")}</span>
          <strong>₱{total.toLocaleString()}</strong>
        </div>
        <button
          className="mt-6 w-full rounded bg-[#235a5b] px-5 py-3 text-sm font-semibold text-white"
          type="button"
          onClick={onClose}
        >
          {pageContent.common.done}
        </button>
      </section>
    </div>
  );
}

function BookingPanel({ hotel }) {
  const [checkIn, setCheckIn] = useState("2026-10-17");
  const [checkOut, setCheckOut] = useState("2026-10-20");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [modal, setModal] = useState(null);
  const { booking, review } = pageContent.hotel;
  const room = hotel.rooms?.[0] || {
    title: pageContent.common.standardRoom,
  };
  const pricePerNight = hotel.price;
  const nights = getNights(checkIn, checkOut);
  const total = pricePerNight * nights * rooms;

  return (
    <aside className="booking-panel rounded-xl border border-[#dce1db] bg-white p-8 shadow-[0_12px_30px_rgba(31,65,60,.07)]">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#d36d56]">
        {booking.heading}
      </p>
      <p className="my-6 text-4xl font-semibold text-[#244f50]">
        {hotel.getFormattedPrice().replace("/night", "")}{" "}
        <span className="text-sm font-normal text-[#71807d]">
          {pageContent.common.perNight}
        </span>
      </p>
      <div className="grid grid-cols-2 gap-6 border-t border-[#e1e5df] py-5 text-sm">
        <div>
          <span className="block text-[10px] text-[#71807d]">
            {booking.checkIn}
          </span>
          <input
            className="mt-1 w-full rounded border border-[#dce1db] px-2 py-2 text-sm"
            type="date"
            value={checkIn}
            onChange={(event) => {
              const nextCheckIn = event.target.value;
              setCheckIn(nextCheckIn);
              if (nextCheckIn >= checkOut) {
                const nextDate = new Date(`${nextCheckIn}T00:00:00`);
                nextDate.setDate(nextDate.getDate() + 1);
                setCheckOut(nextDate.toISOString().slice(0, 10));
              }
            }}
          />
        </div>
        <div>
          <span className="block text-[10px] text-[#71807d]">
            {booking.checkOut}
          </span>
          <input
            className="mt-1 w-full rounded border border-[#dce1db] px-2 py-2 text-sm"
            type="date"
            min={checkIn}
            value={checkOut}
            onChange={(event) => {
              if (event.target.value > checkIn) setCheckOut(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="grid gap-3 rounded border border-[#dce1db] px-4 py-3 text-sm">
      <div className="flex items-center justify-between">
        <span>{guests} {pageContent.common.adults}</span>
        <div className="flex items-center gap-3">
          <button
            className="h-7 w-7 rounded border border-[#dce1db]"
            type="button"
            aria-label={review.decreaseAdults}
            onClick={() => setGuests(Math.max(1, guests - 1))}
          >
            −
          </button>
          <span>{guests}</span>
          <button
            className="h-7 w-7 rounded border border-[#dce1db]"
            type="button"
            aria-label={review.increaseAdults}
            onClick={() => setGuests(guests + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[#e1e5df] pt-3">
        <span>{rooms} {rooms === 1 ? review.room : review.roomsLower}</span>
        <div className="flex items-center gap-3">
          <button
            className="h-7 w-7 rounded border border-[#dce1db]"
            type="button"
            aria-label={review.decreaseRooms}
            onClick={() => setRooms(Math.max(1, rooms - 1))}
          >
            −
          </button>
          <span>{rooms}</span>
          <button
            className="h-7 w-7 rounded border border-[#dce1db]"
            type="button"
            aria-label={review.increaseRooms}
            onClick={() => setRooms(rooms + 1)}
          >
            +
          </button>
        </div>
      </div>
      </div>
      <p className="mt-7 text-sm font-semibold">
      {room.title} · {nights} {nights === 1 ? pageContent.common.night : pageContent.common.nights}
      </p>
      <div className="mt-5 grid gap-4 border-b border-[#e1e5df] pb-5 text-sm">
        <div className="flex justify-between">
          <span>
            {hotel.getFormattedPrice().replace("/night", "")} {pageContent.common.priceSeparator} {nights} {pageContent.common.nights} {pageContent.common.priceSeparator} {rooms}{" "}
            {rooms === 1 ? review.room : review.roomsLower}
          </span>
          <span>₱{total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>{booking.taxes}</span>
          <span>{booking.included}</span>
        </div>
      </div>
      <div className="flex justify-between py-6 text-xl font-semibold">
        <span>{booking.total}</span>
        <span>₱{total.toLocaleString()}</span>
      </div>
      <button
        className="w-full rounded bg-[#235a5b] px-5 py-4 text-sm font-semibold text-white"
        type="button"
        onClick={() => setModal("review")}
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
      {modal === "review" && (
        <HotelReviewModal
          hotel={hotel}
          checkIn={checkIn}
          checkOut={checkOut}
          nights={nights}
          guests={guests}
          rooms={rooms}
          pricePerNight={pricePerNight}
          onClose={() => setModal(null)}
          onConfirmed={({ total: confirmedTotal }) => {
            setModal({ type: "confirmed", total: confirmedTotal });
          }}
        />
      )}
      {modal?.type === "confirmed" && (
        <HotelConfirmedModal
          hotel={hotel}
          total={modal.total}
          onClose={() => setModal(null)}
        />
      )}
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
              {pageContent.common.staySearchAction} <LineIcon name="search" />
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
                {hotel.rating} · {pageContent.stays.ratingLabel}
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
            <ReviewSection itemId={hotel.id} itemType="hotels" compact />
          </section>
          <BookingPanel hotel={hotel} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
