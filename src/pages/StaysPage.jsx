import { Footer, Header, LineIcon, SearchField } from '../components/WonderFlowShared.jsx'
import searchFields from '../data/searchFields.js'

const stays = [
  { image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=900&q=85', name: 'Your Brother House Tribal Village', location: 'Legazpi, Albay · 2.5 km from Mayon ATV Trails · Eco Resort', rating: '8.8', reviews: '665 reviews', description: 'A rustic, eco-friendly sanctuary offering traditional tribal vibes and uninterrupted Mayon Volcano views.', price: '₱1,304' },
  { image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85', name: 'Hotel Fina', location: 'Tabaco City, Albay · City Center · Boutique Hotel', rating: '9.1', reviews: '181 reviews', description: 'A modern urban retreat featuring a stylish rooftop pool, contemporary comfort, and sweeping skyline vistas.', price: '₱2,966' },
]

function StaysSearch() {
  return <section className="stays-search rounded-lg border border-[#e1e4df] bg-white px-5 py-4 shadow-[0_8px_18px_rgba(31,65,60,.08)]"><div className="flex items-center gap-8 max-[760px]:grid max-[760px]:gap-4">{searchFields.map((field) => <SearchField {...field} key={field.label} />)}<button className="min-w-[142px] rounded-[5px] border-0 bg-[#235a5b] px-4 py-3 text-sm font-semibold text-white" type="button">Find your stay <LineIcon name="search" /></button></div></section>
}

function FilterGroup({ title, options }) {
  return <fieldset className="border-0 border-t border-[#e3e6e1] px-0 py-5"><legend className="mb-3 text-sm font-semibold">{title}</legend><div className="grid gap-3">{options.map(({ label, count, checked }) => <label className="flex items-center gap-2 text-xs text-[#526866]" key={label}><input className="accent-[#235a5b]" type="checkbox" defaultChecked={checked} />{label} ({count})</label>)}</div></fieldset>
}

function StayCard({ stay }) {
  const openDetails = () => {
    window.history.pushState({}, '', '/stays/hotel-fina')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return <article className="stay-card grid grid-cols-[220px_1fr] overflow-hidden rounded-lg border border-[#dfe4df] bg-white max-[760px]:grid-cols-1">
    <img className="h-full min-h-[198px] w-full object-cover max-[760px]:h-52" src={stay.image} alt="" />
    <div className="flex min-w-0 flex-col p-4"><div className="flex items-start justify-between gap-3"><div><p className="mb-1 text-[10px] text-[#8a9691]">{stay.location}</p><h2 className="m-0 font-['Lora',Georgia,serif] text-2xl font-medium">{stay.name}</h2></div><button className="border-0 bg-transparent p-1 text-[#245556]" type="button" aria-label={`Save ${stay.name}`}><LineIcon name="heart" /></button></div><p className="my-2 text-xs text-[#526866]"><strong className="rounded bg-[#e8f0eb] px-2 py-1 text-[#397071]">{stay.rating}</strong> <b>Excellent</b> ({stay.reviews})</p><p className="m-0 text-xs leading-5 text-[#71807d]">{stay.description}</p><div className="mt-auto flex items-end justify-between border-t border-[#e3e6e1] pt-3"><span className="text-[10px] text-[#71807d]">✓ Free cancellation<br />No prepayment required</span><div className="flex items-center gap-4"><strong className="text-lg">{stay.price}<span className="text-[10px] font-normal"> / night</span></strong><button className="rounded bg-[#235a5b] px-4 py-2 text-xs font-semibold text-white" type="button" onClick={openDetails}>View rooms</button></div></div></div>
  </article>
}

export default function StaysPage() {
  return <main className="stays-page bg-[#faf9f4] font-['Inter',Arial,sans-serif] text-[#244f50]"><Header activePage="stays" /><div className="stays-search-wrap bg-[#f0ede4] px-[clamp(32px,6vw,90px)] py-6"><StaysSearch /></div><div className="stays-content mx-auto grid max-w-[1320px] grid-cols-[220px_1fr] gap-7 px-[clamp(32px,6vw,90px)] py-10 max-[760px]:grid-cols-1"><aside><p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[#d36d56]">Your hideaway awaits</p><h1 className="mb-7 font-['Lora',Georgia,serif] text-4xl font-medium leading-tight max-[760px]:text-3xl">Find the best place to stay.</h1><div className="flex items-center justify-between border-b border-[#e3e6e1] pb-4"><strong className="text-sm">Filter your stay</strong><button className="border-0 bg-transparent text-[10px] text-[#d36d56]" type="button">Reset all</button></div><FilterGroup title="The little extras" options={[{ label: 'Breakfast included', count: 19, checked: true }, { label: 'Swimming pool', count: 11 }, { label: 'Sea view', count: 21 }, { label: 'Private parking', count: 13 }, { label: 'Restaurant', count: 16 }]} /><FilterGroup title="Guest rating" options={[{ label: 'Exceptional · 9+', count: 18, checked: true }, { label: 'Very good · 8+', count: 24 }]} /></aside><section className="pt-[103px] max-[760px]:pt-0"><div className="mb-4 flex items-center justify-between text-xs text-[#71807d]"><span className="rounded bg-[#e8f0eb] px-3 py-2">Breakfast included ×</span><span>Sort: Our favorites⌄</span></div><div className="grid gap-4">{stays.map((stay) => <StayCard key={stay.name} stay={stay} />)}</div></section></div><Footer /></main>
}
