import React from 'react';
import Header from '../components/dashboard/Header';
import AgentsList from '../components/agents/AgentsList';

const VoiceAgents = () => {
  return (
    <>
      <Header title="Voice Agents" />
      <AgentsList />
    </>
  );
};

export default VoiceAgents;