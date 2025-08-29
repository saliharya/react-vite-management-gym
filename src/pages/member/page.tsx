import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import MemberForm from "./create";

interface Member {
  id: number | null;
  name: string;
  age: string;
  plan: string;
}

export default function MemberPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [editingMember, setEditingMember] = useState<Member | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);

  const handleSave = (member: Member) => {
    if (member.id) {
      setMembers((prev) => prev.map((m) => (m.id === member.id ? member : m)));
    } else {
      const newMember = { ...member, id: Date.now() };
      setMembers((prev) => [...prev, newMember]);
    }
    setEditingMember(undefined);
    setShowModal(false);
  };

  const handleEdit = (member: Member) => {
    setEditingMember(member);
    setShowModal(true);
  };

  const handleDelete = (id: number | null) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const handleAdd = () => {
    setEditingMember(undefined);
    setShowModal(true);
  };

  const handleCancel = () => {
    setEditingMember(undefined);
    setShowModal(false);
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
          {/* Tabel Members */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
              {/* Header + Tombol */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">📋 Daftar Member</h2>
                <button
                  onClick={handleAdd}
                  className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition mb-4 inline-block"
                >
                  + Tambah Member
                </button>
              </div>

              {/* Tabel */}
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

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="bg-gray-900 rounded-3xl shadow-2xl p-6 border border-green-500">
                <MemberForm
                  onSave={handleSave}
                  onCancel={handleCancel}
                  editingMember={editingMember}
                />
                <button
                  onClick={handleCancel}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl font-bold"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}