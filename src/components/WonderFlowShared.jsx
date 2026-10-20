import { siteContent } from "../data/content.js";

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
      className="line-icon"
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
    <header className="app-header relative flex h-[clamp(59px,8vh,80px)] items-center gap-6 bg-[#fcfcfa] px-[47px] max-[760px]:h-[68px] max-[760px]:px-[22px]">
      <a
        className="mr-auto font-['Lora',Georgia,serif] text-2xl font-semibold leading-none tracking-[-.7px] text-[#245556] no-underline"
        href="/"
        onClick={(event) => handleNavigation(event, "/")}
        aria-label={siteContent.header.homeLabel}
      >
        {siteContent.brand}
        <span>.</span>
      </a>
      <nav
        className="absolute left-1/2 flex h-full -translate-x-1/2 gap-[25px] max-[760px]:hidden"
        aria-label={siteContent.header.primaryNavigation}
      >
        {siteContent.navigation.map(({ label, href }) => (
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
          {siteContent.header.language}
        </button>
        <button
          className="cursor-pointer rounded border border-[#dfe3df] bg-white px-[14px] py-2 text-xs font-semibold text-[#245556]"
          type="button"
        >
          {siteContent.header.book}
        </button>
      </div>
      <button
        className="hidden cursor-pointer border-0 bg-transparent text-sm font-semibold text-[#245556] max-[760px]:block"
        type="button"
      >
        {siteContent.header.menu}
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer flex items-center justify-between border-t border-[#d7e1dc] bg-[#edf3ef] px-[clamp(32px,5vw,90px)] py-5 text-xs text-[#58716b] max-[760px]:grid max-[760px]:gap-3 max-[760px]:px-[25px]">
      <p className="m-0">{siteContent.footer.copyright}</p>
      <nav
        className="flex gap-6 max-[760px]:gap-4"
        aria-label={siteContent.header.footerNavigation}
      >
        {siteContent.footer.links.map(({ label, href }) => (
          <a
            className="text-inherit no-underline hover:text-[#245556]"
            href={href}
            key={label}
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

export function SearchField({ icon, label, value }) {
  return (
    <div className="flex min-w-0 flex-1 items-center max-[760px]:col-span-2">
      <LineIcon name={icon} />
      <div>
        <span className="mb-[3px] block whitespace-nowrap text-[10px] font-semibold text-[#a4adab]">
          {label}
        </span>
        <span className="block whitespace-nowrap text-sm text-[#526866]">
          {value}
        </span>
      </div>
    </div>
  );
}
