"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Temoignage() {
  const stats = [
    {
      title: "Personnes accompagnées",
      subtitle: "Professionnels et équipes guidés vers le succès digital",
      imageSrc: "/Avoid Life Mistakes_ Guide for Young People.jpeg",
      imageAlt: "Icône personnes accompagnées",
    },
    {
      title: "Projets livrés",
      subtitle: "Solutions numériques déployées avec qualité",
      imageSrc: "/Nous nous sentons bien lorsque nous travaillons ensemble Photo d'un groupe d'hommes d'affaires regardant quelque chose sur un écran d'ordinateur dans un bureau _ Photo Premium.jpeg",
      imageAlt: "Icône projets livrés",
    },
    {
      title: "Startup & PME aidées",
      subtitle: "Entreprises accompagnées dans leur croissance",
      imageSrc: "/Good Morning, Africa!.jpeg",
      imageAlt: "Icône startups et PME",
    },
    {
      title: "Automatisations réalisées",
      subtitle: "Processus simplifiés et fiabilisés",
      imageSrc: "/Un groupe de personnes posant pour une photo avec le soleil derrière elles _ Image Premium générée à base d’IA.jpeg",
      imageAlt: "Icône automatisations",
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-5">
          Résultats & accompagnements
        </h2>

        {/* CAROUSEL MOBILE */}
        <div className="block sm:hidden">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={16}
          >
            {stats.map((item, index) => (
              <SwiperSlide key={index}>
                <article className="bg-slate-900 border border-slate-700/40  flex flex-col items-center text-center shadow-lg transition-transform hover:scale-[1.03] hover:shadow-2xl">
                  <div className="relative w-full h-40  overflow-hidden bg-slate-800 mb-4">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-base">{item.subtitle}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <article
              key={index}
              className="bg-slate-900 border border-slate-700/40  flex flex-col items-center text-center shadow-lg transition-transform hover:scale-[1.03] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400/30"
            >
              <div className="relative w-full h-40  overflow-hidden bg-slate-800 mb-4">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300 text-base">{item.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
