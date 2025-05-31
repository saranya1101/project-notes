import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <div
      className="flex items-center justify-center min-h-[80vh] bg-cover bg-center px-4"
      style={{
        fontFamily: "'Times New Roman', Times, serif",
        backgroundImage: "url('https://i.pinimg.com/736x/77/e2/fb/77e2fb92bb5ac0857bfefd98a0b15f4a.jpg')"
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-lg border border-stone-200 rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center hover:shadow-fuchsia-300 transition-shadow duration-300"
      >
        <h2 className="text-3xl font-bold text-fuchsia-700 mb-6 drop-shadow-sm tracking-tight">
          Login
        </h2>

        <input
          id="email"
          type="email"
          name="username"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full mb-6 px-6 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-fuchsia-300 transition"
          autoComplete="email"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        />

        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className="w-full mb-8 px-6 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-fuchsia-300 transition"
          autoComplete="current-password"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        />

        <button
          type="submit"
          className="bg-fuchsia-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-fuchsia-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-300"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
