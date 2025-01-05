import React from 'react';
import Header from '../components/dashboard/Header';

const ChatBots = () => {
  return (
    <>
      <Header title="Chat Bots" />
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Chat Bot Management</h2>
        {/* Chat bot specific content will go here */}
      </div>
    </>
  );
};

export default ChatBots;