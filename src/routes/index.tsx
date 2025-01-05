import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Overview from '../pages/Overview';
import VoiceAgents from '../pages/VoiceAgents';
import ChatBots from '../pages/ChatBots';
import OutreachBots from '../pages/OutreachBots';
import Settings from '../pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Overview /> },
      { path: '/voice-agents', element: <VoiceAgents /> },
      { path: '/chat-bots', element: <ChatBots /> },
      { path: '/outreach-bots', element: <OutreachBots /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
]);