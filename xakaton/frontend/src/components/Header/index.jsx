const index = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Header</h1>
        <div className="flex items-center">
          {/* Add additional header items here */}
        </div>
      </div>
    </header>
  );
};

export default index;
