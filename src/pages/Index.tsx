import React from "react";
import SidebarNavigation from "../components/SidebarNavigation";
import ChannelsSidebar from "../components/ChannelsSidebar";
import ChatHeader from "../components/ChatHeader";
import ChatArea from "../components/ChatArea";
import ChatInput from "../components/ChatInput";
import RightSidebar from "../components/RightSidebar";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarNavigation />
      <ChannelsSidebar />

      <div className="flex flex-col flex-1">
        <ChatHeader />

        <div className="flex-1 flex flex-col pr-[360px]">
          <ChatArea />
          <ChatInput />
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default Index;
