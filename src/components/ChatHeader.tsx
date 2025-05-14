import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface ChatHeaderProps {
  className?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-2  border-b border-[#1A1F2C]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <h1 className="flex justify-center items-center w-full text-xl font-bold flex items-center gap-2">
          <span className="text-white">#</span>
          <span>Valorant</span>
        </h1>
      </div>
      <div className="flex items-center gap-5">
      <Search className="text-valorant-gray hover:text-white mr-20"></Search>

        <button className="text-valorant-gray hover:text-white">
          <img src="assets/pin.svg" alt="pin" />{" "}
        </button>
        <button className="text-valorant-gray hover:text-white">
          <img src="assets/message.svg" alt="message" />
        </button>
        <button className="text-valorant-gray hover:text-white">
          <img src="assets/bell.svg" alt="bell" />
        </button>
        <div className=" rounded-full bg-valorant-green flex items-center justify-center cursor-pointer overflow-hidden">
          <img
            src="assets/bulls.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
