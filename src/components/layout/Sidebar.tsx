import { Home, BarChart, Users, Calendar } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">goJim</h1>
      <nav className="flex flex-col gap-4">
        <a href="/" className="flex items-center gap-2 hover:text-green-400">
          <Home size={20} /> Home
        </a>
        <a href="/analytics" className="flex items-center gap-2 hover:text-green-400">
          <BarChart size={20} /> Analytics
        </a>
        <a href="/trainer" className="flex items-center gap-2 hover:text-green-400">
          <Users size={20} /> Trainer
        </a>
        <a href="/schedule" className="flex items-center gap-2 hover:text-green-400">
          <Calendar size={20} /> Schedule
        </a>
      </nav>
    </div>
  );
}
