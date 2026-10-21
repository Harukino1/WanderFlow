import { useEffect, useState } from "react";
import { pageContent } from "../data/content.js";

export function LineIcon({ name }) {
  const paths = {
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),
    heart: (
      <path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    map: (
      <>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
        <path d="M9 3v15M15 6v15" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0 0-6M17 14a5 5 0 0 1 4 5" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    shield: (
      <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Zm-3 9 2 2 4-4" />
    ),
    sparkle: (
      <>
        <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />
      </>
    ),
  };

  return (
    <svg
      className="line-icon h-6 w-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function Header({ activePage = "explore" }) {
  function handleNavigation(event, href) {
    if (!href.startsWith("/")) return;
    event.preventDefault();
    if (window.location.pathname === href) return;
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <header className="relative flex h-[clamp(59px,8vh,80px)] items-center gap-6 bg-[#fcfcfa] px-[clamp(22px,4vw,47px)] max-[760px]:h-[68px]">
      <a
        className="mr-auto font-['Lora',Georgia,serif] text-2xl font-semibold leading-none tracking-[-.7px] text-[#245556] no-underline"
        href="/"
        onClick={(event) => handleNavigation(event, "/")}
        aria-label={`${pageContent.brand} home`}
      >
        {pageContent.brand}
        <span>.</span>
      </a>
      <nav
        className="absolute left-1/2 flex h-full -translate-x-1/2 gap-[25px] max-[760px]:hidden"
        aria-label={pageContent.header.primaryNavigation}
      >
        {pageContent.navigation.map(({ label, href }) => (
          <a
            className={`relative flex items-center text-sm no-underline ${label.toLowerCase().replace(" ", "-") === activePage ? "text-[#225354] after:absolute after:bottom-[20px] after:left-0 after:right-0 after:h-0.5 after:bg-[#d36d56]" : "text-[#8a9691]"}`}
            href={href}
            onClick={(event) => handleNavigation(event, href)}
            key={label}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="ml-[34px] flex items-center gap-[15px] max-[760px]:hidden">
        <button
          className="cursor-pointer border-0 bg-transparent p-0 text-xs text-[#385f5e]"
          type="button"
        >
          {pageContent.header.currency}
        </button>
        <button
          className="cursor-pointer rounded border border-[#dfe3df] bg-white px-[14px] py-2 text-xs font-semibold text-[#245556]"
          type="button"
          onClick={(event) => handleNavigation(event, "/stays")}
        >
          {pageContent.header.bookNow}
        </button>
      </div>
      <button
        className="hidden cursor-pointer border-0 bg-transparent text-sm font-semibold text-[#245556] max-[760px]:block"
        type="button"
      >
        {pageContent.header.menu}
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-[#d7e1dc] bg-[#edf3ef] px-[clamp(25px,5vw,90px)] py-5 text-xs text-[#58716b] max-[760px]:grid max-[760px]:gap-3">
      <p className="m-0">{pageContent.footer.copyright}</p>
    </footer>
  );
}

export function CatalogImage({ item, className = "" }) {
  if (item.imageUrl) {
    return <img className={className} src={item.imageUrl} alt={item.title} />;
  }

  return (
    <div
      className={`flex items-center justify-center bg-[#dfeae3] p-5 text-center text-xs font-semibold uppercase tracking-[.12em] text-[#397071] ${className}`}
      role="img"
      aria-label={item.imagePlaceholder}
    >
      {item.imagePlaceholder}
    </div>
  );
}

export function PlaceholderImage({ label, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center bg-[#dfeae3] p-5 text-center text-xs font-semibold uppercase tracking-[.12em] text-[#397071] ${className}`}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  );
}

export function ReviewSection({ itemId, itemType, compact = false }) {
  const content = pageContent.reviews[itemType]?.[itemId] || {
    items: [],
  };
  const [reviews, setReviews] = useState(content.items);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function submitReview(event) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedComment = comment.trim();
    if (!trimmedName || !trimmedComment) return;

    setReviews((current) => [
      ...current,
      {
        name: trimmedName,
        rating: 5,
        comment: trimmedComment,
      },
    ]);
    setName("");
    setComment("");
  }

  return (
    <section
      className={
        compact
          ? "mt-6 border-t border-[#dfe4df] pt-5"
          : "mt-16 border-t border-[#dfe4df] pt-10"
      }
      id="reviews"
      aria-labelledby={`${itemId}-reviews-title`}
    >
      <div className="flex items-end justify-between gap-4 max-[760px]:items-start max-[760px]:grid">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-wide text-[#d36d56]">
            {pageContent.reviewSection.eyebrow}
          </p>
          <h2
            className="mt-1 font-['Lora',Georgia,serif] text-xl font-medium"
            id={`${itemId}-reviews-title`}
          >
            {pageContent.reviewSection.title}
          </h2>
        </div>
        <span className="text-xs text-[#71807d]">
          {reviews.length} {pageContent.reviewSection.countLabel}
        </span>
      </div>
      <div className="mt-6 grid gap-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <article
              className="rounded-lg border border-[#dfe4df] bg-white p-3"
              key={`${review.name}-${index}`}
            >
              <div className="flex items-center justify-between gap-4">
                <strong className="text-sm">{review.name}</strong>
                <span className="text-xs text-[#d36d56]">
                  {"★".repeat(review.rating)}
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-[#71807d]">
                {review.comment}
              </p>
            </article>
          ))
        ) : (
          <p className="text-sm text-[#71807d]">
            {pageContent.reviewSection.empty}
          </p>
        )}
      </div>
      <form
        className="mt-5 grid gap-3 rounded-lg bg-[#e8f0eb] p-3"
        onSubmit={submitReview}
      >
        <h3 className="font-['Lora',Georgia,serif] text-base font-medium">
          {pageContent.reviewSection.formTitle}
        </h3>
        <label className="grid gap-2 text-xs font-semibold">
          {pageContent.reviewSection.nameLabel}
          <input
            className="rounded border border-[#dce1db] bg-white px-2 py-1.5 text-xs font-normal"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label className="grid gap-2 text-xs font-semibold">
          {pageContent.reviewSection.commentLabel}
          <textarea
            className="min-h-16 rounded border border-[#dce1db] bg-white px-2 py-1.5 text-xs font-normal"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            required
          />
        </label>
        <button
          className="w-fit rounded bg-[#235a5b] px-3 py-1.5 text-xs font-semibold text-white"
          type="submit"
        >
          {pageContent.reviewSection.submit}
        </button>
      </form>
    </section>
  );
}

export function PurchaseConfirmationModal({
  itemName,
  itemType,
  total,
  onClose,
}) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#244f50]/60 px-5 py-8"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="w-full max-w-md rounded-xl bg-white p-8 text-[#244f50] shadow-[0_20px_60px_rgba(31,65,60,.2)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="purchase-confirmation-title"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#d36d56]">
              {pageContent.confirmation.eyebrow}
            </p>
            <h2
              className="mt-2 font-['Lora',Georgia,serif] text-3xl font-medium"
              id="purchase-confirmation-title"
            >
              {pageContent.confirmation.title}
            </h2>
          </div>
          <button
            className="rounded-full border-0 bg-[#e8f0eb] px-3 py-1 text-xl leading-none text-[#244f50]"
            type="button"
            aria-label={pageContent.confirmation.close}
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <p className="mt-5 text-sm leading-6 text-[#71807d]">
          {pageContent.confirmation.messagePrefix} {itemType}{" "}
          {pageContent.confirmation.messageFor}{" "}
          <strong className="text-[#244f50]">{itemName}</strong>{" "}
          {pageContent.confirmation.messageSuffix}
        </p>
        <div className="mt-6 flex justify-between border-y border-[#e1e5df] py-4 text-sm">
          <span>{pageContent.confirmation.totalPaid}</span>
          <strong>{total}</strong>
        </div>
        <button
          className="mt-6 w-full rounded bg-[#235a5b] px-5 py-3 text-sm font-semibold text-white"
          type="button"
          onClick={onClose}
        >
          {pageContent.confirmation.done}
        </button>
      </section>
    </div>
  );
}
