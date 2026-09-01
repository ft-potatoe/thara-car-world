"use client";

import { Star } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { businessInfo, googleReviews } from "@/lib/i18n/dictionary";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={i < count ? "h-4 w-4 fill-amber-400 text-amber-400" : "h-4 w-4 text-neutral-300"}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews({
  ratingLabel,
  viewAll,
}: {
  ratingLabel: string;
  viewAll: string;
}) {
  return (
    <div className="rounded-3xl bg-chrome-light p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
          <path fill="#FFC107" d="M43.6 20.5H42V20.4H24v7.2h11.3c-1.6 4.7-6.1 8.1-11.3 8.1-6.7 0-12.1-5.4-12.1-12.1S17.3 11.5 24 11.5c3.1 0 5.9 1.2 8 3.1l5.4-5.4C34.1 6.2 29.3 4.3 24 4.3 12.9 4.3 3.9 13.3 3.9 24.4S12.9 44.5 24 44.5c11.1 0 20.1-9 20.1-20.1 0-1.3-.1-2.7-.5-3.9z" />
          <path fill="#FF3D00" d="m6.3 14.7 5.9 4.3C13.9 15.1 18.6 11.5 24 11.5c3.1 0 5.9 1.2 8 3.1l5.4-5.4C34.1 6.2 29.3 4.3 24 4.3c-7.6 0-14.2 4.3-17.7 10.4z" />
          <path fill="#4CAF50" d="M24 44.5c5.2 0 9.9-1.8 13.5-4.8l-6.3-5.3c-2 1.4-4.5 2.1-7.2 2.1-5.2 0-9.6-3.4-11.2-8.1l-6.2 4.8C9.7 39.9 16.3 44.5 24 44.5z" />
          <path fill="#1976D2" d="M43.6 20.5H42V20.4H24v7.2h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.3 5.3C41.4 35.4 44.1 30.3 44.1 24.4c0-1.3-.1-2.7-.5-3.9z" />
        </svg>
        <span className="font-body text-xs uppercase tracking-widest2 text-neutral-500">
          {ratingLabel}
        </span>
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl text-neutral-900">{businessInfo.googleRating}</span>
          <div className="flex flex-col items-start gap-1">
            <Stars count={5} />
            <span className="font-body text-xs text-neutral-500">
              {businessInfo.googleReviewCount} reviews
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {googleReviews.map((review, i) => (
          <RevealOnScroll key={review.author} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-body text-sm font-semibold text-neutral-900 break-words">{review.author}</p>
                  <p className="font-body text-xs text-neutral-500 break-words">{review.meta}</p>
                </div>
                <Stars count={review.rating} />
              </div>
              <p className="flex-1 font-body text-sm leading-relaxed text-neutral-700">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 font-body text-xs text-neutral-400">{review.timeAgo}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={businessInfo.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
        >
          {viewAll}
        </a>
      </div>
    </div>
  );
}
