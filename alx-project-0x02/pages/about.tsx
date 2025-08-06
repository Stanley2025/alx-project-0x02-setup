import Header from '@/components/layout/Header';
import Button from '@/components/common/Button'; 
import React from 'react';


const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">About Page & Component Demo</h1>
        <p className="mb-8 text-gray-700">This page demonstrates the usage of a reusable Button component.</p>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Button Component Instances</h2>
          <div className="flex items-center justify-center space-x-6">
            
           
            <Button size="small" shape="rounded-sm">
              Small Button
            </Button>

            
            <Button size="medium" shape="rounded-md">
              Medium Button
            </Button>
            
           
            <Button size="large" shape="rounded-full">
              Large Button
            </Button>

          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;