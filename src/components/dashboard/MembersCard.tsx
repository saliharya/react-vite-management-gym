import { Users } from "lucide-react";

export default function MembersCard() {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow">
      <p className="text-gray-400">Members</p>
      <h2 className="text-2xl font-bold">89</h2>
      <div className="flex items-center text-red-400 text-sm mt-2">
        <Users size={16} className="mr-1" />
        -1.8% Active Members
      </div>
    </div>
  );
}
