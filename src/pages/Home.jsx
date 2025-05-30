import React from 'react';
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      

      <section
        className="flex flex-col items-center justify-center min-h-[calc(100vh-96px)] bg-gradient-to-br from-rose-100 via-white to-sky-100 px-4 py-12 space-y-10 transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: 'url("https://i.pinimg.com/736x/77/e0/e8/77e0e8a7087306a8377d41788ac804f6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white/80 backdrop-blur-lg border border-stone-200 rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center hover:shadow-fuchsia-300 transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-fuchsia-700 mb-4 drop-shadow-sm tracking-tight">
            Welcome to My Application
          </h2>
        </div>

        <button className="bg-fuchsia-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-fuchsia-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-300">
          <Link to={'/login'}>
            Get Started
          </Link>
        </button>
      </section>
    </>
  );
}
