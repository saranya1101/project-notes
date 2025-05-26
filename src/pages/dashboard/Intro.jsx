import React from "react";

export default function Intro() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-pink-100 px-6"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="bg-white/80 backdrop-blur-lg border border-stone-300 shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-fuchsia-700 mb-4 drop-shadow-sm">
          Welcome to the Dashboard App
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          This app helps you organize your project notes, track your progress,
          and visualize important information all in one place.
        </p>
        <ul className="list-disc list-inside text-left text-gray-800 space-y-2">
          <li>Add, edit, and manage your notes easily</li>
          <li>Track your project progress</li>
          <li>Get insights and visual summaries</li>
        </ul>
      </div>
    </div>
  );
}

