export default function PersonalTrainer() {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow">
      <p className="text-gray-400 mb-4">Personal Trainer</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700 p-4 rounded-xl">
          <img
            src="https://i.pravatar.cc/100?img=1"
            alt="trainer"
            className="rounded-lg mb-2"
          />
          <h3 className="font-semibold">King Zarips</h3>
          <p className="text-sm text-gray-400">3+ Years</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-xl">
          <img
            src="https://i.pravatar.cc/100?img=2"
            alt="trainer"
            className="rounded-lg mb-2"
          />
          <h3 className="font-semibold">Lerry Rops</h3>
          <p className="text-sm text-gray-400">2+ Years</p>
        </div>
      </div>
    </div>
  );
}
