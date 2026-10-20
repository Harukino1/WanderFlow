import {
  Footer,
  Header,
  LineIcon,
  SearchField,
} from "../components/WonderFlowShared.jsx";
import { useMemo, useState } from "react";
import searchFields from "../data/searchFields.js";
import { hotels, pageContent, siteContent } from "../data/content.js";

function StaysSearch() {
  return (
    <section className="stays-search rounded-lg border border-[#e1e4df] bg-white px-5 py-4 shadow-[0_8px_18px_rgba(31,65,60,.08)]">
      <div className="flex items-center gap-8 max-[760px]:grid max-[760px]:gap-4">
        {searchFields.map((field) => (
          <SearchField {...field} key={field.label} />
        ))}
        <button
          className="min-w-[142px] rounded-[5px] border-0 bg-[#235a5b] px-4 py-3 text-sm font-semibold text-white"
          type="button"
        >
          {siteContent.search.stayButton} <LineIcon name="search" />
        </button>
      </div>
    </section>
  );
}

function FilterGroup({ title, options, selectedOptions, onChange }) {
  return (
    <fieldset className="border-0 border-t border-[#e3e6e1] px-0 py-5">
      <legend className="mb-3 text-sm font-semibold">{title}</legend>
      <div className="grid gap-3">
        {options.map(({ label, count }) => (
          <label
            className="flex items-center gap-2 text-xs text-[#526866]"
            key={label}
          >
            <input
              className="accent-[#235a5b]"
              type="checkbox"
              checked={selectedOptions.includes(label)}
              onChange={() => onChange(label)}
            />
            {label} ({count})
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function StayCard({ stay }) {
  const openDetails = () => {
    window.history.pushState({}, "", "/stays/hotel-fina");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <article className="stay-card grid grid-cols-[220px_1fr] overflow-hidden rounded-lg border border-[#dfe4df] bg-white max-[760px]:grid-cols-1">
      <img
        className="h-full min-h-[198px] w-full object-cover max-[760px]:h-52"
        src={stay.imageUrl}
        alt={stay.title}
      />
      <div className="flex min-w-0 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-[10px] text-[#8a9691]">{stay.location}</p>
            <h2 className="m-0 font-['Lora',Georgia,serif] text-2xl font-medium">
              {stay.title}
            </h2>
          </div>
          <button
            className="border-0 bg-transparent p-1 text-[#245556]"
            type="button"
            aria-label={`Save ${stay.title}`}
          >
            <LineIcon name="heart" />
          </button>
        </div>
        <p className="my-2 text-xs text-[#526866]">
          <strong className="rounded bg-[#e8f0eb] px-2 py-1 text-[#397071]">
            {stay.rating}
          </strong>{" "}
          <b>{pageContent.stays.ratingLabel}</b> ({stay.reviewCount} reviews)
        </p>
        <p className="m-0 text-xs leading-5 text-[#71807d]">
          {stay.description}
        </p>
        <div className="mt-auto flex items-end justify-between border-t border-[#e3e6e1] pt-3">
          <span className="whitespace-pre-line text-[10px] text-[#71807d]">
            {pageContent.stays.cancellation}
          </span>
          <div className="flex items-center gap-4">
            <strong className="text-lg">
              {stay.getFormattedPrice().replace("/night", "")}
              <span className="text-[10px] font-normal">
                {siteContent.search.nightUnit}
              </span>
            </strong>
            <button
              className="rounded bg-[#235a5b] px-4 py-2 text-xs font-semibold text-white"
              type="button"
              onClick={openDetails}
            >
              {pageContent.stays.viewRooms}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function StaysPage() {
  const filterGroups = Object.values(pageContent.stays.filters);
  const filterOptions = filterGroups.flatMap(({ options }) =>
    options.map(([label, count, checked]) => ({ label, count, checked })),
  );
  const [selectedFilters, setSelectedFilters] = useState(
    filterOptions.filter(({ checked }) => checked).map(({ label }) => label),
  );
  const toggleFilter = (label) => {
    setSelectedFilters((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  };
  const visibleHotels = useMemo(() => {
    if (selectedFilters.length === 0) return hotels;

    return hotels.filter((hotel) =>
      selectedFilters.some((filter) => {
        if (filter.startsWith("Exceptional")) return hotel.rating >= 9;
        if (filter.startsWith("Very good")) return hotel.rating >= 8;
        return hotel.amenities.includes(filter);
      }),
    );
  }, [selectedFilters]);
  const resetFilters = () => setSelectedFilters([]);

  return (
    <main className="stays-page bg-[#faf9f4] font-['Inter',Arial,sans-serif] text-[#244f50]">
      <Header activePage="stays" />
      <div className="stays-search-wrap bg-[#f0ede4] px-[clamp(32px,6vw,90px)] py-6">
        <StaysSearch />
      </div>
      <div className="stays-content mx-auto grid max-w-[1320px] grid-cols-[280px_minmax(0,1fr)] gap-7 px-[clamp(32px,6vw,90px)] py-10 max-[760px]:grid-cols-1">
        <aside>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[#d36d56]">
            {pageContent.stays.eyebrow}
          </p>
          <h1 className="mb-7 whitespace-nowrap font-['Lora',Georgia,serif] text-3xl font-medium leading-tight max-[760px]:whitespace-normal max-[760px]:text-3xl">
            {pageContent.stays.title}
          </h1>
          <div className="flex items-center justify-between pb-4">
            <strong className="text-sm">{pageContent.stays.filterTitle}</strong>
            <button
              className="border-0 bg-transparent text-[10px] text-[#d36d56]"
              type="button"
              onClick={resetFilters}
            >
              {pageContent.stays.reset}
            </button>
          </div>
          {filterGroups.map(({ title, options }) => (
            <FilterGroup
              key={title}
              title={title}
              selectedOptions={selectedFilters}
              onChange={toggleFilter}
              options={options.map(([label, count, checked]) => ({
                label,
                count,
                checked,
              }))}
            />
          ))}
        </aside>
        <section className="min-w-0 pt-[103px] max-[760px]:pt-0">
          <div className="mb-4 flex items-center justify-between text-xs text-[#71807d]">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <button
                  className="rounded border-0 bg-[#e8f0eb] px-3 py-2 text-left text-[#526866]"
                  key={filter}
                  type="button"
                  onClick={() => toggleFilter(filter)}
                  aria-label={`Remove ${filter} filter`}
                >
                  {filter} ×
                </button>
              ))}
            </div>
            <span>{pageContent.stays.sort}</span>
          </div>
          <div className="grid gap-4">
            {visibleHotels.length > 0 ? (
              visibleHotels.map((stay) => (
                <StayCard key={stay.id} stay={stay} />
              ))
            ) : (
              <p className="text-sm text-[#71807d]">
                {pageContent.stays.noResults}
              </p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
