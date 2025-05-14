import React from 'react'

type ReactionType = 'heart' | 'fire'
interface Reaction { type: ReactionType; count: number }

interface MessageProps {
  username: string
  avatar: string
  timestamp: string
  message: string
  reactions?: Reaction[]
}

const reactionIcon = {
  heart: '❤️',
  fire: '🔥',
}

const MessageItem: React.FC<MessageProps> = ({
  username,
  avatar,
  timestamp,
  message,
  reactions = [],
}) => {
  // Explicit username color mapping
  let usernameColorClass = 'text-white'
  if (username === 'Alexandra Tillman') {
    usernameColorClass = 'text-valorant-red'
  } else if (username === 'Sam McDermott') {
    usernameColorClass = 'text-valorant-orange'
  }

  return (
    <div className="px-4 py-3 hover:bg-[#1A1F2C]/40 transition">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={avatar} alt={username} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className={`font-semibold ${usernameColorClass}`}>{username}</span>
            <span className="text-xs text-gray-400">{timestamp}</span>
          </div>
          <p className="mt-1 text-white whitespace-pre-wrap">{message}</p>
          {reactions.length > 0 && (
            <div className="mt-2 flex gap-2">
              {reactions.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 bg-[#27303A]/80 rounded-full px-2 py-0.5 text-xs text-gray-200"
                >
                  <span>{reactionIcon[r.type]}</span>
                  <span>{r.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MessageItem
