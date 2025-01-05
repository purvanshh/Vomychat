import React from 'react';

const DonutChart = ({ percentage, color }: { percentage: number; color: string }) => (
  <div className="relative w-32 h-32">
    <svg className="w-full h-full" viewBox="0 0 36 36">
      <path
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#eee"
        strokeWidth="3"
      />
      <path
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray={`${percentage}, 100`}
      />
      <text x="18" y="20.35" className="text-lg font-medium" textAnchor="middle">
        {percentage}%
      </text>
    </svg>
  </div>
);

const ClientsAndChallenges = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Clients and Challenges</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <DonutChart percentage={75} color="#6B46C1" />
        </div>
        <div className="flex items-center justify-center">
          <DonutChart percentage={85} color="#9F7AEA" />
        </div>
      </div>
    </div>
  );
};

export default ClientsAndChallenges;