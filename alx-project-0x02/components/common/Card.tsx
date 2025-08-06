import { CardProps } from '@/interfaces';
import React from 'react';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-cyan-500/10 transition-shadow">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;