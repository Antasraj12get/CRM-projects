import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dummy data for bar chart
    setData([
      { name: "Jan", users: 30 },
      { name: "Feb", users: 45 },
      { name: "Mar", users: 60 },
      { name: "Apr", users: 75 },
      { name: "May", users: 90 },
    ]);
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="text-gray-500 text-sm">Users</h4>
          <p className="text-2xl font-semibold">1,024</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="text-gray-500 text-sm">Products</h4>
          <p className="text-2xl font-semibold">312</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="text-gray-500 text-sm">Revenue</h4>
          <p className="text-2xl font-semibold">₹1.2L</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
