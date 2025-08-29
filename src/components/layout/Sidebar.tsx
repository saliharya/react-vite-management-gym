"use client";

import { 
  LayoutGrid,
  Clock,
  Star,
  Settings,
  Book,
  Database,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [openPlayground, setOpenPlayground] = useState(false);

  return (
    <div className="w-64 bg-gray-900 text-gray-200 flex flex-col justify-between min-h-screen">
      {/* TOP SECTION */}
      <div>
        {/* Logo + Company */}
        <div className="p-4 flex items-center gap-2 border-b border-gray-800">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <h1 className="font-semibold">We Go GYM</h1>
            <p className="text-xs text-gray-400">Enterprise</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-4">
          <p className="px-4 text-xs font-semibold text-gray-400 uppercase">
            Platform
          </p>
          <nav className="mt-2 flex flex-col gap-1">
            {/* Playground with dropdown */}
            <button
              onClick={() => setOpenPlayground(!openPlayground)}
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-800 rounded"
            >
              <span className="flex items-center gap-2">
                <LayoutGrid size={18} /> Playground
              </span>
              {openPlayground ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {/* Dropdown Items */}
            {openPlayground && (
              <div className="ml-6 flex flex-col gap-1">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded text-sm"
                >
                  <Clock size={16} /> History
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded text-sm"
                >
                  <Star size={16} /> Starred
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded text-sm"
                >
                  <Settings size={16} /> Settings
                </a>
              </div>
            )}
          </nav>

          <p className="mt-4 px-4 text-xs font-semibold text-gray-400 uppercase">
            Docs
          </p>
          <nav className="mt-2 flex flex-col gap-1">
            <a
              href="/member"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded"
            >
              <Book size={18} /> Member
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded"
            >
              <Database size={18} /> Models
            </a>
          </nav>
        </div>
      </div>

      {/* USER SECTION */}
      <div className="p-4 border-t border-gray-800 flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40?img=11"
          alt="user"
          className="rounded-full w-10 h-10"
        />
        <div>
          <p className="text-sm font-medium">shadcn</p>
          <p className="text-xs text-gray-400">m@example.com</p>
        </div>
      </div>
    </div>
  );
}
