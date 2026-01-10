import AllServices from '../../components/allservices';

export const metadata = {
  title: 'services',
  description: 'Mes services digitaux : création d’applications, sites, mobile, automatisation, performance et sécurité.',
};

export default function ServicesPage() {
  return (
    <main>
      <AllServices />
    </main>
  );
}
