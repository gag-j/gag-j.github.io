"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  // Close menu on route change
  React.useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-black/90 via-blue-950/80 to-yellow-900/70 backdrop-blur-2xl border-b-2 border-blue-400/30 shadow-2xl shadow-blue-900/30 animate-fade-in-down">
      <div className="flex items-center gap-4 md:gap-10 px-4 md:px-10 py-5">
        <span className="text-white text-3xl font-extrabold tracking-widest mr-6 md:mr-14 select-none flex items-center gap-3 drop-shadow-lg">
          <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-blue-700 bg-clip-text text-transparent animate-gradient-x">GJ</span>
        </span>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-auto text-white focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 flex-1">
          <NavLinks pathname={pathname} />
          <NavIcons />
        </div>
      </div>
      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-blue-400/20 px-6 pb-4 pt-2 animate-fade-in-down">
          <NavLinks pathname={pathname} />
          <div className="mt-4"><NavIcons /></div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ pathname }: { pathname: string }) {
  const linkClass = (active: boolean) =>
    `block relative text-lg tracking-widest pb-1 transition-all duration-200 my-2 md:my-0 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-blue-400 after:rounded-full ${
      active
        ? "text-white font-bold border-b-2 border-blue-400 after:opacity-100"
        : "text-blue-200 font-semibold hover:text-yellow-300 hover:scale-110 after:opacity-0"
    }`;
  return (
    <>
      <Link href="/" className={linkClass(pathname === "/")}>HOME</Link>
      <Link href="/cv" className={linkClass(pathname.startsWith("/cv"))}>CV</Link>
      <Link href="/bio" className={linkClass(pathname.startsWith("/bio"))}>BIO</Link>
      <Link href="/publications" className={linkClass(pathname.startsWith("/publications"))}>PUBLICATIONS</Link>
      <Link href="/blog" className={linkClass(pathname.startsWith("/blog"))}>BLOG</Link>
    </>
  );
}

function NavIcons() {
  return (
    <div className="flex items-center gap-6 mt-2 md:mt-0 justify-end w-full pr-2">
      {/* Google Scholar Icon */}
      <a
        href="https://scholar.google.com/citations?user=qsIjwG4AAAAJ&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-125 transition-transform duration-200 group"
        title="Google Scholar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="36" height="36" fill="none">
          <circle cx="24" cy="24" r="24" fill="#4285F4" />
          <path d="M24 13L36 28H12L24 13Z" fill="#fff"/>
          <rect x="18" y="30" width="12" height="3" rx="1.5" fill="#fff"/>
        </svg>
      </a>
      {/* Email Icon */}
      <a
        href="mailto:gaganjain1582@microsoft.com"
        className="hover:scale-125 transition-transform duration-200 group"
        title="Email"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
          <rect width="24" height="24" rx="6" fill="#22223b"/>
          <path d="M5 8.5l7 5 7-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="5" y="8" width="14" height="8" rx="2" stroke="#fff" strokeWidth="1.5"/>
        </svg>
      </a>
    </div>
  );
}