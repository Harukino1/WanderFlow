import { Footer, Header, LineIcon } from '../components/WonderFlowShared.jsx'

const categories = ['All experiences', 'Food & culture', 'On the water', 'Art & heritage', 'Walk & wander', 'Multi-day escapes']

const tours = [
  {
    name: 'Mayon Black Lava ATV Trail',
    location: 'ALBAY · 1 DAY',
    category: 'SIGNATURE ADVENTURE',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=85',
    description: 'Trail ride through pine trees, riverbeds, and rugged terrain directly to the 2006 Mayon lava wall.',
    price: '₱1,000',
    rating: '4.9',
  },
  {
    name: 'Flavors of Bicol Culinary Masterclass',
    location: 'CAMALIG · HALF DAY',
    category: 'FOOD & CULTURE',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85',
    description: 'Authentic Pinangat making in Camalig, artisanal sili ice cream tasting, and a traditional farm lunch.',
    price: '₱1,250',
    rating: '4.8',
  },
]

function TourSearch() {
  return (
    <section className="tour-search mx-auto flex max-w-[1280px] items-center gap-8 rounded-lg border border-[#e1e4df] bg-white px-5 py-3 shadow-[0_8px_18px_rgba(31,65,60,.08)] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-4">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <LineIcon name="location" />
        <div><span className="block text-[10px] font-semibold text-[#a4adab]">DESTINATION</span><span className="text-sm text-[#526866]">Mayon, Albay</span></div>
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <LineIcon name="calendar" />
        <div><span className="block text-[10px] font-semibold text-[#a4adab]">WHEN</span><span className="text-sm text-[#526866]">14–16 Jun 2027</span></div>
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <LineIcon name="people" />
        <div><span className="block text-[10px] font-semibold text-[#a4adab]">TRAVELERS</span><span className="text-sm text-[#526866]">2 adults</span></div>
      </div>
      <button className="rounded-[5px] border-0 bg-[#235a5b] px-4 py-3 text-sm font-semibold text-white max-[760px]:col-span-2" type="button">Find tours <LineIcon name="search" /></button>
    </section>
  )
}

function TourCard({ tour }) {
  const openDetails = () => {
    window.history.pushState({}, '', '/tours/mayon-black-lava-atv-trail')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <article className="cursor-pointer overflow-hidden rounded-lg border border-[#dfe4df] bg-white" onClick={openDetails}>
      <div className="relative">
        <img className="h-[155px] w-full object-cover" src={tour.image} alt="" />
        <span className="absolute left-3 top-3 rounded bg-white px-2 py-1 text-[10px] font-semibold text-[#397071]">{tour.category}</span>
        <button className="absolute right-3 top-3 rounded-full border-0 bg-white p-2 text-[#397071]" type="button" aria-label={`Save ${tour.name}`}><LineIcon name="heart" /></button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-[10px] text-[#8a9691]"><span>{tour.location}</span><span>★ {tour.rating}</span></div>
        <h2 className="mb-2 mt-2 font-['Lora',Georgia,serif] text-[22px] font-medium leading-tight">{tour.name}</h2>
        <p className="m-0 min-h-[42px] text-xs leading-5 text-[#71807d]">{tour.description} Guide, equipment, and entrance fees included.</p>
        <div className="mt-3 flex items-center justify-between border-t border-[#e3e6e1] pt-3">
          <strong className="text-lg">{tour.price}<span className="text-[10px] font-normal text-[#71807d]"> / person</span></strong>
          <span className="text-sm text-[#397071]">↗</span>
        </div>
      </div>
    </article>
  )
}

function FilterGroup({ title, options }) {
  return (
    <fieldset className="border-0 border-t border-[#e3e6e1] px-0 py-4">
      <legend className="mb-3 text-sm font-semibold">{title}</legend>
      <div className="grid gap-3">{options.map((option) => <label className="flex items-center gap-2 text-xs text-[#526866]" key={option}><input className="accent-[#235a5b]" type="checkbox" />{option}</label>)}</div>
    </fieldset>
  )
}

export default function TourPage() {
  return (
    <main className="tour-page bg-[#faf9f4] font-['Inter',Arial,sans-serif] text-[#244f50]">
      <Header activePage="tours" />
      <section className="tour-hero flex items-center justify-between gap-10 bg-[#f0ede4] px-[clamp(32px,6vw,90px)] py-3 max-[760px]:grid max-[760px]:gap-5">
        <div className="max-w-[470px]"><p className="mb-3 text-[10px] font-semibold uppercase text-[#d36d56]">LESS SIGHTSEEING. MORE FEELING.</p><h1 className="m-0 font-['Lora',Georgia,serif] text-[clamp(36px,4vw,54px)] font-medium leading-[1.1]">The coast is better<br />with a local.</h1><p className="mt-4 text-sm leading-5 text-[#71807d]">From salt-in-your-hair boat days to recipes passed down for generations. These are the moments that make a journey.</p></div>
        <img className="h-[180px] w-[52%] rounded-lg object-cover max-[760px]:h-52 max-[760px]:w-full" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85" alt="A boat along the Amalfi coast" />
      </section>
      <div className="px-[clamp(32px,6vw,90px)] py-4"><TourSearch /><div className="mt-4 flex flex-wrap gap-2">{categories.map((category, index) => <button className={`rounded-full border px-4 py-1.5 text-xs ${index === 0 ? 'border-[#235a5b] bg-[#235a5b] text-white' : 'border-[#e1e4df] bg-transparent text-[#526866]'}`} type="button" key={category}>{category}</button>)}</div>
        <div className="mt-5 grid grid-cols-[220px_1fr] gap-7 max-[760px]:grid-cols-1"><aside><div className="mb-2 flex items-center justify-between"><strong className="text-sm">Find your kind of day</strong><button className="border-0 bg-transparent text-[10px] text-[#d36d56]" type="button">Reset</button></div><FilterGroup title="Explore around" options={['Legazpi & Daraga (12)', 'Tabaco & Malilipot (8)', 'Camalig & Guinobatan (5)']} /><FilterGroup title="Time well spent" options={['Half day · up to 4 hours (7)', 'Full day · 5–9 hours (6)', 'Multi-day · 2+ days (5)']} /><FilterGroup title="Budget per person" options={['₱50', '₱600']} /></aside><section><div className="mb-4 flex justify-between text-xs text-[#71807d]"><strong>Experiences</strong><span>Sort: Our favorites⌄</span></div><div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">{tours.map((tour) => <TourCard key={tour.name} tour={tour} />)}</div></section></div>
      </div>
      <Footer />
    </main>
  )
}
