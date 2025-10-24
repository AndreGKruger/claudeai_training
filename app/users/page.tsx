import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import StatCard from "@/components/StatCard";

export default function UsersPage() {
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: "4",
      name: "Alice Williams",
      email: "alice@example.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: "5",
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "User",
      status: "Active",
    },
  ];

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard title="Total Users" value="2,543" />
          <StatCard title="Active Users" value="2,124" />
          <StatCard title="New This Month" value="318" />
        </div>

        <DataTable title="All Users" columns={columns} data={users} />
      </div>
    </div>
  );
}
