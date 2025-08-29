import { useState, useEffect } from "react";

interface Member {
  id: number | null;
  name: string;
  age: string;
  plan: string;
}

interface MemberFormProps {
  onSave: (member: Member) => void;
  onCancel: () => void;
  editingMember?: Member;
}

export default function MemberForm({
  onSave,
  onCancel,
  editingMember,
}: MemberFormProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [plan, setPlan] = useState("");

  useEffect(() => {
    if (editingMember) {
      setName(editingMember.name);
      setAge(editingMember.age);
      setPlan(editingMember.plan);
    } else {
      setName("");
      setAge("");
      setPlan("");
    }
  }, [editingMember]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: editingMember?.id ?? null,
      name,
      age,
      plan,
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl mb-8 max-w-md mx-auto border border-green-500">
      <h2 className="text-2xl font-extrabold mb-6 text-green-400 flex items-center gap-2">
        {editingMember ? "✏️ Edit Member" : "➕ Tambah Member"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-semibold text-green-300">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Masukkan nama member"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border-2 border-green-400 focus:border-green-500 text-white focus:outline-none transition"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold text-green-300">Umur</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min={1}
            placeholder="Masukkan umur"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border-2 border-green-400 focus:border-green-500 text-white focus:outline-none transition"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold text-green-300">Paket</label>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border-2 border-green-400 focus:border-green-500 text-white focus:outline-none transition"
          >
            <option value="">Pilih Paket</option>
            <option value="Bulanan">Bulanan</option>
            <option value="Tahunan">Tahunan</option>
            <option value="Personal Trainer">Personal Trainer</option>
          </select>
        </div>

        <div className="flex space-x-4 justify-end mt-6">
          <button
            type="submit"
            className="bg-green-500 px-6 py-2 rounded-lg font-bold text-white hover:bg-green-600 shadow-lg transition"
          >
            {editingMember ? "Simpan Perubahan" : "Tambah"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 px-6 py-2 rounded-lg font-bold text-white hover:bg-gray-700 shadow-lg transition"
          >
            Batal
                      </button>
        </div>
      </form>
    </div>
  );
}