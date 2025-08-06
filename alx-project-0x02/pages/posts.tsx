import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard'; 
import { PostProps } from '@/interfaces'; 
import React from 'react';


interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {posts.map((post) => (
            <PostCard
              key={post.id} 
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </main>
    </div>
  );
};


export async function getStaticProps() {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts: PostProps[] = await response.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [], 
      },
    };
  }
}

export default PostsPage;