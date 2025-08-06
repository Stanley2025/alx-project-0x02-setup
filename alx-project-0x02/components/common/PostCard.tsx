import { PostProps } from '@/interfaces';
import React from 'react';

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 capitalize">{title}</h2>
        <p className="text-sm text-gray-500">User ID: {userId}</p>
      </div>
      <p className="text-gray-700 flex-grow">{body}</p>
      <div className="mt-4 text-right text-xs text-gray-400">
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;