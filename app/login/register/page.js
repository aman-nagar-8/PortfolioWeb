"use client"
import React, { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validate = () => {
    if (!username.trim()) return 'Username is required.';
    if (username.length < 3) return 'Username must be at least 3 characters.';
    if (!password) return 'Password is required.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return '';
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');

    const err = validate();
    if (err) return setError(err);

    setLoading(true);
    try {
      // Example: POST to your API route. Make sure server hashes passwords!
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Registration failed');
      if(data?.success){
        setSuccess('Registered successfully. You can now log in.');
      } else {
        setError(data?.message)
      }
      setUsername('');
      setPassword('');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-zinc-700 bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl  font-semibold mb-4 text-center">Create account</h1>

        {error && (
          <div className="mb-3 text-sm text-red-700 bg-red-100 p-3 rounded">{error}</div>
        )}
        {success && (
          <div className="mb-3 text-sm text-green-800 bg-green-100 p-3 rounded">{success}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Username</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="your-username"
              className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>

          <label className="block relative">
            <span className="text-sm font-medium">Password</span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />

            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-9 text-sm px-2 py-1 rounded cursor-pointer"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </label>

          <button
            type="submit"
            disabled={loading}
            className={` ${loading ? "":"cursor-pointer "} w-full py-2 rounded-xl bg-indigo-600 text-white font-medium disabled:opacity-60`}
          >
            {loading ? 'Creating...' : 'Create account'}
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-gray-500">
          By creating an account you agree to the terms. Passwords must be stored hashed on the server.
        </p>
      </div>
    </div>
  );
}
