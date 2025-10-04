import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, fetchUsers } from '../features/user/userSlice';
import type { RootState, AppDispatch } from '../app/store';

const Signup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, error } = useSelector((state: RootState) => state.users);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // only fetch if no users in Redux (avoids duplicate fetch on refresh)
    if (list.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, list.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    dispatch(createUser({ name, email }));

    // reset form
    setName('');
    setEmail('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
    <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Create Account</h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed transition"
      >
        {loading ? "Saving..." : "Sign Up"}
      </button>
    </form>

    {error && <p className="text-red-500 text-center mt-4">⚠ {error}</p>}

    <p className="text-gray-600 text-center mt-6 text-sm">
      Already have an account?{" "}
      <a href="/login" className="text-blue-600 hover:underline">
        Log in
      </a>
    </p>
  </div>
</div>

  );
};

export default Signup;
