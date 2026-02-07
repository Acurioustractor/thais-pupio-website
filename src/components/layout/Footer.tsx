import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm tracking-[0.15em] lowercase font-light text-stone-900">
              {siteConfig.name}
            </p>
            <p className="mt-0.5 text-xs tracking-[0.1em] uppercase text-stone-400">
              Architect of Living
            </p>
            <p className="mt-1 text-sm text-stone-500">
              {siteConfig.contact.location}
            </p>
          </div>

          <div className="flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-100 text-xs text-stone-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
