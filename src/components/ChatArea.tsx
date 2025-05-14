import React from 'react';
import MessageItem from './MessageItem';
import { cn } from '@/lib/utils';

interface ChatAreaProps {
  className?: string;
}

const ChatArea: React.FC<ChatAreaProps> = ({ className }) => {
  return (
    <div className={cn("flex-1 overflow-y-auto text-gray-300", className)}>
      <div className="py-2">
        <div className="flex justify-center mb-4">
          <div className="rounded-md px-4 py-1 text-xs text-valorant-gray bg-[#1A1F2C]">
            June 06, 2023
          </div>
        </div>

        <MessageItem
          username="Alexandra Tillman"
          // swapped: Alexandra now has Sam's avatar
          avatar="assets/ec93c428-2041-4c21-967a-b9c79f171f9d.png"
          timestamp="05/06/2023 12:50 PM"
          message="yo anyone on for comp tonight? need 1 for full 5-stack 🔥"
          reactions={[{ type: 'heart', count: 2 }]}
        />

        <MessageItem
          username="Sam McDermott"
          avatar="assets/9592ee4b049ceabdcea066a835df23e220f3e415.png"
          timestamp="05/06/2023 12:50 PM"
          message="depends... are we playing seriously or just for fun"
          reactions={[
            { type: 'fire', count: 1 },
            { type: 'heart', count: 2 },
          ]}
        />

        <MessageItem
          username="Alexandra Tillman"
          avatar="assets/ec93c428-2041-4c21-967a-b9c79f171f9d.png"
          timestamp="05/06/2023 12:50 PM"
          message="serious, trying to hit plat this act 🤔"
        />

        <MessageItem
          username="Sam McDermott"
          avatar="assets/48dfd976-6767-4075-9b9f-cd6816b091c6.png"
          timestamp="05/06/2023 12:50 PM"
          message={
            "count me in! I'll lock Jett as usual 😎\nalso anyone seen the new bundle?? the finisher is insane 🔥"
          }
          reactions={[{ type: 'fire', count: 1 }]}
        />

        <MessageItem
          username="Alexandra Tillman"
          avatar="assets/ec93c428-2041-4c21-967a-b9c79f171f9d.png"
          timestamp="05/06/2023 12:50 PM"
          message="YES the sound effects are sooo clean but 7k VP is wild 😱"
        />

        <MessageItem
          username="Sam McDermott"
          avatar="assets/48dfd976-6767-4075-9b9f-cd6816b091c6.png"
          timestamp="05/06/2023 12:50 PM"
          message="i'll join if I don't have to play smokes again pls 😭"
          reactions={[{ type: 'heart', count: 2 }]}
        />

        <MessageItem
          username="Alexandra Tillman"
          avatar="assets/ec93c428-2041-4c21-967a-b9c79f171f9d.png"
          timestamp="05/06/2023 12:50 PM"
          message="fine fine, i'll smoke 😒 just don't wall me off again like last game"
        />

        <MessageItem
          username="Sam McDermott"
          avatar="assets/48dfd976-6767-4075-9b9f-cd6816b091c6.png"
          timestamp="05/06/2023 12:50 PM"
          message="that was ONCE 😁"
        />
      </div>
    </div>
  );
};

export default ChatArea;