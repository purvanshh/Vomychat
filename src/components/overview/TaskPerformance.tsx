import React from 'react';
import { BarChart2, Users, Clock, DollarSign } from 'lucide-react';

const MetricCard = ({ icon: Icon, label, value, trend }: any) => (
  <div className="bg-white p-4 rounded-lg">
    <div className="flex items-center gap-2 text-purple-600 mb-2">
      <Icon size={20} />
      <span className="text-sm">{label}</span>
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-semibold">{value}</span>
      <span className={`text-xs ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
  </div>
);

const TaskPerformance = () => {
  const metrics = [
    { icon: BarChart2, label: 'Total Tasks', value: '15', trend: 8 },
    { icon: Users, label: 'Active Users', value: '892', trend: -2 },
    { icon: Clock, label: 'Avg. Response', value: '1.2s', trend: 12 },
    { icon: DollarSign, label: 'Revenue', value: '$12.4k', trend: 15 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg mb-6">
      <h2 className="text-lg font-semibold mb-4">Task Performance</h2>
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default TaskPerformance;