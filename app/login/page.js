"use client"
// import React from 'react'
// import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// const page = () => {
//   // const title = "Hi,I'm Aman";
//   // const intro = "i am web developer and designer specializing in java and the MERN stack with Tailwind CSS for building responsive and modern websites. I focus on creating innovative solutions that solve real-world problems and deliver seamless digital experiences for clients.";
//   // const location = "Indore MP";
//   // const mess = "Available for new project/work";

//   const title = "School Mangement System";
//   const intro = "A website to manege students and teacher data with full functionality";
//   const techstack = ["HTML" , "CSS" , "JS" , "Node.js" , "express.js" , "MongoDB"];
//   const github = "no link";
//   const demo = "no link";
//   const title_img = "/project-2.png";
//   const images = ["/project-2.png"];
//   const features = [{
//     title:"Attendance System",
//     detail : "students can see monthly attendance and percent as well",
//     image : "/Project-1-all/10.png"
//   }];
//   const created_At = "20-09-25";

//   const update_user = async ()=>{
//     console.log("user upding")
//       const res = await fetch("/api/user" , {
//         method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body: JSON.stringify({title , intro , location , mess})
//      });
//       const User = await res.json();
//       console.log(User);
//   }

//  const update_project = async ()=>{
//   console.log(" project adding");
//   const res = await fetch("/api/projects" , {
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body: JSON.stringify({title , intro , techstack , github , demo , title_img , images , features , created_At})
//      });
//       const projects = await res.json();
//       console.log(projects);

//  }

// //   useEffect(() => {
// // //    update_user();
// //       update_project();
// //   }, [])
   
  

// {/* <h2 className='hover:text-green-500 ' ><Link href="/login/register" >Register</Link></h2> */}

//   return (
//     <div>
//     </div>
//   )
// }

// export default page



import React, { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validate = () => {
    if (!username.trim()) return 'Username is required.';
    if (!password) return 'Password is required.';
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
      // Example: POST to your API route for login
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Login failed');

      setSuccess('Login successful! Redirecting...');
      setUsername('');
      setPassword('');
      router.push("/dashboard")
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-zinc-700 bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">Welcome Back</h1>

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
              className="absolute right-2 top-9 text-sm px-2 py-1 rounded"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-xl bg-indigo-600 text-white font-medium disabled:opacity-60"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-gray-500">
          Don’t have an account? <Link href="/login/register" className='text-blue-500 cursor-pointer' >Register</Link>
        </p>
      </div>
    </div>
  );
}

