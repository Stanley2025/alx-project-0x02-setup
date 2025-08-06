import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal'; 
import { PostData } from '@/interfaces'; 
import React, { useState } from 'react';


const initialCards: PostData[] = [
  { title: "Dynamic Component", content: "This is a reusable card component that accepts title and content as props." },
  { title: "Modular Design", content: "By creating components like this, we can build complex UIs efficiently." },
  { title: "TypeScript Props", content: "The props for this component are strictly typed using a TypeScript interface." }
];

const HomePage: React.FC = () => {
  
  const [cards, setCards] = useState(initialCards);
 
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (data: PostData) => {
   
    setCards(prevCards => [data, ...prevCards]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        
          <button
            onClick={() => setModalOpen(true)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
          >
            Add New Post
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </main>

      
      {isModalOpen && (
        <PostModal 
          onClose={() => setModalOpen(false)} 
          onSubmit={handleAddPost} 
        />
      )}
    </div>
  );
};

export default HomePage;