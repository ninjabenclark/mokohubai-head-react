import React from "react";

function MokoHubHead() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Welcome to MokoHub
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          This is the intelligent front-end head for the MokoHub system —
          styled with Tailwind, powered by React, and connected through Vite.
        </p>
        <div className="text-sm text-gray-500">
          System status: <span className="text-green-600 font-semibold">Online</span>
        </div>
      </div>
    </div>
  );
}

export default MokoHubHead;
