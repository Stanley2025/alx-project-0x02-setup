// pages/users.tsx

import { useEffect, useState } from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import Header from '@/components/layout/Header';

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          users.map((user) => <UserCard key={user.id} {...user} />)
        )}
      </main>
    </>
  );
}
