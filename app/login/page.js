import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div className='bg-moviedb-black min-h-screen flex items-center justify-center '>
      <div className='w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl mt-10'>
        <div className='text-center mb-6'>
          <h1 className='text-white text-3xl font-bold mb-4'>Sign In</h1>

          <form
            id='loginForm'
            className='space-y-4'>
            <input
              type='email'
              placeholder='Email or phone number'
              className='w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red'
              required
            />
            <input
              type='password'
              placeholder='Password'
              className='w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red'
              required
            />
            <button
              type='submit'
              className='w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300'>
              Sign In
            </button>
          </form>

          <div className='mt-4 flex justify-between text-moviedb-gray text-sm'>
            <label className='flex items-center'>
              <input
                type='checkbox'
                className='mr-2'
              />
              Remember me
            </label>
            <Link
              href='/help'
              className='hover:underline'>
              Need help?
            </Link>
          </div>

          <div className='mt-6 text-moviedb-gray'>
            New to moviedb?
            <Link
              href='/register'
              className='text-white hover:underline'>
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
