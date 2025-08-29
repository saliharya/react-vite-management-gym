import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

interface Member {
  id: number | null;
  name: string;
  age: string;
  plan: string;
}

interface MemberFormProps {
  onSave: (member: Member) => void;
  editingMember?: Member;
}

function MemberForm({ onSave, editingMember }: MemberFormProps) {
  const [form, setForm] = useState<Member>(
    editingMember || { id: null, name: "", age: "", plan: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.plan) return;
    onSave(form);
    setForm({ id: null, name: "", age: "", plan: "" });
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-4">
        {form.id ? "✏️ Edit Member" : "➕ Tambah Member"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nama"
          className="w-full p-3 rounded-xl text-black"
        />
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Umur"
          className="w-full p-3 rounded-xl text-black"
        />
        <input
          type="text"
          name="plan"
          value={form.plan}
          onChange={handleChange}
          placeholder="Paket"
          className="w-full p-3 rounded-xl text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-xl text-white hover:bg-blue-600 transition"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default function MemberPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [editingMember, setEditingMember] = useState<Member | undefined>(
    undefined
  );

  const handleSave = (member: Member) => {
    if (member.id) {
      setMembers((prev) =>
        prev.map((m) => (m.id === member.id ? member : m))
      );
    } else {
      const newMember = { ...member, id: Date.now() };
      setMembers((prev) => [...prev, newMember]);
    }
    setEditingMember(undefined);
  };

  const handleEdit = (member: Member) => {
    setEditingMember(member);
  };

  const handleDelete = (id: number | null) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form tambah/edit */}
          <div className="lg:col-span-1">
            <MemberForm onSave={handleSave} editingMember={editingMember} />
          </div>

          {/* Tabel Members */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-bold mb-4">📋 Daftar Member</h2>
              <table className="w-full border-collapse border border-gray-700 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border border-gray-700 px-3 py-2">Nama</th>
                    <th className="border border-gray-700 px-3 py-2">Umur</th>
                    <th className="border border-gray-700 px-3 py-2">Paket</th>
                    <th className="border border-gray-700 px-3 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {members.length === 0 ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-center py-3 text-gray-400 border border-gray-700"
                      >
                        Belum ada member
                      </td>
                    </tr>
                  ) : (
                    members.map((m) => (
                      <tr key={m.id} className="text-center">
                        <td className="border border-gray-700 px-3 py-2">
                          {m.name}
                        </td>
                        <td className="border border-gray-700 px-3 py-2">
                          {m.age}
                        </td>
                        <td className="border border-gray-700 px-3 py-2">
                          {m.plan}
                        </td>
                        <td className="border border-gray-700 px-3 py-2 space-x-2">
                          <button
                            onClick={() => handleEdit(m)}
                            className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(m.id)}
                            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
