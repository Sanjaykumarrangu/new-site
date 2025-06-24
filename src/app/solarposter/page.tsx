'use client';

import React from 'react';
import Image from 'next/image';
import { Contact } from 'lucide-react';

const SolarPoster = () => {
  return (
    <div className="bg-white text-blue-900 font-serif p-6 sm:p-10 mx-auto shadow-2xl border rounded-2xl  mt-12">
      <div className="flex flex-col items-center text-center space-y-4">

        {/* Logo + Title */}
        <div className="mt-6">
        <Image
  src="/logofinal.jpg"
  alt="Vortex Logo"
  width={100}
  height={60}
  className="mb-3 rounded-md block mx-auto"
/>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 leading-tight">
            VORTEX POWERLINE SOLUTIONS
          </h1>
          <p className="text-base sm:text-lg italic tracking-wide text-gray-700">
            WE POWER WITH THE SUN
          </p>
        </div>

        {/* Scheme Title */}
        <h2 className="text-xl sm:text-2xl text-green-700 font-bold tracking-wide mt-2">
          PM SURYAGHAR: MUFT BIJLI YOJANA
        </h2>

        {/* Table */}
        <div className="overflow-x-auto mt-6 w-full">
          <table className="min-w-full table-auto border border-gray-400 text-sm sm:text-base">
            <thead className="bg-blue-100 text-blue-800 font-semibold">
              <tr>
                <th className="border px-3 py-2">Capacity</th>
                <th className="border px-3 py-2">Monthly Units</th>
                <th className="border px-3 py-2">Total Cost (₹)</th>
                <th className="border px-3 py-2">Govt. Subsidy (₹)</th>
                <th className="border px-3 py-2">Final Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 kW", "120", "84,000", "30,000", "54,000"],
                ["2 kW", "240", "1,50,000", "60,000", "90,000"],
                ["3 kW", "360", "2,15,000", "78,000", "1,37,000"],
                ["4 kW", "480", "2,70,000", "78,000", "1,92,000"],
                ["5 kW", "600", "3,30,000", "78,000", "2,52,000"],
                ["6 kW", "720", "3,99,000", "78,000", "3,21,000"],
                ["8 kW", "960", "5,29,000", "78,000", "4,51,000"],
                ["10 kW", "1200", "6,44,000", "78,000", "5,66,000"],
              ].map(([cap, unit, cost, sub, final], idx) => (
                <tr key={idx} className="text-center text-gray-800">
                  <td className="border px-3 py-2">{cap}</td>
                  <td className="border px-3 py-2">{unit}</td>
                  <td className="border px-3 py-2">{cost}</td>
                  <td className="border px-3 py-2">{sub}</td>
                  <td className="border px-3 py-2">{final}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Statements */}
        <div className="mt-6 space-y-3 text-sm sm:text-base leading-relaxed">
          <p className="font-semibold text-center text-yellow-700">
            “UP TO ₹78,000 SUBSIDY IS DIRECTLY CREDITED TO YOUR ACCOUNT UNDER THE PM SURYAGHAR YOJANA SCHEME.”
          </p>

          <p className="text-blue-800 font-bold">
            Generate your own power using solar energy and say goodbye to electricity bills.
          </p>

          <p className="text-red-600 font-semibold">
            Export extra units to DISCOM and earn money.
          </p>

          <p className="font-bold text-yellow-600 text-center">
            All banks will provide loans with EMI options for domestic customers.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default SolarPoster;
