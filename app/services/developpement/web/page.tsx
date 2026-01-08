import Link from 'next/link';

export const metadata = {
  title: 'Développement Web | ArisDev',
  description: 'Sites professionnels, plateformes web et applications métiers performantes et fiables.',
};

export default function WebPage() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-top md:bg-center md:bg-fixed filter blur-sm md:blur-none saturate-110" style={{ backgroundImage: "url('/Delivery/application.jpg')", backgroundRepeat: 'no-repeat' }} />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 container mx-auto px-6 py-16">
        <header className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Développement Web & Applications — <span className="text-yellow-400">performants et maintenables</span></h1>
          <p className="text-lg text-slate-300 leading-relaxed">Sites, plateformes et applications métiers conçues pour la performance, l’évolutivité et l’expérience utilisateur.</p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Architecture modulaire', text: 'Organisation claire pour scalabilité et tests.' },
              { title: 'Performance', text: 'Optimisations front & back pour une expérience fluide.' },
              { title: 'SEO & accessibilité', text: 'Bonne indexation et accès facilité pour tous.' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white mb-3 text-yellow-300">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Prestations</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: 'Site vitrine & marketing', desc: 'Landing pages, blogs, et sites institutionnels', href: '/contact' },
              { title: 'Web app & SaaS', desc: 'Applications métiers et plateformes sur mesure', href: '/contact' },
              { title: 'PWA & offline', desc: 'Expériences rapides, fiables et installables', href: '/contact' },
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
          <p className="text-slate-300 mb-8 text-lg">Prêt à lancer votre projet web ?</p>
          <Link href="/contact" className="inline-flex cta-animate items-center justify-center px-7 py-3 rounded-lg bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition shadow-xl">Discutons-en</Link>
        </section>
      </div>
    </main>
  );
} 