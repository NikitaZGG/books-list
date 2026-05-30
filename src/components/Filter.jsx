function Filter({ category, setCategory, sorty, setSorty }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Фильтр по категориям не работает, т.к. API не предоставляет категории книг  */}{" "}
      <div>
        <label className="block font-medium mb-1 text-gray-700">
          Категория
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:border-3 focus:border-[#244d4d]"
        >
          <option value="">Все</option>
          <option value="fantasy">Фэнтези</option>
          <option value="detective">Детектив</option>
          <option value="classic">Классика</option>
          <option value="adventure">Приключения</option>
        </select>
      </div>
      {/* //////////////////////////// */}
      <div>
        <label className="block font-medium mb-1 text-gray-700">
          Сортировка
        </label>
        <div className="flex justify-between md:gap-2">
          <button
            onClick={() => setSorty("asc")}
            className={`w-30 px-3 py-1 border rounded-lg transition ${
              sorty === "asc"
                ? "bg-[#244d4d] text-white border-[#244d4d]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            По алфавиту
          </button>
          <button
            onClick={() => setSorty("desc")}
            className={`w-30 px-3 py-1 border rounded-lg transition ${
              sorty === "desc"
                ? "bg-[#244d4d] text-white border-[#244d4d]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Против алфавита
          </button>
        </div>
      </div>
    </div>
  );
}
export default Filter;
