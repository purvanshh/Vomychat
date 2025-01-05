import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const OutreachBot = () => {
  const data = [
    { name: 'HR Bot', type: 'Active', amount: '$500.00' },
    { name: 'Sales Task', type: 'Active', amount: '$300.00' },
    { name: 'Customer Bot', type: 'Active', amount: '$250.00' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Outreach Bot</h2>
        <button className="text-purple-600 px-4 py-2 rounded-lg border border-purple-600">
          Create New Bot
        </button>
      </div>
      <div className="bg-white rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <th className="text-left p-4">Bot</th>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-right p-4"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.type}</td>
                <td className="p-4">{item.amount}</td>
                <td className="p-4 text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutreachBot;