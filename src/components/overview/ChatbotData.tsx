import React from 'react';
import { Users, MessageSquare, Clock } from 'lucide-react';

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

const ChatbotData = () => {
  const metrics = [
    { icon: Users, label: 'Total Users', value: '100', trend: 8 },
    { icon: MessageSquare, label: 'Active Chats', value: '500', trend: -5 },
    { icon: Clock, label: 'Response Time', value: '$20', trend: -3 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Chatbot Data</h2>
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricBox key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default ChatbotData;