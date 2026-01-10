"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FormationsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  /* =======================
     TECH ICONS + COULEURS
  ======================= */
  const techConfig: Record<string, { icon: string; color: string }> = {
    html5: { icon: "/tech/html5.svg", color: "#E34F26" },
    javascript: { icon: "/tech/javascript.svg", color: "#F7DF1E" },
    typescript: { icon: "/tech/typescript.svg", color: "#3178C6" },
    react: { icon: "/tech/react.svg", color: "#61DAFB" },
    nextjs: { icon: "/tech/nextdotjs.svg", color: "#000000" },
    tailwindcss: { icon: "/tech/tailwindcss.svg", color: "#06B6D4" },
    docker: { icon: "/tech/docker.svg", color: "#2496ED" },
    git: { icon: "/tech/git.svg", color: "#F05032" },
    github: { icon: "/tech/github.svg", color: "#181717" },
    gitlab: { icon: "/tech/gitlab.svg", color: "#FC6D26" },
    laravel: { icon: "/tech/laravel.svg", color: "#FF2D20" },
    css: { icon: "/tech/css.svg", color: "#1572B6" },
    vue: { icon: "/tech/vuedotjs.svg", color: "#4FC08D" },
    nuxt: { icon: "/tech/nuxt.svg", color: "#00DC82" },
    php: { icon: "/tech/php.svg", color: "#777BB4" },
    nodejs: { icon: "/tech/nodedotjs.svg", color: "#5FA04E" },
    angular: { icon: "/tech/angular.svg", color: "#DD0031" },
    apache: { icon: "/tech/apache.svg", color: "#D22128" },
    mysql: { icon: "/tech/mysql.svg", color: "#4479A1" },
    pgsql: { icon: "/tech/postgresql.svg", color: "#336791" },
    xampp: { icon: "/tech/xampp.svg", color: "#F0DB4F" },
    googlecloudstorage: {
      icon: "/tech/googlecloudstorage.svg",
      color: "#4285F4",
    },
  };

  /* =======================
     FORMATIONS
  ======================= */
  const trainings = [
    {
      title: "Fondations du développement web",
      // level: "Idéal pour débutants",
      description:
        "Apprenez à créer des pages web modernes, structurées et interactives.",
      bullets: [
        "Créer un site simple",
        "Structurer et styliser des pages",
        "Ajouter des interactions de base",
      ],
      technologies: ["html5", "javascript", "css"],
    },
    {
      title: "Bases de données & serveurs locaux",
      // level: "Niveau débutant à intermédiaire",
      description:
        "Apprenez à installer, configurer et utiliser les bases de données les plus courantes ainsi que les serveurs locaux.",
      bullets: [
        "installer et configurer MySQL, PostgreSQL et XAMPP",
        "créer et gérer des bases de données",
        // "connecter vos applications web aux bases de données",
        // "optimiser les requêtes et gérer les sauvegardes",
      ],
      technologies: ["mysql", "pgsql", "xampp"],
    },
    {
      title: "Développement web moderne",
      // level: "Niveau intermédiaire",
      description: "Passez du site web à une application moderne.",
      bullets: [
        "Créer des applications web interactives",
        "Structurer un projet moderne",
        "Comprendre l’architecture frontend",
      ],
      technologies: ["javascript", "typescript", "react", "tailwindcss", "vue"],
    },
    {
      title: "Applications web professionnelles",
      // level: "Niveau avancé",
      description: "Créer des sites performants et prêts pour la production.",
      bullets: [
        "Construire une app robuste",
        "Optimiser performances et SEO",
        "Déployer en production",
      ],
      technologies: ["react", "nextjs", "tailwindcss", "nuxt", "angular"],
    },
    {
      title: "Applications complètes (Web + Backend)",
      // level: "Vision globale",
      description: "Backend, logique serveur et gestion des données.",
      bullets: [
        "Créer un backend Laravel",
        "Connecter frontend et API",
        "Gérer données et formulaires",
      ],
      technologies: ["laravel", "nodejs", "php", "git"],
    },
    {
      title: "CI / CD & Conteneurisation",
      // level: "Niveau intermédiaire",
      description: "Automatisation et déploiement moderne.",
      bullets: [
        "Créer des images Docker",
        "Pipelines GitHub & GitLab",
        "Déployer sur le cloud",
      ],
      technologies: ["docker", "github", "gitlab", "googlecloudstorage"],
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Bouton retour desktop */}
      <Link
        href="/services"
        className="hidden lg:flex absolute top-5 left-8 z-40 items-center gap-2 text-slate-200 px-4 py-2 rounded-xl border border-white/20 hover:text-yellow-400 transition"
      >
        <ArrowLeft size={18} />
      </Link>

      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/Delivery/backgroundev.png')" }}
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <div
        className={`relative z-10 container mx-auto px-6 py-16 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
      >
        {/* Header */}
        <header className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Formations sur-mesure pour{" "}
            <span className="text-yellow-400">équipes et individus</span>
          </h1>
          <p className="text-lg text-slate-300">
            Des parcours pédagogiques orientés pratique, production et montée
            en compétence réelle.
          </p>
        </header>

        {/* Cards */}
        <section>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {trainings.map((t) => (
      <article
        key={t.title}
        className="flex flex-col p-6 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-yellow-400 transition"
      >
        <h3 className="text-xl font-bold text-yellow-400 mb-1">{t.title}</h3>
        {/* <span className="text-sm text-yellow-400 mb-3">{t.level}</span> */}

        <p className="text-sm text-slate-300 mb-4">{t.description}</p>

        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 mb-5">
          {t.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        {/* Tech icons with colors */}
        <div className="flex flex-wrap gap-3 mb-4">
          {t.technologies.map((tech) => {
            const cfg = techConfig[tech];
            return (
              <div
                key={tech}
                title={tech}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{
                  backgroundColor: `${cfg.color}22`,
                  border: `1px solid ${cfg.color}`,
                }}
              >
                <img
                  src={cfg.icon}
                  alt={tech}
                  className="w-5 h-5 object-contain"
                  style={{
                    filter: `drop-shadow(0 0 4px ${cfg.color})`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* List of technology names */}
        <ul className="list-disc list-inside text-sm text-white capitalize mb-5">
          {t.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <a
          href={`https://wa.me/237680585671/?text=${encodeURIComponent(
            `Bonjour, je suis intéressé par la formation : ${t.title}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-3 rounded-md bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition self-start"
        >
          <FaWhatsapp className="w-5 h-5" />
          WhatsApp
        </a>
      </article>
    ))}
  </div>
</section>

      </div>
    </main>
  );
}
