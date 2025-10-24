import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import StatCard from "@/components/StatCard";

export default function ProductsPage() {
  const products = [
    {
      id: "1",
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$99.99",
      stock: "156",
    },
    {
      id: "2",
      name: "Running Shoes",
      category: "Sportswear",
      price: "$79.99",
      stock: "243",
    },
    {
      id: "3",
      name: "Coffee Maker",
      category: "Home Appliances",
      price: "$149.99",
      stock: "87",
    },
    {
      id: "4",
      name: "Yoga Mat",
      category: "Fitness",
      price: "$29.99",
      stock: "312",
    },
    {
      id: "5",
      name: "Desk Lamp",
      category: "Furniture",
      price: "$39.99",
      stock: "198",
    },
  ];

  const columns = [
    { key: "name", label: "Product Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price" },
    { key: "stock", label: "Stock" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Products" value="184" />
          <StatCard title="Categories" value="12" />
          <StatCard title="Out of Stock" value="8" />
          <StatCard title="Low Stock" value="23" />
        </div>

        <DataTable title="Product Inventory" columns={columns} data={products} />
      </div>
    </div>
  );
}
