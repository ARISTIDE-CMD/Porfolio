"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Design d’interface | ArisDev',
  description: 'Conception d’interfaces claires et axées UX pour améliorer l’engagement et la conversion.',
};

export default function DesignPage() {
  return (
    <main className="relative overflow-hidden">
      <Link 
      href="/services/developpement"
      // onClick={goBack}
                      className=" hidden lg:flex
          absolute top-5 left-8 z-40
          flex items-center gap-2
          text-slate-200
          px-4 py-2 rounded-xl
      border border-white-700/40
        hover:opacity-50 hover:text-yellow-400
          transition-all duration-300
        "
                      aria-label="Retour"
                  >
                      <ArrowLeft size={18} />
                      <span className="hidden sm:inline text-sm font-semibold">
                          
                      </span>
                  </Link>
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-top md:bg-center bg-fixed filter blur-sm md:blur-none saturate-110" style={{ backgroundImage: "url('/Delivery/web_design.jpeg')", backgroundRepeat: 'no-repeat' }} />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 container mx-auto px-6 py-16 enter-fade">
        <header className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Design d’interface — <span className="text-yellow-400">pensé pour l’utilisateur</span></h1>
          <p className="text-lg text-slate-300 leading-relaxed">Prototypes, maquettes et systèmes de design pour une expérience utilisateur claire et cohérente.</p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Recherche utilisateur',
                text: 'Comprendre les besoins réels des utilisateurs pour concevoir des interfaces utiles et efficaces.'
              },
              {
                title: 'Architecture de l’information',
                text: 'Organiser les contenus de manière claire pour faciliter la navigation et la compréhension.'
              },
              {
                title: 'Wireframes & prototypage',
                text: 'Création de maquettes et prototypes interactifs pour visualiser le produit avant le développement.'
              },
              {
                title: 'Design d’interface (UI)',
                text: 'Conception d’interfaces modernes, lisibles et adaptées à tous les écrans.'
              },
              {
                title: 'Design systems',
                text: 'Mise en place de composants et règles graphiques pour assurer une cohérence sur tout le projet.'
              },
              {
                title: 'Responsive & accessibilité',
                text: 'Designs pensés pour mobile, tablette et ordinateur, accessibles au plus grand nombre.'
              },
              {
                title: 'Refonte graphique',
                text: 'Amélioration visuelle et ergonomique de sites existants pour une meilleure expérience utilisateur.'
              }
            ]
              .map((item) => (
                <div key={item.title} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3 text-yellow-300">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
          </div>
        </section>

        <section className="text-center max-w-xl mx-auto">
          <p className="text-slate-300 mb-8 text-lg">Besoin d’une interface claire et efficace ?</p>
          <a
            href={`https://wa.me/237680585671/?text=${encodeURIComponent("Bonjour, je souhaite discuter de la création d'une interface utilisateur (UX). Pouvez-vous me contacter ?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cta-animate items-center justify-center px-7 py-3 rounded-lg bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition shadow-xl"
          >
            Discutons de votre UX
          </a>
        </section>
      </div>

      <style jsx>{`
        .enter-fade {
          opacity: 0;
          transform: translateY(8px);
          animation: fadeUp 600ms cubic-bezier(.22,.9,.19,1) forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .enter-fade {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
} 