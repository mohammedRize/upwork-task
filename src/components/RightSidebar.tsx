// RightSidebar.tsx
import { Search } from "lucide-react";

interface RightSidebarProps {
  className?: string;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ className }) => {
  const clubs = [
    {
      name: "Angry EA Sharks",
      img: "assets/539c85ce-ace8-44bb-b9b0-b3d042b41f3f.png",
    },
    {
      name: "We Scale Late",
      img: "assets/611f607e-9a0e-492d-98b4-9fb372859118.png",
    },
    { name: "Baron Thieves", img: "assets/baron.svg" },
  ];
  const feed = [
    {
      title: "Clutch or Kick?! INSANE Valorant Moments",
      img: "assets/6eb4589c-cb23-427a-ad7c-66b1c4c60c2a.png",
      subtitle: "Jump into some of the most intense Valorant plays!",
    },
    {
      title: "Valorant | Late Night Ranked Grind",
      img: "assets/23c7246d-43c8-4ed5-94d0-2f5b15f1797b.png",
      subtitle: "Follow my wild comms — let's see how high we can climb today",
    },
  ];

  return (
    <aside
      className={`fixed top-[64px] right-0 w-[380px] flex flex-col space-y-6 text-gray-300 ${className}`}
    >
      {/* Finder */}
      <div className="bg-[#1A1F2C]/80 backdrop-blur-md rounded-xl ring-1 ring-black/30 shadow-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Finder</h2>
        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {["Group", "Club", "Tournament"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 h-8 px-4 text-sm font-medium rounded-full transition ${
                tab === "Club"
                  ? "bg-[#10EAEA] text-black"
                  : "bg-[#27303A] text-gray-400 hover:bg-[#33404E]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Search */}
        <div className="relative mb-5">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={16}
          />
          <input
            type="text"
            placeholder="Search by club name"
            className="w-full h-10 bg-[#27303A] placeholder-gray-500 text-gray-200 text-sm rounded-lg pl-12 pr-4 focus:ring-2 focus:ring-[#10EAEA] outline-none"
          />
        </div>
        {/* Clubs */}
        <div className="space-y-3">
          {clubs.map(({ name, img }) => (
            <div
              key={name}
              className="flex items-center justify-between  rounded-full border-primary-blue border-2 ring-1 ring-black/20 shadow-md p-3 hover:bg-[#33404E]/80 transition"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-black/10">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-white">{name}</h3>
                    <img src="assets/flag.svg" alt="arrow-right" />
                  </div>
                  <p className="text-xs text-gray-400">UTC/GMT +2</p>
                </div>
              </div>
              <button className="h-8 px-4 text-sm font-semibold rounded-full text-primary-blue border-2 border-primary-blue hover:bg-opacity-90 transition">
                Join now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="bg-[#1A1F2C]/80 backdrop-blur-md rounded-xl ring-1 ring-black/30 shadow-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Feed</h2>
        <div className="space-y-4">
          {feed.map(({ title, img, subtitle }) => (
            <div
              key={title}
              className="bg-[#27303A]/90 rounded-lg ring-1 ring-black/20 shadow-md overflow-hidden hover:bg-[#33404E]/80 transition"
            >
              <div className="relative h-32">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#F54242] flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3">
                <h3 className="text-sm font-medium text-white">{title}</h3>
                <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
