"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);

  const pathname = usePathname();

  const closeTimerRef = useRef<number | null>(null);
  const cancelClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 160);
  };

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setServicesMobileOpen(false);
  }, [pathname]);

  const bookingLink = process.env.NEXT_PUBLIC_BOOKING_LINK;
  if (!bookingLink) throw new Error("NEXT_PUBLIC_BOOKING_LINK is not defined");

  const logoLink = process.env.NEXT_PUBLIC_LOGO;
  if (!logoLink) throw new Error("NEXT_PUBLIC_LOGO is not defined");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const servicesButtonRef = useRef<HTMLButtonElement | null>(null);

  const [dropdownLeft, setDropdownLeft] = useState(0);

  const computeDropdownLeft = () => {
    const container = containerRef.current;
    const btn = servicesButtonRef.current;
    if (!container || !btn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const left = btnRect.left - containerRect.left;

    setDropdownLeft(left);
  };

  useLayoutEffect(() => {
    if (servicesOpen) computeDropdownLeft();
  }, [servicesOpen]);

  useEffect(() => {
    const onResize = () => {
      if (servicesOpen) computeDropdownLeft();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 text-gray-100">
      <nav className="relative">
        <div className="relative z-20 bg-teal-900 shadow-lg backdrop-blur-lg transition-all duration-300">
          <div
            ref={containerRef}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 text-xl font-semibold text-white">
                <Link href="/" className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
                    <Image
                      src={logoLink}
                      alt="icon"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <span className="ml-2 transition hover:text-teal-100">
                    Laser&Beauty by Olga
                  </span>
                </Link>
              </div>

              {/* Mobile burger */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen((v) => !v)}
                  className="text-2xl text-white transition duration-200 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>

              {/* Desktop nav */}
              <div className="hidden items-center space-x-8 font-medium md:flex">
                <Link
                  href="/locations"
                  className="transition duration-200 hover:text-teal-300"
                >
                  Locations
                </Link>

                {/* Services trigger */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    computeDropdownLeft();
                    setServicesOpen(true);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    ref={servicesButtonRef}
                    type="button"
                    onClick={() => {
                      setServicesOpen((v) => {
                        const next = !v;
                        if (next) {
                          requestAnimationFrame(computeDropdownLeft);
                        }
                        return next;
                      });
                    }}
                    className={[
                      "inline-flex items-center gap-2 transition duration-200 hover:text-teal-300",
                      servicesOpen ? "text-teal-200" : "",
                    ].join(" ")}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                  >
                    Services
                    <FiChevronDown
                      className={[
                        "h-4 w-4 transition-transform",
                        servicesOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>
                </div>

                <Link
                  href="/trainings"
                  className="transition duration-200 hover:text-teal-300"
                >
                  Trainings
                </Link>

                <Link
                  href={bookingLink}
                  className="rounded-full bg-gradient-to-r from-teal-600 to-teal-400 px-6 py-2 font-semibold text-white shadow-md transition hover:from-teal-700 hover:to-teal-500"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Mobile menu  */}
            {isOpen && (
              <div className="flex flex-col space-y-3 py-4 text-center font-medium md:hidden">
                <Link
                  href="/locations"
                  className="transition duration-200 hover:text-teal-300"
                >
                  Locations
                </Link>

                <button
                  type="button"
                  onClick={() => setServicesMobileOpen((v) => !v)}
                  className="mx-auto inline-flex items-center gap-2 transition duration-200 hover:text-teal-300"
                  aria-expanded={servicesMobileOpen}
                >
                  Services
                  <FiChevronDown
                    className={[
                      "h-4 w-4 transition-transform",
                      servicesMobileOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {servicesMobileOpen && (
                  <div className="mx-auto flex w-full max-w-xs flex-col gap-2.5">
                    <Link
                      href="/services/manicure-pedicure"
                      onClick={() => setServicesMobileOpen(false)}
                      className="text-sm transition"
                      role="menuitem"
                    >
                      Nails Care
                    </Link>

                    <Link
                      href="/services/wax-hair-removal"
                      onClick={() => setServicesMobileOpen(false)}
                      className="text-sm transition"
                      role="menuitem"
                    >
                      Wax
                    </Link>

                    <Link
                      href="/services/laser-hair-removal"
                      onClick={() => setServicesMobileOpen(false)}
                      className="text-sm transition"
                      role="menuitem"
                    >
                      Laser
                    </Link>
                  </div>
                )}

                <Link
                  href="/trainings"
                  className="transition duration-200 hover:text-teal-300"
                >
                  Trainings
                </Link>

                <Link
                  href={bookingLink}
                  className="mx-auto w-fit rounded-full bg-gradient-to-r from-teal-600 to-teal-400 px-6 py-2 font-semibold text-white shadow-md transition hover:from-teal-700 hover:to-teal-500"
                >
                  Book Now
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP DROPDOWN */}
        <div
          className="absolute left-0 right-0 top-0 z-10 hidden md:block pt-16"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div style={{ left: dropdownLeft }} className="relative -ml-18">
              <div
                className={[
                  "w-40 overflow-hidden rounded-b-2xl",
                  "bg-teal-900/95 text-gray-100 ring-1 ring-white/10 backdrop-blur",
                  "shadow-lg",
                  "origin-top transition-all duration-200 ease-out",
                  servicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0",
                ].join(" ")}
                role="menu"
              >
                <div className="h-px w-full bg-white/10" />
                <div className="p-2">
                  <Link
                    href="/services/manicure-pedicure"
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm transition hover:bg-white/10 hover:text-teal-200"
                    role="menuitem"
                  >
                    Nails Care
                  </Link>

                  <Link
                    href="/services/wax-hair-removal"
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm transition hover:bg-white/10 hover:text-teal-200"
                    role="menuitem"
                  >
                    Wax
                  </Link>

                  <Link
                    href="/services/laser-hair-removal"
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm transition hover:bg-white/10 hover:text-teal-200"
                    role="menuitem"
                  >
                    Laser
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
