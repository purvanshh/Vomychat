import React from 'react';

const AgentsList = () => {
  const agents = [
    {
      name: 'Sales Agent Alpha',
      type: 'Voice',
      status: 'Active',
      calls: 245,
      successRate: '89%',
    },
    {
      name: 'Support Bot Beta',
      type: 'Voice',
      status: 'Active',
      calls: 189,
      successRate: '92%',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-4">Agent Name</th>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Total Calls</th>
              <th className="text-left p-4">Success Rate</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{agent.name}</td>
                <td className="p-4">{agent.type}</td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">
                    {agent.status}
                  </span>
                </td>
                <td className="p-4">{agent.calls}</td>
                <td className="p-4">{agent.successRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentsList;