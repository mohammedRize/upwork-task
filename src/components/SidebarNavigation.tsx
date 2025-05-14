import React from "react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
}

const navItems = [
  { src: "./assets/dashboard.svg", label: "Dashboard", alt: "dashboard" },
  { src: "./assets/players.svg", label: "Players",   alt: "players" },
  { src: "./assets/clubs.svg",   label: "Clubs",     alt: "clubs" },
  { src: "./assets/federations.svg", label: "Federations", alt: "federations" },
  { src: "./assets/tournament.svg",  label: "Tournament",  alt: "tournament" },
  { src: "./assets/leagues.svg",     label: "League",      alt: "leagues" },
  { src: "./assets/group-finder.svg",label: "Group finder",alt: "group-finder" },
  { src: "./assets/games.svg",       label: "Games",       alt: "games" },
]

const SidebarNavigation: React.FC<SidebarProps> = ({ className }) => {
  return (
    <nav
      className={cn(
        "bg-[#242832] w-[80px] flex flex-col items-center py-8 border-r rounded-r-3xl border-[#1A1F2C]",
        className
      )}
    >
      {/* Logo */}
      <div className="mb-8">
        <svg
          width="25"
          height="38"
          viewBox="0 0 25 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            d="M8.00971 22.8375L10.2346 26.0178L0 38V0H12.055L25 8.39162L12.9854 22.8375H8.00971Z"
            fill="#99F9EA"
          />
          <path
            d="M13.0666 22.9141H23.6249V37.7814L13.0666 22.9141Z"
            fill="#99F9EA"
          />
        </svg>
      </div>

      {/* Navigation Icons with Labels */}
      <ul className="flex-1 flex flex-col items-center gap-6">
        {navItems.map(({ src, alt, label }) => (
          <li key={label} className="flex flex-col items-center gap-1">
            <button className="p-2 rounded-md hover:bg-[#27303A] transition">
              <img src={src} alt={alt} className="" />
            </button>
            <span className="text-xs text-gray-400">{label}</span>
          </li>
        ))}
      </ul>

      {/* Settings & Profile */}
      <div className="mt-auto flex flex-col items-center gap-4 mb-4">
        <button className="p-2 rounded-md hover:bg-[#27303A] transition">
          <img src="./assets/settings.svg" alt="settings" className="w-6 h-6" />
        </button>
        <div className="w-[48px] h-[48px] rounded-full border-2 border-valorant-green overflow-hidden">
          <img
            src="./assets/profile.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  )
}

export default SidebarNavigation
