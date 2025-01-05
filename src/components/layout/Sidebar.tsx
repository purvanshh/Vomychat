import React from 'react';
import { NavLink } from 'react-router-dom';
import { Settings, Home, Users, MessageSquare, Bot, LogOut } from 'lucide-react';

const NavItem = ({ to, icon: Icon, children }: any) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-3 p-2 rounded-lg ${
        isActive ? 'bg-gray-100' : 'hover:bg-gray-100'
      }`
    }
  >
    <Icon size={20} />
    <span>{children}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold">AI Command</h2>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavItem to="/" icon={Home}>Overview</NavItem>
          </li>
          <li>
            <div className="flex items-center space-x-3 p-2">
              <Users size={20} />
              <span>Agents</span>
            </div>
            <ul className="ml-8 space-y-2">
              <li>
                <NavItem to="/voice-agents" icon={MessageSquare}>Voice Agents</NavItem>
              </li>
              <li>
                <NavItem to="/chat-bots" icon={MessageSquare}>Chat Bots</NavItem>
              </li>
              <li>
                <NavItem to="/outreach-bots" icon={Bot}>Outreach Bots</NavItem>
              </li>
            </ul>
          </li>
          <li>
            <NavItem to="/settings" icon={Settings}>Settings</NavItem>
          </li>
        </ul>
      </nav>
      
      <button className="flex items-center space-x-3 p-2 text-gray-600 hover:text-gray-900 w-full mt-auto">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;