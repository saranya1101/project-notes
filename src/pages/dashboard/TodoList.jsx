import React from 'react';

export default function TodoList() {
  return (
    <div
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Todo List</h2>
      <p className="text-gray-600 text-center">Your tasks will appear here.</p>
    </div>
  );
}
