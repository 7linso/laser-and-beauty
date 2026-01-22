'use client'

import Link from "next/link";
import { useState } from "react";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
  FiChevronDown,
} from "react-icons/fi";

export default function Footer() {
  const facebookLink =
    "https://www.instagram.com/laser_byolga_wpg?igsh=Mmc5MjY1MHo0cjJl";
  const instaLink =
    "https://www.facebook.com/share/16Czft5XRS/?mibextid=LQQJ4d";

  const emailOwner = "olga.rogozjanskaja@gmail.com";
  const emailOwnerSubject = encodeURIComponent("Contact request");
  const emailOwnerBody = encodeURIComponent(
    "Hello, I would like to get in touch.",
  );
  const phoneOwner = "+1 431-336-3315";

  const bookingLink = process.env.NEXT_PUBLIC_BOOKING_LINK;
  if (!bookingLink) throw new Error("NEXT_PUBLIC_BOOKING_LINK is not defined");

  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesItems = [
    { href: "/services/manicure-pedicure", label: "Nails Care" },
    { href: "/services/sugaring-and-waxing", label: "Waxing & Sugaring" },
    { href: "/services/laser-hair-removal", label: "Laser Hair Removal" },
    { href: "/services/laser-treatments", label: "Laser Treatments" },
    { href: "/services/lashes-and-brows", label: "Lashes & Brows" },
  ];

  return (
    <footer className="bg-teal-900 text-gray-200 pt-5 sm:pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="team-grid gap-8">
         
          <div>
            <p className="text-sm font-semibold mb-3">Navigation</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/locations"
                  className="hover:text-teal-100 transition text-sm"
                >
                  Locations
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="hover:text-teal-100 transition text-sm inline-flex items-center gap-1"
                  aria-expanded={servicesOpen}
                  aria-controls="footer-services-menu"
                >
                  Services
                  <FiChevronDown
                    className={[
                      "h-4 w-4 transition-transform",
                      servicesOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                <div
                  id="footer-services-menu"
                  className={[
                    "mt-2 overflow-hidden transition-all duration-200 ease-out",
                    servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <ul className="ml-2 space-y-1 border-l border-white/10 pl-3">
                    {servicesItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="hover:text-teal-100 transition text-sm block py-0.5"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/trainings"
                  className="hover:text-teal-100 transition text-sm"
                >
                  Trainings
                </Link>
              </li>
              <li>
                <Link
                  href={bookingLink}
                  className="hover:text-teal-100 transition text-sm"
                >
                  Book
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Follow Us</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href={instaLink}
                  className="hover:text-teal-100 transition text-sm flex items-center gap-1"
                >
                  <FiInstagram />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={facebookLink}
                  className="hover:text-teal-100 transition text-sm flex items-center gap-1"
                >
                  <FiFacebook />
                  Facebook
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">
              &copy; {new Date().getFullYear()} Laser&Beauty by Olga
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${emailOwner}?subject=${emailOwnerSubject}&body=${emailOwnerBody}`}
                  className="hover:text-teal-100 transition text-sm flex items-center gap-1"
                >
                  <FiMail />
                  {emailOwner}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phoneOwner}`}
                  className="hover:text-teal-100 transition text-sm flex items-center gap-1"
                >
                  <FiPhone />
                  {phoneOwner}
                </a>
              </li>
              <li>
                <a
                  href="mailto:sfarmysf@gmail.com"
                  className="hover:text-teal-100 transition text-sm"
                >
                  Contact Dev
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
