import Link from 'next/link';

export const metadata = {
  title: 'Maintenance | ArisDev',
  description: 'Support, mises à jour, monitoring, vente et installation d\'équipements informatiques.',
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
            Maintenance, vente & support — <span className="text-yellow-400">sérénité opérationnelle</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">Monitoring, mises à jour, sécurité, ainsi que la vente, l\'installation et la maintenance des équipements informatiques pour assurer la continuité de service et la tranquillité d’esprit.</p>
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

        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Maintenance & Contrats — disponibilité garantie</h3>
            <p className="text-slate-300 mb-4">Contrats sur-mesure (SLA), intervention sur site, support à distance, interventions planifiées et sauvegarde des données. Nous proposons aussi des contrats avec prise en charge du parc matériel.</p>

            <ul className="text-slate-300 list-disc list-inside space-y-2 mb-6">
              <li>Interventions prioritaires et SLA adaptés</li>
              <li>Monitoring 24/7 et alerting</li>
              <li>Maintenance préventive et correctrice</li>
              <li>Prise en charge de parc matériel et inventaire</li>
            </ul>

            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition">Discutons du support</Link>
          </div>

          <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Vente d'équipements informatiques</h3>
            <p className="text-slate-300 mb-4">Fourniture, configuration et installation de matériel : postes, serveurs, NAS, routeurs, onduleurs, imprimantes. Options de garantie, déploiement et reprise d'ancien matériel disponibles.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-md bg-slate-900/50 border border-slate-700">
                <div className="flex items-start gap-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Postes & Laptops</h4>
                    <p className="text-slate-300 text-sm">Configuration, déploiement d'images et garantie pro.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-slate-900/50 border border-slate-700">
                <div className="flex items-start gap-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 7h18" stroke="currentColor" strokeWidth="1.5"/><path d="M5 7v10" stroke="currentColor" strokeWidth="1.5"/><path d="M19 7v10" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Serveurs & NAS</h4>
                    <p className="text-slate-300 text-sm">Solutions de stockage et serveurs pour vos besoins pro.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-slate-900/50 border border-slate-700">
                <div className="flex items-start gap-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 12h18" stroke="currentColor" strokeWidth="1.5"/><path d="M6 8v8" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Réseau & Sécurité</h4>
                    <p className="text-slate-300 text-sm">Routeurs, pare-feu, VLANs et supervision réseau.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-slate-900/50 border border-slate-700">
                <div className="flex items-start gap-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden><rect x="3" y="3" width="18" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="11" width="18" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Accessoires & Onduleurs</h4>
                    <p className="text-slate-300 text-sm">Onduleurs, câbles, périphériques et imprimantes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/237680585671/?text=${encodeURIComponent("Bonjour, je souhaite un devis pour l'achat de matériel informatique et/ou installation. Pouvez-vous me contacter ?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M21 11.5C21 16.194 16.97 20 12 20c-1.45 0-2.82-.33-4.03-.93L4 20l1.95-3.02C5 15.65 4 13.9 4 12.01 4 7.31 8.03 4 12 4s9 3.31 9 7.5z" stroke="currentColor" strokeWidth="0" fill="white" />
                  <path d="M15.5 14.2c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.36.22-.67.07-.3-.15-1.13-.42-2.15-1.33-.8-.72-1.34-1.61-1.49-1.91-.15-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.37-.02-.52-.02-.15-.68-1.63-.93-2.24-.25-.61-.5-.53-.68-.54-.18-.02-.39-.02-.6-.02-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.05.15.2 2.08 3.23 5.04 4.52 2.96 1.29 2.96.86 3.5.81.54-.05 1.77-.72 2.02-1.41.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" fill="#25D366" />
                </svg>
                Demander un devis
              </a>

              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition">Voir nos offres & contacts</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
