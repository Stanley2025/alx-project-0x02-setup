// components/common/PostCard.tsx

import { PostProps } from '@/interfaces';

const PostCard = ({ title, body, userId }: PostProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 mb-2">{body}</p>
      <span className="text-sm text-gray-400">Posted by User {userId}</span>
    </div>
  );
};

export default PostCard;
