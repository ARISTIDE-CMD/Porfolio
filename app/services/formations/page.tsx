import Link from 'next/link';

export const metadata = {
  title: 'Formations | ArisDev',
  description: 'Ateliers et formations sur-mesure en développement, product design et bonnes pratiques.',
};

export default function FormationsPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-top md:bg-center md:bg-fixed filter blur-sm md:blur-none saturate-110"
        style={{ backgroundImage: "url('/Delivery/backgroundev.png')", backgroundRepeat: 'no-repeat' }}
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 container mx-auto px-6 py-16">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: 'Atelier React / Next.js', desc: '1 journée – mise en place d’un projet et bonnes pratiques', href: '/contact' },
              { title: 'Bonnes pratiques & tests', desc: '1/2 journée – qualité et maintenabilité', href: '/contact' },
              { title: 'Formation sur mesure', desc: 'Parcours personnalisé — sur devis', href: '/contact' },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="group relative flex flex-col justify-between p-8 rounded-xl bg-slate-800/80 backdrop-blur border border-slate-700 hover:border-yellow-400 transition">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition">{service.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{service.desc}</p>
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400">Contactez-nous →</span>
              </Link>
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
