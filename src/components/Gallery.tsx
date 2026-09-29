"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/content/projects";

export default function Gallery({ images }: { images: ProjectImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`group relative overflow-hidden rounded-xl bg-ink-3 ${
              i === 0 ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"
            }`}
            aria-label={`View larger: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 px-3 pb-24 pt-16 sm:p-16"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="relative h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[index].src} alt={images[index].alt} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute inset-x-16 bottom-8 text-center text-sm text-white/70 sm:bottom-5">
            {images[index].alt} &middot; {index + 1} / {images.length}
          </p>
          <button type="button" onClick={close} className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20" aria-label="Close">
            &times;
          </button>
          {images.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute bottom-5 left-4 grid size-12 place-items-center sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 rounded-full bg-white/10 text-xl text-white hover:bg-white/20" aria-label="Previous image">
                &larr;
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute bottom-5 right-4 grid size-12 place-items-center sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 rounded-full bg-white/10 text-xl text-white hover:bg-white/20" aria-label="Next image">
                &rarr;
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
