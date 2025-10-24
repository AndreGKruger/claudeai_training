export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-500">
            Here&apos;s what&apos;s happening today
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            New Action
          </button>
        </div>
      </div>
    </header>
  );
}
