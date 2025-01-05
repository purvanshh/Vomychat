import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const AgentOverview = () => {
  const agents = [
    { name: 'Voice Agent Pro', status: 'Not Assigned', amount: '$500.00' },
    { name: 'Voice Agent Plus', status: 'Not Assigned', amount: '$350.00' },
    { name: 'Voice Agent Basic', status: 'Not Assigned', amount: '$250.00' },
    { name: 'Voice Agent Lite', status: 'Not Assigned', amount: '$150.00' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Agent Overview</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Status</th>
              <th className="text-right py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={index} className="border-t">
                <td className="py-3">{agent.name}</td>
                <td className="py-3 text-gray-500">{agent.status}</td>
                <td className="py-3 text-right">{agent.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentOverview;