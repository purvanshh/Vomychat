import React from 'react';
import TaskPerformance from '../components/overview/TaskPerformance';
import AgentOverview from '../components/overview/AgentOverview';
import VoiceAgentData from '../components/overview/VoiceAgentData';
import ChatbotData from '../components/overview/ChatbotData';
import ClientsAndChallenges from '../components/overview/ClientsAndChallenges';
import OutreachBot from '../components/overview/OutreachBot';

const Overview = () => {
  return (
    <div className="space-y-6">
      <TaskPerformance />
      <AgentOverview />
      <VoiceAgentData />
      <ChatbotData />
      <ClientsAndChallenges />
      <OutreachBot />
    </div>
  );
};

export default Overview;