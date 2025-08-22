import { TrendingUp } from "lucide-react";

export default function RevenueCard() {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow">
      <p className="text-gray-400">Revenue</p>
      <h2 className="text-2xl font-bold">$4,53k</h2>
      <div className="flex items-center text-green-400 text-sm mt-2">
        <TrendingUp size={16} className="mr-1" />
        +2.1% Month / July
      </div>
    </div>
  );
}
