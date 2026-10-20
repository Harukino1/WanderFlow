import {
  CatalogImage,
  Footer,
  Header,
  LineIcon,
  PlaceholderImage,
} from "../components/WonderFlowShared.jsx";
import { useMemo, useState } from "react";
import { pageContent, tours } from "../data/content.js";

function TourSearch() {
  const { searchFields } = pageContent.tours;

  return (
    <section className="tour-search mx-auto flex max-w-[1280px] items-center gap-8 rounded-lg border border-[#e1e4df] bg-white px-5 py-3 shadow-[0_8px_18px_rgba(31,65,60,.08)] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-4">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <LineIcon name="location" />
        <div>
          <span className="block text-[10px] font-semibold text-[#a4adab]">
            {searchFields[0].label}
          </span>
          <span className="text-sm text-[#526866]">
            {searchFields[0].value}
          </span>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <LineIcon name="calendar" />
        <div>
          <span className="block text-[10px] font-semibold text-[#a4adab]">
            {searchFields[1].label}
          </span>
          <span className="text-sm text-[#526866]">
            {searchFields[1].value}
          </span>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <LineIcon name="people" />
        <div>
          <span className="block text-[10px] font-semibold text-[#a4adab]">
            {searchFields[2].label}
          </span>
          <span className="text-sm text-[#526866]">
            {searchFields[2].value}
          </span>
        </div>
      </div>
      <button
        className="rounded-[5px] border-0 bg-[#235a5b] px-4 py-3 text-sm font-semibold text-white max-[760px]:col-span-2"
        type="button"
      >
        Find tours <LineIcon name="search" />
      </button>
    </section>
  );
}

function TourCard({ tour }) {
  const openDetails = () => {
    window.history.pushState({}, "", `/tours/${tour.id}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <article
      className="cursor-pointer overflow-hidden rounded-lg border border-[#dfe4df] bg-white"
      onClick={openDetails}
    >
      <div className="relative">
        <CatalogImage
          className="h-[155px] w-full object-cover"
          item={tour}
        />
        <span className="absolute left-3 top-3 rounded bg-white px-2 py-1 text-[10px] font-semibold text-[#397071]">
          {pageContent.tours.cardCategory}
        </span>
        <button
          className="absolute right-3 top-3 rounded-full border-0 bg-white p-2 text-[#397071]"
          type="button"
          aria-label={`Save ${tour.title}`}
        >
          <LineIcon name="heart" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-[10px] text-[#8a9691]">
          <span>{tour.location}</span>
          <span>
            ★ {tour.rating}
          </span>
        </div>
        <h2 className="mb-2 mt-2 font-['Lora',Georgia,serif] text-[22px] font-medium leading-tight">
          {tour.title}
        </h2>
        <p className="m-0 min-h-[42px] text-xs leading-5 text-[#71807d]">
          {tour.description} Guide, equipment, and entrance fees included.
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-[#e3e6e1] pt-3">
          <strong className="text-lg">
            {tour.getFormattedPrice().replace("/person", "")}
            <span className="text-[10px] font-normal text-[#71807d]">
              {" "}
              / person
            </span>
          </strong>
          <span className="text-sm text-[#397071]">
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}

function FilterGroup({ title, options, selectedOptions, onChange }) {
  return (
    <fieldset className="border-0 border-t border-[#e3e6e1] px-0 py-4">
      <legend className="mb-3 text-sm font-semibold">{title}</legend>
      <div className="grid gap-3">
        {options.map((option) => (
          <label
            className="flex items-center gap-2 text-xs text-[#526866]"
            key={option}
          >
            <input
              className="accent-[#235a5b]"
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function TourPage() {
  const [selectedCategory, setSelectedCategory] = useState("All experiences");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const toggleFilter = (filter) =>
    setSelectedFilters((current) =>
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter],
    );
  const filterGroups = [
    {
      title: "Explore around",
      options: [...new Set(tours.map((tour) => tour.location.split(" · ")[0]))],
    },
    {
      title: "Time well spent",
      options: ["Half day", "Full day"],
    },
  ];
  const visibleTours = useMemo(
    () =>
      tours.filter((tour) => {
        const categoryMatch =
          selectedCategory === "All experiences" ||
          tour.category === selectedCategory;
        const filtersMatch = selectedFilters.every(
          (filter) =>
            tour.location.startsWith(filter) ||
            (filter === "Half day" && tour.durationHours <= 4) ||
            (filter === "Full day" && tour.durationHours > 4),
        );
        return categoryMatch && filtersMatch;
      }),
    [selectedCategory, selectedFilters],
  );
  const resetFilters = () => {
    setSelectedCategory("All experiences");
    setSelectedFilters([]);
  };

  return (
    <main className="tour-page bg-[#faf9f4] font-['Inter',Arial,sans-serif] text-[#244f50]">
      <Header activePage="tours" />
      <section className="tour-hero flex items-center justify-between gap-10 bg-[#f0ede4] px-[clamp(32px,6vw,90px)] py-3 max-[760px]:grid max-[760px]:gap-5">
        <div className="max-w-[470px]">
          <p className="mb-3 text-[10px] font-semibold uppercase text-[#d36d56]">
            {pageContent.tours.heroEyebrow}
          </p>
          <h1 className="m-0 whitespace-pre-line font-['Lora',Georgia,serif] text-[clamp(36px,4vw,54px)] font-medium leading-[1.1]">
            {pageContent.tours.heroTitle}
          </h1>
          <p className="mt-4 text-sm leading-5 text-[#71807d]">
            {pageContent.tours.heroDescription}
          </p>
        </div>
        <PlaceholderImage
          className="h-[180px] w-[52%] rounded-lg max-[760px]:h-52 max-[760px]:w-full"
          label="Tour hero photo placeholder — choose a Philippine destination photo"
        />
      </section>
      <div className="px-[clamp(32px,6vw,90px)] py-4">
        <TourSearch />
        <div className="mt-4 flex flex-wrap gap-2">
          {pageContent.tours.categories.map((category) => (
            <button
              className={`rounded-full border px-4 py-1.5 text-xs ${category === selectedCategory ? "border-[#235a5b] bg-[#235a5b] text-white" : "border-[#e1e4df] bg-transparent text-[#526866]"}`}
              type="button"
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-[220px_1fr] gap-7 max-[760px]:grid-cols-1">
          <aside>
            <div className="mb-2 flex items-center justify-between">
              <strong className="text-sm">
                {pageContent.tours.filterTitle}
              </strong>
              <button
                className="border-0 bg-transparent text-[10px] text-[#d36d56]"
                type="button"
                onClick={resetFilters}
              >
                {pageContent.tours.reset}
              </button>
            </div>
            {filterGroups.map(({ title, options }) => (
              <FilterGroup
                title={title}
                options={options}
                selectedOptions={selectedFilters}
                onChange={toggleFilter}
                key={title}
              />
            ))}
          </aside>
          <section>
            <div className="mb-4 flex justify-between text-xs text-[#71807d]">
              <strong>{pageContent.tours.results}</strong>
              <span>{pageContent.tours.sort}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
              {visibleTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
