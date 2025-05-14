import React from "react";

const ChatInput: React.FC = () => (
  <footer className="px-5 py-5 bg-[#161D22] backdrop-blur-sm border-t border-[#1A1F2C] rounded-3xl my-5 ml-5 mr-6 ">
    <div className="flex items-center gap-4">
      {/* Attachment button */}
      <button className="p-3 rounded-full bg-dark-gray text-yellow-500 hover:text-[#10EAEA] transition">
        <img src="/assets/eclipse.svg" alt="attach" className="w-5 h-5" />
      </button>

      {/* Text input + inline icons */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full bg-[#1A1F2C] rounded-full py-3 px-4 pr-28 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10EAEA]"
        />

        {/* Emoji button */}
        <button className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#10EAEA] transition">
          <img src="/assets/smile.svg" alt="emoji" className="w-5 h-5" />
        </button>

        {/* File picker button */}
        <button className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#10EAEA] transition">
          <img src="/assets/file.svg" alt="file" className="w-5 h-5" />
        </button>

        {/* GIF button */}
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#10EAEA] transition">
          <img src="/assets/GIF.svg" alt="gif" className="w-5 h-5" />
        </button>
      </div>

      {/* Send button */}
      <button className="p-3 rounded-full bg-[#10EAEA] text-black hover:bg-opacity-90 transition">
        <img src="/assets/arrow-right.svg" alt="send" className="w-5 h-5" />
      </button>
    </div>
  </footer>
);

export default ChatInput;
