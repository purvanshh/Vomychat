import React from 'react';
import Header from '../components/dashboard/Header';

const Settings = () => {
  return (
    <>
      <Header title="Settings" showButton={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
          {/* Profile settings form will go here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Payment Settings</h2>
          {/* Payment settings form will go here */}
        </div>
      </div>
    </>
  );
};

export default Settings;