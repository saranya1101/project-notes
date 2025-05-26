import React from 'react';

export default function Settings() {
  return (
    <div
      className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Settings</h2>
      <p className="text-gray-600 text-center">
        Configure your preferences here.
      </p>
    </div>
  );
}
