'use client';

import { useState } from 'react';

const AdminPage = () => {
  const [auth, setAuth] = useState(false);
  const [input, setInput] = useState('');

  const PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASS || 'secret123'; // fallback for demo

  const handleLogin = () => {
    if (input === PASSWORD) {
      setAuth(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 w-full border rounded mb-4"
          />
          <button onClick={handleLogin} className="w-full bg-green-600 text-white py-2 rounded">
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">🔐 Admin Dashboard</h1>
      <p>You are now viewing a protected route.</p>
      {/* Add admin-only features here */}
    </div>
  );
};

export default AdminPage;
