"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  imageUrl: string;
  link: string;
}

interface BrandCarouselProps {
  fromService?: boolean;
}

const BrandCarousel: React.FC<BrandCarouselProps> = ({ fromService = false }) => {
  const brands: Brand[] = [
    { id: 1, name: "Brand One", imageUrl: "/brand/1.webp", link: "#" },
    { id: 2, name: "Brand Two", imageUrl: "/brand/2.webp", link: "#" },
    { id: 3, name: "Brand Three", imageUrl: "/brand/3.webp", link: "#" },
    { id: 4, name: "Brand Four", imageUrl: "/brand/4.webp", link: "#" },
    { id: 5, name: "Brand Five", imageUrl: "/brand/5.webp", link: "#" },
    { id: 6, name: "Brand Six", imageUrl: "/brand/6.webp", link: "#" },
    { id: 7, name: "Brand Seven", imageUrl: "/brand/7.webp", link: "#" },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  const openLightbox = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  const showPrev = () => {
    const idx = brands.findIndex(b => b.imageUrl === currentImage);
    const prev = (idx - 1 + brands.length) % brands.length;
    setCurrentImage(brands[prev].imageUrl);
  };

  const showNext = () => {
    const idx = brands.findIndex(b => b.imageUrl === currentImage);
    const next = (idx + 1) % brands.length;
    setCurrentImage(brands[next].imageUrl);
  };

  // Continuous scrolling
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const items = Array.from(carousel.children);
    items.forEach(item => {
      carousel.appendChild(item.cloneNode(true));
    });

    let scrollPos = 0;
    const speed = 1;

    const loop = () => {
      scrollPos += speed;
      if (scrollPos >= carousel.scrollWidth / 2) scrollPos = 0;
      carousel.style.transform = `translateX(-${scrollPos}px)`;
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return (
    <div
      className={`w-full relative overflow-hidden ${
        fromService ? "bg-white py-10" : ""
      }`}
    >
      <h1
        className={`heading text-[30px] md:text-[38px] text-center font-bold pb-0 md:pb-10 ${
          fromService ? "text-black" : "text-white"
        }`}
      >
        Our Client
      </h1>

      {/* Carousel */}
      <div className={`overflow-hidden ${fromService ? "pb-0" : "pb-10"} `}>
        <div
          ref={carouselRef}
          className="flex"
          style={{ whiteSpace: "nowrap", gap: "2rem" }}
        >
          {brands.map(brand => (
            <button
              key={brand.id}
              onClick={() => openLightbox(brand.imageUrl)}
              className="flex-shrink-0 w-48 h-32 relative focus:outline-none"
              style={{ minWidth: "12rem", minHeight: "8rem" }}
            >
              <Image
                src={brand.imageUrl}
                alt={brand.name}
                fill
                sizes="(max-width: 768px) 100px, 150px"
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none z-10"
            aria-label="Close"
          >
            &times;
          </button>
          <div
            className="relative flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={showPrev}
              className="absolute left-0 ml-4 text-white text-3xl font-bold focus:outline-none z-10"
              aria-label="Previous Image"
            >
              &#10094;
            </button>
            <div className="max-w-full max-h-full">
              <Image
                src={currentImage}
                alt="Enlarged brand logo"
                width={600}
                height={400}
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
            <button
              onClick={showNext}
              className="absolute right-0 mr-4 text-white text-3xl font-bold focus:outline-none z-10"
              aria-label="Next Image"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandCarousel;
