interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

export default function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
}: StatCardProps) {
  const changeColor = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-600",
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        {change && (
          <span className={`ml-2 text-sm font-medium ${changeColor[changeType]}`}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
