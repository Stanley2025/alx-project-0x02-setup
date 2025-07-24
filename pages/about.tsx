import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <div className="flex gap-4">
          <Button label="Small" size="small" shape="rounded-sm" />
          <Button label="Medium" size="medium" shape="rounded-md" />
          <Button label="Large" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
