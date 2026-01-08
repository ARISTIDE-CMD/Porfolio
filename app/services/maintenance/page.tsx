import Link from 'next/link';

export const metadata = {
  title: 'Maintenance | ArisDev',
  description: 'Support, mises à jour, monitoring et sécurité pour vos produits numériques.',
};

export default function MaintenancePage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-top md:bg-center md:bg-fixed filter blur-sm md:blur-none saturate-110"
        style={{ backgroundImage: "url('/Delivery/backgroundev.png')", backgroundRepeat: 'no-repeat' }}
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 container mx-auto px-6 py-16">
        <header className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Maintenance & Support — <span className="text-yellow-400">sérénité opérationnelle</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">Monitoring, mises à jour, sécurité et interventions pour assurer la continuité de service et la tranquillité d’esprit.</p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Disponibilité & SLA', text: 'Engagements clairs de disponibilité et de temps de réponse.' },
              { title: 'Sécurité & patching', text: 'Mises à jour régulières et audits pour réduire les risques.' },
              { title: 'Monitoring & alerting', text: 'Supervision proactive avec remontées et runbooks réactifs.' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white mb-3 text-yellow-300">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Offres</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: 'Contrat de support & SLA', desc: 'Couverture 24/7, interventions planifiées et support', href: '/contact' },
              { title: 'Mises à jour régulières', desc: 'Patching, hardening et gestion des dépendances', href: '/contact' },
              { title: 'Supervision & alerting', desc: 'Configuration de monitoring, alertes et runbooks', href: '/contact' },
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
          <p className="text-slate-300 mb-8 text-lg">Besoin d’un contrat de maintenance adapté ?</p>
          <Link href="/contact" className="inline-flex cta-animate items-center justify-center px-7 py-3 rounded-lg bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition shadow-xl">Discutons du support</Link>
        </section>
      </div>
    </main>
  );
}
