"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-slate-900 text-slate-200 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white border-b-4 border-yellow-400 pb-3 inline-block animate-fadeDown">
            À propos d’ArisDev
          </h1>
        </header>

        {/* Contenu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Texte */}
          <div className="space-y-8 animate-slideLeft">
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="text-yellow-400 font-semibold">ArisDev</span> conçoit des solutions numériques
              performantes, solides et évolutives pour répondre aux besoins réels des
              entreprises et des projets ambitieux.
            </p>
            <hr className="opacity-50"></hr>
            <p className="text-lg md:text-xl leading-relaxed opacity-75">
              Nous créons des plateformes web et mobiles qui ne se contentent pas
              d’exister, mais qui résolvent des problèmes métiers précis, améliorent
              l’efficacité opérationnelle et renforcent la valeur offerte aux utilisateurs.
            </p>
            <hr></hr>
            <p className="text-lg md:text-xl leading-relaxed opacity-50">
              Grâce à une vision claire de l’architecture logicielle, à une rigueur
              professionnelle dans le code et à une stratégie de déploiement automatisée,
              chaque projet est pensé pour être fiable, performant et évolutif.
            </p>

            <p className="text-lg md:text-xl italic text-slate-400">
              Plus qu’un développeur, un partenaire technique orienté vers la réussite de vos objectifs.
            </p>


            <a
              href="/présentation.pdf"
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold py-3 px-8 rounded-xl transition shadow-xl shadow-yellow-500/30 hover:scale-[1.02]"
            >
              <Download size={20} />
              <span>Présentation ArisDev</span>
            </a>
          </div>

          {/* Image / Illustration */}
          <div className="flex justify-center md:justify-end animate-slideRight">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-yellow-400/40 shadow-2xl">
              <Image
                src="/manboite.png"
                alt="Illustration ArisDev"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease-out both;
        }

        .animate-slideRight {
          animation: slideRight 1s ease-out both;
        }

        .animate-fadeDown {
          animation: fadeDown 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
