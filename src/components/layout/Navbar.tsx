import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="h-16 bg-gray-800 flex items-center justify-between px-6 shadow">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <Bell className="text-gray-300" />
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
}
