import { Link, Outlet } from "react-router";

function BasicLayouts() {
  return (
    <>
      <header className="bg-black text-white py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6 font-poppins">
        <div className="text-2xl font-semibold flex items-center gap-2">
          <Link
            to={'/home'}
            aria-label="notes"
            className="inline-flex items-center transition transform hover:scale-110 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <span role="img" aria-hidden="true" className="text-3xl">
              🏠
            </span>
          </Link>
        </div>

        <div className="mt-3 sm:mt-0 flex gap-3">
          <Link
            to={'/login'}
            className="bg-black border-2 border-white text-white px-4 py-2 rounded cursor-pointer
              hover:bg-gray-800 hover:scale-105 transition transform duration-300 ease-in-out
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Sign-in
          </Link>
          <Link
            to={'/sign-up'}
            className="bg-white text-black px-4 py-2 rounded cursor-pointer
              hover:bg-gray-200 hover:scale-105 transition transform duration-300 ease-in-out
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          >
            Sign-up
          </Link>
        </div>
      </header>

      <main className="animate-fadeIn font-poppins">
        <Outlet />
      </main>

      <footer className="bg-gray-100 text-gray-600 py-4 text-center mt-8 border-t
        hover:text-gray-800 transition-colors duration-300 font-poppins"
      >
        © {new Date().getFullYear()} Notes App. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </>
  );
}

export default BasicLayouts;
