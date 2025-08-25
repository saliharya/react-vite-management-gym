import { Dumbbell } from "lucide-react";

export default function TrainerCard() {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow">
      <p className="text-gray-400">Trainer</p>
      <h2 className="text-2xl font-bold">12</h2>
      <div className="flex items-center text-green-400 text-sm mt-2">
        <Dumbbell size={16} className="mr-1" />
        +3.6% Active Trainers
      </div>
    </div>
  );
}
