"use client";

import { authenticate } from "./server-actions/authenticate";

export default function Login() {
  return (
    <main className="flex justify-center items-center h-full">
      <button
        className="bg-lime-600 hover:bg-lime-700 hover:text-white p-2 rounded-md "
        onClick={() => authenticate()}
      >
        Login to Spotify
      </button>
    </main>
  );
}

// Features: your coolest playlist, add song to your match queue?
