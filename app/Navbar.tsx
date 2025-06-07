"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function normalizePath(path: string | null): string {
  if (!path || path === "") return "/";
  // Remove query string and hash
  const cleanPath = path.split(/[?#]/)[0];
  // Remove trailing slash except for root
  return cleanPath.length > 1 && cleanPath.endsWith("/")
    ? cleanPath.slice(0, -1)
    : cleanPath;
}

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const rawPathname = usePathname();
  const pathname = normalizePath(rawPathname);

  if (!mounted) return null; // Prevent SSR mismatch

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center gap-10 px-10 py-5 z-30 bg-gradient-to-r from-black/90 via-blue-950/80 to-yellow-900/70 backdrop-blur-2xl border-b-2 border-blue-400/30 shadow-2xl shadow-blue-900/30 animate-fade-in-down">
      {/* Wrap all nav items in a fragment */}
      <>
        <span className="text-white text-3xl font-extrabold tracking-widest mr-14 select-none flex items-center gap-3 drop-shadow-lg">
          <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-blue-700 bg-clip-text text-transparent animate-gradient-x">
            GJ
          </span>
        </span>
        <Link
          href="/"
          className={`relative text-lg tracking-widest pb-1 transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-blue-400 after:rounded-full ${
            pathname === "/"
              ? "text-white font-bold border-b-2 border-blue-400 after:opacity-100"
              : "text-blue-200 font-semibold hover:text-yellow-300 hover:scale-110 after:opacity-0"
          }`}
        >
          HOME
        </Link>
        <Link
          href="/cv"
          className={`relative text-lg tracking-widest pb-1 transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 ${
            pathname.startsWith("/cv")
              ? "text-white font-bold border-b-2 border-blue-400 after:opacity-100"
              : "text-blue-200 font-semibold hover:text-yellow-300 hover:scale-110"
          }`}
        >
          CV
        </Link>
        <Link
          href="/bio"
          className={`relative text-lg tracking-widest pb-1 transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 ${
            pathname.startsWith("/bio")
              ? "text-white font-bold border-b-2 border-blue-400 after:opacity-100"
              : "text-blue-200 font-semibold hover:text-yellow-300 hover:scale-110"
          }`}
        >
          BIO
        </Link>
        <Link
          href="/publications"
          className={`relative text-lg tracking-widest pb-1 transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 ${
            pathname.startsWith("/publications")
              ? "text-white font-bold border-b-2 border-blue-400 after:opacity-100"
              : "text-blue-200 font-semibold hover:text-yellow-300 hover:scale-110"
          }`}
        >
          PUBLICATIONS
        </Link>
        <Link
          href="/blog"
          className={`relative text-lg tracking-widest pb-1 transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 ${
            pathname.startsWith("/blog")
              ? "text-white font-bold border-b-2 border-blue-400 after:opacity-100"
              : "text-blue-200 font-semibold hover:text-yellow-300 hover:scale-110"
          }`}
        >
          BLOG
        </Link>
        <div className="ml-auto flex items-center gap-5">
          <a
            href="https://scholar.google.com/citations?user=qsIjwG4AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-200 group"
          >
            <Image
              src="/globe.svg"
              alt="GitHub"
              width={32}
              height={32}
              className="w-8 h-8 opacity-80 group-hover:opacity-100 drop-shadow-md group-hover:drop-shadow-blue-400 animate-bounce"
            />
          </a>
          <a
            href="mailto:gaganjain1582@microsoft.com"
            className="hover:scale-125 transition-transform duration-200 group"
          >
            <Image
              src="/vercel.svg"
              alt="Email"
              width={32}
              height={32}
              className="w-8 h-8 opacity-80 group-hover:opacity-100 drop-shadow-md group-hover:drop-shadow-yellow-400 animate-pulse"
            />
          </a>
        </div>
      </>
    </nav>
  );
}