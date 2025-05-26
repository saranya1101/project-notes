import React from 'react';

export default function Profile() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-white to-indigo-100 px-4"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-md w-full text-center border border-gray-200">
        {/* Skeleton: Profile Image */}
        <div className="w-28 h-28 rounded-full mx-auto mb-6 bg-gray-300 animate-pulse"></div>

        {/* Skeleton: Line placeholders */}
        <div className="h-4 w-2/3 bg-gray-300 rounded mx-auto mb-3 animate-pulse"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded mx-auto mb-3 animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto mb-3 animate-pulse"></div>

        {/* Skeleton: Button */}
        <div className="h-10 w-32 bg-gray-300 rounded-full mx-auto mt-6 animate-pulse"></div>
      </div>
    </div>
  );
}

