import { PostData, PostModalProps } from '@/interfaces';
import React, { useState } from 'react';

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  // State to manage the form's input fields.
  const [formData, setFormData] = useState<PostData>({
    title: '',
    content: '',
  });

  // This function updates the state as the user types in the input fields.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // This function handles the form submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the browser from doing a full page refresh.
    onSubmit(formData); // Sends the completed form data up to the parent page.
    onClose();         // Calls the function to close the modal.
  };

  return (
    // The semi-transparent background overlay
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      {/* The modal panel */}
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg mx-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Add a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;