import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function containsSpecialChar(str) {
    return /[!@#$%^&*(),.?":{}|<>]/g.test(str);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = 'saranyasara1101@gmial.com';
    const isPasswordValid = password.length === 8 && containsSpecialChar(password);

    if (email === validEmail && isPasswordValid) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'Please check your email or password.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-sky-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-lg border border-stone-200 rounded-3xl shadow-2xl p-8 max-w-md w-full space-y-6"
      >

        <h2 className="text-3xl font-bold text-center text-fuchsia-700">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          required
        />

        <button
          type="submit"
          className="w-full bg-fuchsia-600 text-white px-4 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-fuchsia-700 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

