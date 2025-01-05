import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/dashboard/Header';
import PerformanceMetrics from './components/dashboard/PerformanceMetrics';
import TasksTable from './components/dashboard/TasksTable';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        <PerformanceMetrics />
        <TasksTable />
      </main>
    </div>
  );
}

export default App;