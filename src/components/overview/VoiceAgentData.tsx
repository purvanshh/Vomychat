import React from 'react';
import { Users, Phone, MessageSquare, DollarSign } from 'lucide-react';

const MetricBox = ({ icon: Icon, value, label, trend }: any) => (
  <div className="bg-white p-4 rounded-lg">
    <div className="flex items-center gap-2 mb-2">
      <Icon size={20} className="text-purple-600" />
      <span className="text-sm text-gray-600">{label}</span>
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-semibold">{value}</span>
      <span className={`text-xs ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
  </div>
);

const VoiceAgentData = () => {
  const metrics = [
    { icon: Users, label: 'Total Agents', value: '500', trend: 12 },
    { icon: Phone, label: 'Ongoing Calls', value: '80', trend: 5 },
    { icon: MessageSquare, label: 'Successful Calls', value: '20', trend: 8 },
    { icon: DollarSign, label: 'Revenue Generated', value: '$50', trend: 15 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Voice Agent Data</h2>
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricBox key={index} {...metric} />
        ))}
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="h-2 bg-purple-100 rounded-full">
          <div className="h-2 bg-purple-600 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <div className="mt-2 text-sm text-gray-500">200</div>
      </div>
    </div>
  );
};

export default VoiceAgentData;