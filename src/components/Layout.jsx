import { Outlet, NavLink } from "react-router-dom";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-6 hidden md:block">
        <h1 className="text-xl font-bold mb-6">CRM Dashboard</h1>
        <nav className="space-y-2">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "block px-4 py-2 bg-blue-600 rounded" : "block px-4 py-2 hover:bg-gray-700 rounded"}>
            Dashboard
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "block px-4 py-2 bg-blue-600 rounded" : "block px-4 py-2 hover:bg-gray-700 rounded"}>
            Products
          </NavLink>
        </nav>
      </aside>
      <div className="flex-1">
        <Topbar />
        <main className="p-6 bg-gray-100 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
