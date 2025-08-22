export default function MembersTable() {
  const members = [
    { name: "Jason Cooper", expired: "08/05/24", age: 24, status: "Active", tel: "207-555-0119" },
    { name: "Sarah Lynn", expired: "12/12/24", age: 29, status: "Inactive", tel: "207-555-0199" },
  ];

  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow">
      <p className="text-gray-400 mb-4">All Members</p>
      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="text-left">Name</th>
            <th>Expired Date</th>
            <th>Age</th>
            <th>Status</th>
            <th>Tel</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td>{m.name}</td>
              <td className="text-center">{m.expired}</td>
              <td className="text-center">{m.age}</td>
              <td className="text-center">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    m.status === "Active" ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {m.status}
                </span>
              </td>
              <td className="text-center">{m.tel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
