"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  imageUrl: string;
  link: string;
}

const BrandCarousel: React.FC = () => {
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

  // State for lightbox
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
    const currentIndex = brands.findIndex(
      (brand) => brand.imageUrl === currentImage
    );
    const prevIndex = (currentIndex - 1 + brands.length) % brands.length;
    setCurrentImage(brands[prevIndex].imageUrl);
  };

  const showNext = () => {
    const currentIndex = brands.findIndex(
      (brand) => brand.imageUrl === currentImage
    );
    const nextIndex = (currentIndex + 1) % brands.length;
    setCurrentImage(brands[nextIndex].imageUrl);
  };

  // Continuous scrolling functionality
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    // Clone the carousel items for seamless looping
    const items = Array.from(carousel.children);
    items.forEach((item) => {
      const clonedItem = item.cloneNode(true);
      carousel.appendChild(clonedItem);
    });

    const scrollSpeed = 1; // Adjust the speed (higher is slower)
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset scroll position for seamless looping
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }

      carousel.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
        <h1 className="heading bg-white text-[30px] md:text-[38px] text-center font-bold pb-0 md:pb-10">
        Our Client
          </h1>

      {/* Carousel */}
      <div className="overflow-hidden bg-gradient-to-t pb-10 from-black-100 via-white to-white">
        <div
          ref={carouselRef}
          className="flex"
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            gap: "2rem",
          }}
        >
          {brands.map((brand) => (
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

      {/* Lightbox Modal */}
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
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={showPrev}
              className="absolute left-0 ml-4 text-black-100 text-3xl font-bold focus:outline-none z-10"
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
              className="absolute right-0 mr-4 text-black-100 text-3xl font-bold focus:outline-none z-10"
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
