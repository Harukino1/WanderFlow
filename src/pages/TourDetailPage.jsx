import { useState } from "react";

import {
  Footer,
  Header,
  LineIcon,
  PlaceholderImage,
  ReviewSection,
} from "../components/WonderFlowShared.jsx";
import { pageContent, tours } from "../data/content.js";

function TourReviewModal({
  tour,
  departure,
  travelers,
  pricePerTraveler,
  onClose,
  onConfirmed,
}) {
  const total = pricePerTraveler * travelers;
  const { review } = pageContent.tour;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#244f50]/60 px-5 py-8">
      <section
        className="w-full max-w-lg rounded-xl bg-white p-8 text-[#244f50] shadow-[0_20px_60px_rgba(31,65,60,.2)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-review-title"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#d36d56]">
              {review.eyebrow}
            </p>
            <h2
              className="mt-2 font-['Lora',Georgia,serif] text-3xl font-medium"
              id="tour-review-title"
            >
              {tour.title}
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
        <div className="mt-6 rounded-lg border border-[#dce1db] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#71807d]">
            {review.selection}
          </p>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt>{review.departure}</dt>
              <dd className="text-right font-semibold">{departure}</dd>
            </div>
            <div className="flex justify-between">
              <dt>{review.travelers}</dt>
              <dd className="font-semibold">{travelers} {review.adults}</dd>
            </div>
          </dl>
        </div>
        <div className="mt-6 flex justify-between border-y border-[#e1e5df] py-4 text-sm">
          <span>
            ₱{pricePerTraveler.toLocaleString()} {pageContent.common.priceSeparator} {travelers} {pageContent.common.travelers}
          </span>
          <strong>₱{total.toLocaleString()}</strong>
        </div>
        <button
          className="mt-6 w-full rounded bg-[#235a5b] px-5 py-3 text-sm font-semibold text-white"
          type="button"
          onClick={() => onConfirmed(total)}
        >
          {review.confirm}
        </button>
      </section>
    </div>
  );
}

function TourConfirmedModal({ tour, total, onClose }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#244f50]/60 px-5 py-8">
      <section
        className="w-full max-w-md rounded-xl bg-white p-8 text-[#244f50] shadow-[0_20px_60px_rgba(31,65,60,.2)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-confirmed-title"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-[#d36d56]">
          {pageContent.confirmation.eyebrow}
        </p>
        <h2
          className="mt-2 font-['Lora',Georgia,serif] text-3xl font-medium"
          id="tour-confirmed-title"
        >
          {pageContent.confirmation.title}
        </h2>
        <p className="mt-5 text-sm leading-6 text-[#71807d]">
          {pageContent.confirmation.bookingMessagePrefix}{" "}
          <strong className="text-[#244f50]">{tour.title}</strong>{" "}
          {pageContent.confirmation.bookingMessageSuffix}
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

function BookingPanel({ tour }) {
  const [selectedDeparture, setSelectedDeparture] = useState(
    pageContent.tour.booking.departures[0][0],
  );
  const [travelers, setTravelers] = useState(2);
  const [modal, setModal] = useState(null);
  const { booking } = pageContent.tour;
  const pricePerTraveler = tour.price;
  const total = pricePerTraveler * travelers;

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
        {booking.departures.map(([date, places]) => (
          <button
            className={`rounded border px-3 py-3 text-left text-[10px] ${selectedDeparture === date ? "border-[#235a5b] bg-[#e8f0eb]" : "border-[#dce1db] bg-white"}`}
            type="button"
            key={date}
            onClick={() => setSelectedDeparture(date)}
          >
            <strong className="block">{date}</strong>
            <span className="text-[#71807d]">{places}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs">
        <span>{travelers} {pageContent.common.adults}</span>
        <div className="flex items-center gap-3">
          <button
            className="h-7 w-7 rounded border border-[#dce1db]"
            type="button"
            aria-label={pageContent.tour.review.decreaseTravelers}
            onClick={() => setTravelers(Math.max(1, travelers - 1))}
          >
            −
          </button>
          <span>{travelers}</span>
          <button
            className="h-7 w-7 rounded border border-[#dce1db]"
            type="button"
            aria-label={pageContent.tour.review.increaseTravelers}
            onClick={() => setTravelers(travelers + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="mt-4 grid gap-2 border-t border-[#e1e5df] pt-4 text-xs">
        <div className="flex justify-between">
          <span>₱{pricePerTraveler.toLocaleString()} {pageContent.common.priceSeparator} {travelers} {pageContent.common.travelers}</span>
          <span>₱{total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>{booking.taxes}</span>
          <span>{booking.included}</span>
        </div>
        <div className="flex justify-between pt-1 text-base font-semibold">
          <span>{booking.total}</span>
          <span>₱{total.toLocaleString()}</span>
        </div>
      </div>
      <button
        className="mt-4 w-full rounded bg-[#235a5b] px-4 py-3 text-xs font-semibold text-white"
        type="button"
        onClick={() => setModal("review")}
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
      {modal === "review" && (
        <TourReviewModal
          tour={tour}
          departure={selectedDeparture}
          travelers={travelers}
          pricePerTraveler={pricePerTraveler}
          onClose={() => setModal(null)}
          onConfirmed={(confirmedTotal) =>
            setModal({ type: "confirmed", total: confirmedTotal })
          }
        />
      )}
      {modal?.type === "confirmed" && (
        <TourConfirmedModal
          tour={tour}
          total={modal.total}
          onClose={() => setModal(null)}
        />
      )}
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
      <div className="mx-auto max-w-[1280px] px-[clamp(32px,6vw,90px)] py-6">
        <div className="flex items-end justify-between gap-5 max-[760px]:block">
          <div>
            <h1 className="font-['Lora',Georgia,serif] text-5xl font-medium max-[760px]:text-3xl">
              {tour.title}
            </h1>
            <p className="mt-2 text-xs text-[#71807d]">{tour.description}</p>
            <p className="mt-2 text-[10px]">
              <strong className="rounded bg-[#e8f0eb] px-2 py-1">
                ★ {tour.rating} · {tour.reviewCount} {pageContent.common.reviews}
              </strong>
              <span className="ml-3">
                {tour.getFormattedDuration()} · {tour.groupSize} · {pageContent.common.english} ·
                {pageContent.common.tagalog}
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
              <ReviewSection itemId={tour.id} itemType="tours" compact />
            </div>
          </section>
          <BookingPanel tour={tour} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
