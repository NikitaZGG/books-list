import { NavLink, Link } from "react-router-dom";
import { use, useState } from "react";
import { useMemo } from "react";
import BookCard from "../components/BookCard";
import Filter from "../components/Filter";

function Catalog({ initialBooks, loading }) {
  const [search, setSearch] = useState("");
  const [sorty, setSorty] = useState("asc");
  const [category, setCategory] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filterData = useMemo(() => {
    let result = [...initialBooks];
    if (search) {
      result = result.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (category) {
      result = result.filter((book) => book.category === category);
    }
    if (sorty === "asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sorty === "desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }
    return result;
  }, [initialBooks, search, category, sorty]);

  return (
    <main className="max-w-6xl mx-auto py-8 px-2 flex flex-col md:flex-row  md:gap-9">
      <div className="hidden md:block">
        <Filter
          sorty={sorty}
          category={category}
          setCategory={setCategory}
          setSorty={setSorty}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center gap-2 md:justify-start items-center">
          <input
            className="w-80 bg-white border border-gray-300 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-[#244d4d] "
            type="text"
            placeholder="Поиск:"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="md:hidden bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {loading && <div className="flex justify-center">Загрузка книг</div>}
        {!loading && (
          <div className="justify-items-center grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 lg:gap-5">
            {filterData.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        )}
      </div>
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden "
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed flex flex-col top-0 left-0 h-full w-70 bg-white shadow-xl z-50 p-4 md:hidden">
            <button
              className="self-start text-2xl mb-2"
              onClick={() => setMobileFilterOpen(false)}
            >
              &times
            </button>
            <h2 className="text-xl font-bold mb-4">Фильтр</h2>
            <Filter
              sorty={sorty}
              category={category}
              setCategory={setCategory}
              setSorty={setSorty}
            />
          </div>
        </>
      )}
    </main>
  );
}

export default Catalog;
