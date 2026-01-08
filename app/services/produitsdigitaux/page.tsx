import Link from 'next/link';

export const metadata = {
  title: 'Produits digitaux | ArisDev',
  description: 'Produits prêts à l’emploi : templates, mini-SaaS, composants et démonstrateurs.',
};

const sampleProducts = [
  { id: 'template-marketing', title: 'Template marketing', desc: 'Landing page prête à l’emploi' },
  { id: 'starter-saas', title: 'Starter SaaS', desc: 'Boilerplate SaaS avec auth et facturation' },
];

export default function ProduitsDigitauxPage() {
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
            Produits digitaux prêts à l’emploi — <span className="text-yellow-400">accélérez vos projets</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">Kits, templates et démonstrateurs pour lancer rapidement des MVPs et prototypes.</p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleProducts.map((p) => (
              <Link
                key={p.id}
                href={`/services/produitsdigitaux/${p.id}`}
                className="group relative flex flex-col justify-between p-6 rounded-xl bg-slate-800/80 backdrop-blur border border-slate-700 hover:border-yellow-400 transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition">{p.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400">Découvrir →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center max-w-xl mx-auto">
          <p className="text-slate-300 mb-8 text-lg">Intéressé par l’un des kits ?</p>
          <Link href="/contact" className="inline-flex cta-animate items-center justify-center px-7 py-3 rounded-lg bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition shadow-xl">Contactez-nous</Link>
        </section>
      </div>
    </main>
  );
}
