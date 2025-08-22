import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import RevenueCard from "@/components/dashboard/RevenueCard";
import MembersCard from "@/components/dashboard/MembersCard";
import TrainerCard from "@/components/dashboard/TrainerCard";
import GymCapacity from "@/components/dashboard/GymCapacity";
import PersonalTrainer from "@/components/dashboard/PersonalTrainer";
import MembersTable from "@/components/dashboard/MembersTable";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Cards */}
          <RevenueCard />
          <MembersCard />
          <TrainerCard />
          <GymCapacity />

          {/* Trainers & Workouts */}
          <div className="lg:col-span-2">
            <PersonalTrainer />
          </div>
          {/* Table Members */}
          <div className="lg:col-span-3">
            <MembersTable />
          </div>
        </div>
      </div>
    </div>
  );
}
