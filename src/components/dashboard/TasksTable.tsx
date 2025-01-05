import React from 'react';
import { Plus } from 'lucide-react';

const TasksTable = () => {
  const tasks = [
    {
      name: 'Cold Calling Campaign',
      status: 'Completed',
      success: 45,
      waiting: 0,
      failed: 3,
    },
    {
      name: 'Follow-up Calls',
      status: 'Pending',
      success: 28,
      waiting: 12,
      failed: 5,
    },
    {
      name: 'Lead Qualification',
      status: 'In Progress',
      success: 67,
      waiting: 23,
      failed: 8,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm mt-6">
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Agent Tasks</h2>
        <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg">
          <Plus size={16} />
          <span>Add a Task</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-4">Task Name</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Success Count</th>
              <th className="text-left p-4">Waiting Count</th>
              <th className="text-left p-4">Failed Count</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{task.name}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {task.status}
                  </span>
                </td>
                <td className="p-4">{task.success}</td>
                <td className="p-4">{task.waiting}</td>
                <td className="p-4">{task.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksTable;