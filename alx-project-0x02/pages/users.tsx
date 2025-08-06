import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import React from 'react';


interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Our Community Users</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <UserCard {...user} key={user.id} />
          ))}
        </div>
      </main>
    </div>
  );
};


export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await response.json();
    return { props: { users } };
  } catch (error) {
    return { props: { users: [] } };
  }
}


export default UsersPage;