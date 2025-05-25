import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (email && password) {
      // Show SweetAlert success popup
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: `Welcome back, ${email}!`,
        confirmButtonColor: '#a21caf', // fuchsia-ish
      });

      setEmail('');
      setPassword('');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in both email and password.',
        confirmButtonColor: '#a21caf',
      });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-fuchsia-700 mb-4">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        />

        <button
          type="submit"
          className="w-full bg-fuchsia-600 text-white py-2 rounded-md font-semibold hover:bg-fuchsia-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
