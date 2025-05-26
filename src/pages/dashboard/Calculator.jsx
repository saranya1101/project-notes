import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult('Error');
    }
  };

  const buttonClass = 'bg-teal-500 text-white p-4 rounded-md hover:bg-teal-700 transition-all';

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-indigo-100 px-4"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-6 w-full max-w-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Calculator</h2>

        <div className="mb-4 bg-gray-100 p-3 rounded text-right text-xl font-semibold text-gray-800">
          {input || '0'}
        </div>
        <div className="mb-6 bg-gray-50 p-2 rounded text-right text-lg text-gray-600">
          Result: {result}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === '=') {
                  handleCalculate();
                } else {
                  handleClick(btn.toString());
                }
              }}
              className={buttonClass}
            >
              {btn}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-500 hover:bg-red-700 text-white py-2 rounded-md mt-2"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

