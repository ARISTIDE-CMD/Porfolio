"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


export default function FormationsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const trainings = [
    {
      title: "Fondations du développement web",
      level: "Idéal pour débutants",
      tech: "HTML • CSS • JavaScript",
      description: "Apprenez à créer des pages web modernes, structurées et interactives.",
      bullets: ["créer un site simple", "structurer et styliser des pages", "ajouter des interactions de base"],
      icon: 'foundations'
    },
    {
      title: "Développement web moderne",
      level: "Niveau intermédiaire",
      tech: "JavaScript • TypeScript • React",
      description: "Passez du simple site web à une vraie application moderne.",
      bullets: ["créer des applications web interactives", "mieux structurer votre code", "comprendre la logique des applications modernes"],
      icon: 'modern'
    },
    {
      title: "Applications web professionnelles",
      level: "Niveau avancé",
      tech: "React avancé • Next.js",
      description: "Apprenez à créer des sites rapides, bien organisés, et prêts à être mis en ligne.",
      bullets: ["construire un site web professionnel", "améliorer la performance et la structure", "déployer votre projet sur internet"],
      icon: 'professional'
    },
    {
      title: "Développement mobile",
      level: "Web vers mobile",
      tech: "React Native",
      description: "Créez des applications mobiles pour Android et iOS à partir de vos compétences web.",
      bullets: ["développer une application mobile simple", "partager la logique avec le web", "comprendre le fonctionnement des apps mobiles"],
      icon: 'mobile'
    },
    {
      title: "Applications complètes (Web + Backend)",
      level: "Comprendre le fonctionnement global",
      tech: "PHP • Laravel",
      description: "Apprenez à gérer les données, les utilisateurs et la logique côté serveur.",
      bullets: ["créer un backend simple", "connecter une application web", "gérer formulaires et données"],
      icon: 'backend'
    },
    {
      title: "CI/CD — GitHub Actions",
      level: "Niveau intermédiaire",
      tech: "GitHub Actions",
      description: "Automatisez vos builds, tests et déploiements avec GitHub Actions.",
      bullets: ["créer des workflows CI", "exécuter tests et linters", "déployer automatiquement sur vos environnements"],
      icon: 'github'
    },
    {
      title: "CI/CD — GitLab CI",
      level: "Niveau intermédiaire",
      tech: "GitLab CI",
      description: "Mise en place de pipelines CI/CD avec GitLab pour automatiser vos livraisons.",
      bullets: ["composer des pipelines", "gérer runners et variables d'environnement", "déployer en continu"],
      icon: 'gitlab'
    },
    {
      title: "Docker & Conteneurisation",
      level: "Niveau intermédiaire",
      tech: "Docker",
      description: "Apprenez à conteneuriser vos applications, créer des images optimisées et gérer des déploiements conteneurisés.",
      bullets: ["créer des images Docker", "optimiser les images", "déployer des conteneurs en production"],
      icon: 'docker'
    },
    {
      title: "Hébergement & Déploiement",
      level: "Niveau intermédiaire",
      tech: "Hébergement",
      description: "Stratégies d'hébergement pour production : VPS, cloud, services managés et bonnes pratiques de déploiement.",
      bullets: ["choisir une solution d'hébergement", "configurer serveurs et SSL", "mettre en place monitoring et sauvegardes"],
      icon: 'hosting'
    }
  ];

  function Icon({ name }: { name: string }) {
    switch (name) {
      case 'foundations':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M3 6.5C3 5.94772 3.44772 5.5 4 5.5H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 17.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 6.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 17.5H12L14 15H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'modern':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M16 18L21 12L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 6L3 12L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 4H10V20H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'professional':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M2 12L22 2L14 22L11 13L2 12Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'mobile':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 18H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'backend':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 5V11C4 12.6569 7.58172 14 12 14C16.4183 14 20 12.6569 20 11V5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 14V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case 'project':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'github':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 9c2 0 2.5 2 4 2 1.5 0 2-1 3-1s1.5 1 3 1c1.5 0 2-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 15c2-1 6-1 8 0s6 1 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'gitlab':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 3l2.5 6h-5L12 3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M4.5 15l7.5-6 7.5 6-3.5 6h-8L4.5 15z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );
      case 'docker':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="3" y="6" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <rect x="6" y="10" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <rect x="9" y="13" width="6" height="2" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M3 6c2 2 6 2 9 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );
      case 'hosting':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M3 12a6 6 0 0111.5-2A4.5 4.5 0 0119 14.5H4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M12 14v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
    }
  }

  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-top md:bg-center bg-fixed filter blur-sm md:blur-none saturate-110"
        style={{ backgroundImage: "url('/Delivery/backgroundev.png')", backgroundRepeat: 'no-repeat' }}
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className={`relative z-10 container mx-auto px-6 py-16 transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <header className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Formations sur-mesure pour <span className="text-yellow-400">équipes et individus</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Ateliers pratiques et parcours pédagogiques pour monter en compétence sur React, Next.js, bonnes pratiques et architecture logicielle.
          </p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Ateliers pratiques', text: 'Sessions axées sur la mise en pratique et la réalisation de livrables concrets.' },
              { title: 'Coaching d’équipe', text: 'Accompagnement sur la mise en place de bonnes pratiques et process.' },
              { title: 'Ressources & supports', text: 'Matériel pédagogique, exercices et supports adaptés à vos besoins.' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white mb-3 text-yellow-300">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Parcours disponibles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainings.map((t) => (
              <article key={t.title} className="group relative flex flex-col justify-between p-6 rounded-xl bg-slate-800/80 backdrop-blur border border-slate-700 hover:border-yellow-400 transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-yellow-400/10 text-yellow-400 rounded-full p-3">
                    <Icon name={t.icon} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-yellow-400 transition">{t.title}</h3>
                    <p className="text-sm text-slate-300">{t.level} • <span className="text-slate-300">{t.tech}</span></p>
                    <p className="mt-3 text-slate-300 text-sm">{t.description}</p>

                    <ul className="list-disc list-inside mt-3 text-slate-300 text-sm space-y-1">
                      {t.bullets.map((b, i) => (
                        <li key={i} className="capitalize">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Bonjour, je suis intéressé·e par la formation: ${t.title}. Pouvez-vous m'en donner plus d'informations ?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M21 11.5C21 16.194 16.97 20 12 20c-1.45 0-2.82-.33-4.03-.93L4 20l1.95-3.02C5 15.65 4 13.9 4 12.01 4 7.31 8.03 4 12 4s9 3.31 9 7.5z" stroke="currentColor" strokeWidth="0" fill="white" />
                      <path d="M15.5 14.2c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.36.22-.67.07-.3-.15-1.13-.42-2.15-1.33-.8-.72-1.34-1.61-1.49-1.91-.15-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.37-.02-.52-.02-.15-.68-1.63-.93-2.24-.25-.61-.5-.53-.68-.54-.18-.02-.39-.02-.6-.02-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.05.15.2 2.08 3.23 5.04 4.52 2.96 1.29 2.96.86 3.5.81.54-.05 1.77-.72 2.02-1.41.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" fill="#25D366" />
                    </svg>
                    WhatsApp
                  </a>

                  <span className="text-sm text-slate-400">{t.tech}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-lg font-bold text-white mb-4">Formations à la carte</h3>
          <div className="flex flex-wrap gap-3">
            {['HTML & CSS','JavaScript','TypeScript','React','Next.js','React Native','Laravel','Docker','Hébergement','CI/CD (GitHub)','CI/CD (GitLab)'].map((item) => (
              <span key={item} className="px-3 py-1 rounded-full bg-slate-700 text-sm text-slate-200">{item}</span>
            ))}
          </div>
        </section>

        <section className="text-center max-w-xl mx-auto">
          <p className="text-slate-300 mb-8 text-lg">Vous souhaitez former votre équipe ou organiser un atelier ?</p>
          <Link href="/contact" className="inline-flex cta-animate items-center justify-center px-7 py-3 rounded-lg bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition shadow-xl">Discutons de votre besoin</Link>
        </section>
      </div>
    </main>
  );
}
