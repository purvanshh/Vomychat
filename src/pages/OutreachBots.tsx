import React from 'react';
import Header from '../components/dashboard/Header';

const OutreachBots = () => {
  return (
    <>
      <Header title="Outreach Bots" />
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Outreach Bot Management</h2>
        {/* Outreach bot specific content will go here */}
      </div>
    </>
  );
};

export default OutreachBots;