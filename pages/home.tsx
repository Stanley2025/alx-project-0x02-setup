import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <Card title="News" content="This is the latest school update." />
        <Card title="Events" content="Don't miss our upcoming seminar!" />
      </main>
    </>
  );
}
