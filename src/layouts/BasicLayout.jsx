import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function BasicLayout() {
  return (
    <>
      <header className="bg-black text-white py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6">
        {/* Logo/Brand */}
        <div className="text-2xl font-semibold flex items-center gap-2 select-none">
          <Link to={'/home'}>
            🏠
          </Link>
         
        </div>

        {/* Navigation Buttons */}
        <div className="mt-3 sm:mt-0 flex gap-3">
          <Link
            to={'/login'}
          >
            Sign In
          </Link>
          <Link
            to={'/sign-up'}
          >
            Sign Up
          </Link>
        </div>
      </header>

      <main className="">
        <Outlet />
      </main>
    </>
  );
}
