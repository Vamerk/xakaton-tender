const index = ({ onInputChange, title, inputText, inputDate, getTenders }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onInputChange((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleGetTenders = () => {
    getTenders();
  };

  return (
    <div className="px-6 py-4 flex flex-col gap-y-4 md:flex md:justify-between md:items-start border-b border-gray-200 dark:border-gray-700">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h2>
      </div>

      {inputText && (
        <div className=" max-w-3xl flex flex-col gap-y-2 md:flex md:flex-row md:gap-x-2">
          <input
            type="text"
            className="  block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Введите ключевые слова"
            onChange={(e) => handleInputChange(e)}
            name="keyword"
          />
          <input
            type="text"
            className=" block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Введите исключение"
            onChange={(e) => handleInputChange(e)}
            name="exception"
          />
        </div>
      )}

      {inputDate && (
        <div className=" items-center max-w-3xl flex flex-col gap-y-2 md:flex md:flex-row md:gap-x-2">
          <input
            type="date"
            className="  block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            onChange={(e) => handleInputChange(e)}
            name="startDate"
          />

          <input
            type="date"
            className=" block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600  "
            onChange={(e) => handleInputChange(e)}
            name="endDate"
          />
          <button
            className="py-2 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-blue-600 text-white shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={handleGetTenders}
          >
            Поиск
          </button>
        </div>
      )}
    </div>
  );
};

export default index;
