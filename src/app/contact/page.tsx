"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
    <main className="min-h-screen bg-white pt-20">
      <div className="flex flex-col md:flex-row min-h-[calc(100dvh-5rem)]">
        {/* Image side */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-stone-200">
          <Image
            src="/images/projects/earthen-retreat/exterior-front.jpg"
            alt="Architectural detail"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Form side */}
        <div className="flex w-full md:w-1/2 items-center justify-center px-8 py-16 md:px-16">
          <div className="w-full max-w-md">
            <h1 className="font-serif text-3xl md:text-5xl font-light text-stone-900 tracking-wide">
              Let&rsquo;s create something meaningful
            </h1>
            <p className="mt-4 text-stone-500 font-light leading-relaxed">
              Every home begins with a dream and a conversation. Tell us about
              the space you&rsquo;re imagining — we&rsquo;d love to listen.
            </p>
            <p className="mt-4 text-stone-400 font-light text-sm">
              {siteConfig.contact.email}
              <br />
              {siteConfig.contact.location}
            </p>

            {submitted ? (
              <div className="mt-10 p-8 bg-earth-50 text-center">
                <p className="text-lg text-stone-700 font-light">
                  Thank you for your message. We&rsquo;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                action={`https://formspree.io/f/${siteConfig.contact.formspreeId}`}
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="mt-10 space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm tracking-[0.1em] uppercase text-stone-500 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-900 font-light focus:border-stone-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm tracking-[0.1em] uppercase text-stone-500 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-900 font-light focus:border-stone-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm tracking-[0.1em] uppercase text-stone-500 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-900 font-light focus:border-stone-900 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 text-sm tracking-[0.2em] uppercase text-stone-900 border border-stone-900 px-8 py-3 hover:bg-stone-900 hover:text-white transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
