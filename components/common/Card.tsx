// components/common/Card.tsx

import React from 'react';
import { CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md border border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
