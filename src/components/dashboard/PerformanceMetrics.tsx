import React from 'react';
import { Phone, Clock, CheckCircle, DollarSign } from 'lucide-react';

const MetricCard = ({ icon: Icon, label, value, trend }: any) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className="text-gray-400">
        <Icon size={24} />
      </div>
    </div>
    {trend && (
      <div className="mt-2 text-sm text-green-500">
        +{trend}% from last month
      </div>
    )}
  </div>
);

const PerformanceMetrics = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <MetricCard
        icon={Phone}
        label="Total Calls"
        value="1,234"
        trend="12"
      />
      <MetricCard
        icon={Clock}
        label="Talk Time"
        value="256h"
        trend="8"
      />
      <MetricCard
        icon={CheckCircle}
        label="Success Rate"
        value="89"
        trend="5"
      />
      <MetricCard
        icon={DollarSign}
        label="Total Credit"
        value="$2.5k"
        trend="15"
      />
    </div>
  );
};

export default PerformanceMetrics;