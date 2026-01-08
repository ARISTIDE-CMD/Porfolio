import Link from 'next/link';

export const metadata = {
  title: 'Design d’interface | ArisDev',
  description: 'Conception d’interfaces claires et axées UX pour améliorer l’engagement et la conversion.',
};

export default function DesignPage() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-top md:bg-center md:bg-fixed filter blur-sm md:blur-none saturate-110" style={{ backgroundImage: "url('/Delivery/web_design.jpeg')", backgroundRepeat: 'no-repeat' }} />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 container mx-auto px-6 py-16">
        <header className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Design d’interface — <span className="text-yellow-400">pensé pour l’utilisateur</span></h1>
          <p className="text-lg text-slate-300 leading-relaxed">Prototypes, maquettes et systèmes de design pour une expérience utilisateur claire et cohérente.</p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'UX research', text: 'Comprendre les utilisateurs pour concevoir des parcours efficaces.' },
              { title: 'Prototypage', text: 'Maquettes interactives prêtes à être testées.' },
              { title: 'Design systems', text: 'Composants réutilisables pour garder la cohérence.' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white mb-3 text-yellow-300">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center max-w-xl mx-auto">
          <p className="text-slate-300 mb-8 text-lg">Besoin d’une interface claire et efficace ?</p>
          <Link href="/contact" className="inline-flex cta-animate items-center justify-center px-7 py-3 rounded-lg bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition shadow-xl">Discutons de votre UX</Link>
        </section>
      </div>
    </main>
  );
} 