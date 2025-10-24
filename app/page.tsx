import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import DataTable from "@/components/DataTable";
import ChartPlaceholder from "@/components/ChartPlaceholder";

export default function Home() {
  const recentActivity = [
    {
      id: "1",
      user: "John Doe",
      action: "Created new account",
      timestamp: "2 minutes ago",
    },
    {
      id: "2",
      user: "Jane Smith",
      action: "Updated profile",
      timestamp: "15 minutes ago",
    },
    {
      id: "3",
      user: "Bob Johnson",
      action: "Deleted product",
      timestamp: "1 hour ago",
    },
    {
      id: "4",
      user: "Alice Williams",
      action: "Added new product",
      timestamp: "2 hours ago",
    },
  ];

  const columns = [
    { key: "user", label: "User" },
    { key: "action", label: "Action" },
    { key: "timestamp", label: "Timestamp" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Users"
            value="2,543"
            change="+12.5%"
            changeType="positive"
          />
          <StatCard
            title="Total Products"
            value="184"
            change="+5.2%"
            changeType="positive"
          />
          <StatCard
            title="Revenue"
            value="$45,231"
            change="-2.3%"
            changeType="negative"
          />
          <StatCard
            title="Active Sessions"
            value="892"
            change="0%"
            changeType="neutral"
          />
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartPlaceholder title="Sales Overview" />
          <ChartPlaceholder title="User Growth" />
        </div>

        <DataTable
          title="Recent Activity"
          columns={columns}
          data={recentActivity}
        />
      </div>
    </div>
  );
}
