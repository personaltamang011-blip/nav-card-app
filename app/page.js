// app/page.js
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Web Development",
      image: "/images/webdev.jpg",
      description: "Learn how to build modern responsive websites using Next.js and Tailwind CSS.",
      more: "Web development involves HTML, CSS, JavaScript, frameworks, and backend integration to create interactive websites and web apps.",
    },
    {
      id: 2,
      title: "Mobile App Design",
      image: "/images/mobile.jpg",
      description: "Design mobile apps with smooth interfaces and modern user experiences.",
      more: "UI/UX design focuses on usability, accessibility, and responsiveness to ensure a seamless mobile experience across all devices.",
    },
    {
      id: 3,
      title: "Cloud Computing",
      image: "/images/cloud.jpg",
      description: "Explore the power of cloud storage, hosting, and scalable computing resources.",
      more: "Cloud computing lets businesses scale easily, with on-demand access to computing power and storage using services like AWS or Google Cloud.",
    },
    {
      id: 3,
      title: "ManiSarmi Cards",
      image: "/images/cloud.jpg",
      description: "Explore the power of cloud storage, hosting, and scalable computing resources.",
      more: "Cloud computing lets businesses scale easily, with on-demand access to computing power and storage using services like AWS or Google Cloud.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* === Hero Section === */}
      <section className="mt-16 relative h-[70vh] min-h-[400px]">
        <Image
          src="/images/hero.jpg"
          alt="Decorative hero background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/45 z-10"></div>

        <div className="relative z-20 flex h-full items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Welcome to My Next.js App
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              This is a simple demo page connected with a beautiful responsive navbar component.
            </p>
          </div>
        </div>
      </section>

      {/* === Content Section === */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Explore Our Topics
        </h2>

        {/* === Cards Grid === */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>

                {/* Expandable content */}
                {expandedCard === card.id && (
                  <p className="text-gray-700 mb-4">{card.more}</p>
                )}

                <button
                  onClick={() =>
                    setExpandedCard(expandedCard === card.id ? null : card.id)
                  }
                  className="text-gray-800 font-medium hover:underline focus:outline-none"
                >
                  {expandedCard === card.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
