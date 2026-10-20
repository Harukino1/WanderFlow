const navigationLinks = [
  { label: 'Explore', href: '#explore', active: true },
  { label: 'Stays', href: '#stays' },
  { label: 'Tours', href: '#tours' },
  { label: 'Trip planner', href: '#planner' },
]

const searchFields = [
  { icon: 'location', label: 'DESTINATION', value: 'Biri Island, Northern Samar' },
  { icon: 'calendar', label: 'CHECK-IN / CHECK-OUT', value: '17 Oct – 20 Oct 2026' },
  { icon: 'people', label: 'GUESTS & ROOMS', value: '2 adults · 1 room' },
]

const featureHighlights = [
  { icon: 'sparkle', text: 'Handpicked, never endless' },
  { icon: 'shield', text: 'Book with peace of mind' },
  { icon: 'map', text: 'Every detail, one itinerary' },
  { icon: 'heart', text: 'Local people. Lasting memories.' },
]

function LineIcon({ name }) {
  const paths = {
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></>,
    heart: <path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15M15 6v15" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0 0-6M17 14a5 5 0 0 1 4 5" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    shield: <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Zm-3 9 2 2 4-4" />,
    sparkle: <><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" /></>,
  }

  return <svg className="line-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Header() {
  return (
    <header className="app-header flex items-center gap-6 bg-[#fcfcfa] px-[47px] max-[760px]:h-[68px] max-[760px]:px-[22px]">
      <a
        className="mr-auto font-['Lora',Georgia,serif] text-2xl font-semibold leading-none tracking-[-.7px] text-[#245556] no-underline"
        href="/"
        aria-label="WonderFlow home"
      >
        WonderFlow<span>.</span>
      </a>

      <nav className="flex h-full gap-[25px] max-[760px]:hidden" aria-label="Primary navigation">
        {navigationLinks.map(({ label, href, active }) => (
          <a
            className={`relative flex items-center text-sm no-underline ${active
              ? 'text-[#225354] after:absolute after:bottom-[14px] after:left-0 after:right-0 after:h-0.5 after:bg-[#d36d56]'
              : 'text-[#8a9691]'}`}
            href={href}
            key={label}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="ml-[34px] flex items-center gap-[15px] max-[760px]:hidden">
        <button className="cursor-pointer border-0 bg-transparent p-0 text-xs text-[#385f5e]" type="button">
          EN / PHP⌄
        </button>
        <button className="cursor-pointer rounded border border-[#dfe3df] bg-white px-[14px] py-2 text-xs font-semibold text-[#245556]" type="button">
          Book Now
        </button>
      </div>

      <button className="hidden cursor-pointer border-0 bg-transparent text-sm font-semibold text-[#245556] max-[760px]:block" type="button">
        Menu
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section
      className="app-hero relative bg-[linear-gradient(90deg,rgba(9,37,38,.62),rgba(9,37,38,.1)_68%),url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-[center_57%] text-white max-[760px]:h-[510px] max-[760px]:bg-[58%_center]"
      id="explore"
    >
      <div className="px-[47px] pt-[62px] max-[760px]:px-[25px] max-[760px]:pt-[65px]">
        <p className="mb-[18px] text-xs font-semibold tracking-[.1px]">LESS ORDINARY. MORE YOU.</p>
        <h1 className="mb-[17px] font-['Lora',Georgia,serif] text-[clamp(47px,4.2vw,68px)] font-semibold leading-[1.08] tracking-[-1.2px] max-[760px]:text-[clamp(37px,10vw,48px)]">
          A whole journey,
          <br />
          brought together by
          <br />
          you.
        </h1>
        <p className="text-base leading-[1.45] text-white/90">
          Beautiful places to stay. Local stories to step into.
          <br />
          A whole journey, brought together by you.
        </p>
      </div>
      <p className="hero-caption absolute right-[46px] m-0 rounded-full bg-[rgba(9,37,38,.48)] px-3 py-1.5 text-xs font-medium text-white max-[760px]:right-[25px]">
        A tropical escape along Albay Bay, Mayon
      </p>
    </section>
  )
}

function SearchField({ icon, label, value }) {
  return (
    <div className="flex min-w-0 flex-1 items-center max-[760px]:col-span-2">
      <LineIcon name={icon} />
      <div>
        <span className="mb-[3px] block whitespace-nowrap text-[10px] font-semibold text-[#a4adab]">{label}</span>
        <span className="block whitespace-nowrap text-sm text-[#526866]">{value}</span>
      </div>
    </div>
  )
}

function SearchPanel() {
  return (
    <section
      className="trip-search absolute left-[47px] right-[47px] min-h-[86px] rounded-lg border border-[#e1e4e0] bg-white px-[15px] pb-[13px] pt-[14px] shadow-[0_8px_18px_rgba(31,65,60,.09)] max-[760px]:left-4 max-[760px]:right-4 max-[760px]:top-[390px] max-[760px]:p-[14px]"
      aria-label="Search for a trip"
    >
      <div className="flex h-5 gap-[26px]">
        <button className="cursor-pointer border-0 bg-transparent p-0 text-sm font-semibold text-[#285657]" type="button">Stays</button>
        <button className="cursor-pointer border-0 bg-transparent p-0 text-sm text-[#9aa3a0]" type="button">Tours &amp; experiences</button>
        <button className="cursor-pointer border-0 bg-transparent p-0 text-sm text-[#9aa3a0]" type="button">Build a trip</button>
      </div>
      <div className="flex items-center gap-[25px] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-x-2 max-[760px]:gap-y-[14px]">
        {searchFields.map((field) => <SearchField {...field} key={field.label} />)}
        <button className="min-w-[123px] cursor-pointer rounded-[5px] border-0 bg-[#235a5b] px-[13px] py-[11px] text-sm font-semibold text-white max-[760px]:col-span-2 max-[760px]:w-full" type="button">
          Find your stay <LineIcon name="search" />
        </button>
      </div>
    </section>
  )
}

function FeatureHighlights() {
  return (
    <section className="feature-highlights flex justify-between px-[68px] pt-[73px] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-x-3 max-[760px]:gap-y-[22px] max-[760px]:px-[25px] max-[760px]:pb-[30px] max-[760px]:pt-20">
      {featureHighlights.map(({ icon, text }) => <div className="flex items-center gap-3 text-sm text-[#244f50]" key={text}><LineIcon name={icon} />{text}</div>)}
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer flex items-center justify-between border-t border-[#d7e1dc] bg-[#edf3ef] px-[clamp(32px,5vw,90px)] py-5 text-xs text-[#58716b] max-[760px]:grid max-[760px]:gap-3 max-[760px]:px-[25px]">
      <p className="m-0">© 2026 WonderFlow. Travel with intention.</p>
      <nav className="flex gap-6 max-[760px]:gap-4" aria-label="Footer navigation">
        <a className="text-inherit no-underline hover:text-[#245556]" href="#about">About</a>
        <a className="text-inherit no-underline hover:text-[#245556]" href="#contact">Contact</a>
        <a className="text-inherit no-underline hover:text-[#245556]" href="#privacy">Privacy</a>
      </nav>
    </footer>
  )
}

function App() {
  return (
    <main className="app-shell relative overflow-hidden bg-white font-['Inter',Arial,sans-serif] text-[#244f50]">
      <Header />
      <Hero />
      <SearchPanel />
      <FeatureHighlights />
      <Footer />
    </main>
  )
}

export default App
