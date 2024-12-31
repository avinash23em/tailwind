import { useState } from 'react';

export default function Home() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-sm text-blue-200 italic">
          Enter your details which may not be used afterwards in the process
        </h1>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter your email"
          className="h-100 w-400 px-4 py-3 bg-blue-400 rounded-lg text-white placeholder-gray-100 outline-none"
        />
      </div>
<div>
<button
        className={`w-64 px-4 py-3 rounded-lg ${
          disabled ? 'bg-green-200' : 'bg-blue-900'
        } text-black`}
      >
        Continue
      </button>
      </div>
    </div>
  );
}
