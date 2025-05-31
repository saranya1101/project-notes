import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        fontFamily: "'Times New Roman', Times, serif",
        backgroundImage: "url('https://i.pinimg.com/736x/77/e2/fb/77e2fb92bb5ac0857bfefd98a0b15f4a.jpg')"
      }}
    >
      <div className="bg-white/80 backdrop-blur-lg border border-stone-200 rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-md text-center hover:shadow-fuchsia-300 transition-shadow duration-300">
        <h1 className="text-7xl font-extrabold text-fuchsia-700 mb-4 drop-shadow-sm tracking-tight">
          404
        </h1>
        <p className="text-3xl font-semibold text-fuchsia-700 mb-2">
          Page Not Found
        </p>
        <p className="text-fuchsia-500 mb-6 max-w-xs">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to={'/home'}
          className="mt-4 px-6 py-2 bg-fuchsia-600 text-white rounded-full shadow-lg hover:bg-fuchsia-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-300"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
