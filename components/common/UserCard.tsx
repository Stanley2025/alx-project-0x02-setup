// components/common/UserCard.tsx

import { UserProps } from '@/interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-sm text-gray-500 mt-1">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
