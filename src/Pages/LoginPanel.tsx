import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPanel: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onFinish = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ email, password });
    };

    const onSave = (authRequest: { email: string, password: string }) => {
        fetch('http://localhost:8080/api/auth/admin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(authRequest),
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem("lawToken", data.token);
                    navigate("/articles");
                } else {
                    setError(data.message || 'Login failed');
                }
            })
            .catch(err => {
                console.error(err);
                setError('An error occurred during login');
            });
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
        <div className="w-full max-w-md space-y-6 rounded-2xl bg-white/10 p-8 shadow-lg backdrop-blur-md transition hover:shadow-xl dark:bg-gray-800/50">
          <h2 className="text-center text-2xl font-bold text-white">Admin Login</h2>
          
          {error && (
            <div className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-md">
              {error}
            </div>
          )}
  
          <form onSubmit={onFinish} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-200">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-500 focus:ring-4 focus:ring-blue-300"
            >
              Login
            </button>
          </form>
  
          <p className="text-center text-sm text-gray-400">
            Forgot your password? <a href="#" className="text-blue-400 hover:underline">Reset it</a>
          </p>
        </div>
      </div>
    );
};

export default LoginPanel;
