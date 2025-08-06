import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<UserProps> = ({ name, username, email, website, company, address }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
        <p className="text-md font-medium text-cyan-600">@{username}</p>
      </div>
      
      <div className="space-y-3 text-gray-700 flex-grow">
        <p><strong>Email:</strong> <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a></p>
        <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{website}</a></p>
        <p><strong>Company:</strong> {company.name}</p>
      </div>
      
      <div className="mt-6 border-t pt-4 text-sm text-gray-500">
        <p>{address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;