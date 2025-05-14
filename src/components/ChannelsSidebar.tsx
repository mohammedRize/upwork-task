import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Search,
  Star,
  Plus,
  ChevronRight,
  ChevronDown,
  Users,
  Flag,
} from "lucide-react";

interface ChannelsSidebarProps {
  className?: string;
}

const ChannelsSidebar: React.FC<ChannelsSidebarProps> = ({ className }) => {
  const [expanded, setExpanded] = useState({ gaming: true });
  const toggleExpanded = (section: keyof typeof expanded) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <aside
      className={cn(
        " top-0 left-16 h-full w-[320px] bg-[#161D22] text-gray-300 flex flex-col overflow-hidden rounded-r-3xl",
        className
      )}
    >
      <div className="relative h-[178px] overflow-hidden rounded-br-3xl">
        <div className="absolute inset-0 bg-white/5 h-11 backdrop-blur-xs z-10" />
        <div className="absolute inset-0 bg-black/5 h-11 backdrop-blur-md z-10" />


        <img
          src="/assets/23c7246d-43c8-4ed5-94d0-2f5b15f1797b.png"
          alt="Valorant Banner"
          className="object-cover w-full h-full"
        />

        <div className="absolute top-3 left-4 flex items-center gap-2 z-20">
          <img
            src="/assets/aa2d811a-2fc4-45cf-ade7-c0f8b517953f.png"
            alt="Logo"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-white font-bold">Valorant</span>
        </div>

        <div className="absolute top-3 right-4 flex items-center gap-4 text-gray-300 z-20">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>259</span>
          </div>
          <div className="flex items-center gap-1">
            <Flag size={16} />
            <span>8</span>
          </div>
          <button>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="p-4 border-b border-[#1A1F2C] z-20">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Browse Channels"
            className="w-full h-10 bg-[#1A1F2C] rounded-lg pl-12 pr-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10EAEA]"
          />
        </div>
      </div>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#3A4754] to-transparent my-3 z-20" />

      <button className="flex items-center gap-3 px-4 py-2 hover:bg-[#1A1F2C] transition z-20">
        <img src="/assets/book.svg" alt="book" className="w-5 h-5" />
        <span className="text-light-gray">Rules</span>
      </button>
      <button className="flex items-center gap-3 px-4 py-2 hover:bg-[#1A1F2C] transition z-20">
        <img src="/assets/speaker.svg" alt="speaker" className="w-5 h-5" />
        <span className="text-light-gray">Announcements</span>
      </button>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#3A4754] to-transparent my-3 z-20" />

      <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-400 z-20">
        <span>Channels</span>
        <button className="hover:text-white transition">
          <Plus size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto z-20">
        <button
          onClick={() => toggleExpanded("gaming")}
          className="flex items-center gap-2 w-full px-4 py-2 hover:bg-[#1A1F2C] transition"
        >
          {expanded.gaming ? (
            <ChevronDown size={16} className="text-gray-300" />
          ) : (
            <ChevronRight size={16} className="text-gray-300" />
          )}
          <Star size={16} className="text-primary-blue" />
          <span className="font-medium text-light-gray">Gaming Rooms</span>
        </button>

        {expanded.gaming && (
          <div className="pl-9 pr-4 space-y-1">
            {[
              { name: "Valorant Mena", active: true },
              { name: "Valorant Saudi", active: false },
              { name: "Valorant Egypt", active: false },
            ].map(({ name, active }) => (
              <button
                key={name}
                className={cn(
                  "flex items-center gap-2 w-full px-2 py-2 rounded-lg transition",
                  active
                    ? "text-primary-blue"
                    : "text-light-gray hover:bg-[#1A1F2C]"
                )}
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-sm bg-[#1A1F2C]">
                  <img src="/assets/icon.svg" alt={name} className="w-4 h-4" />
                </div>
                <span className={active ? "text-primary-blue" : "text-light-gray"}>
                  {name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default ChannelsSidebar;
