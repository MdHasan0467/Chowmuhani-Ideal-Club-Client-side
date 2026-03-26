import { FaThLarge, FaList } from "react-icons/fa";

/*
🧠 Logic:
- search থাকলে resultCount দেখাবে
- view toggle (card/table)
*/

const SearchBar = ({
  search,
  setSearch,
  resultCount,
  view,
  setView,
  resetPagination,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">

      <div className="flex items-center gap-3 w-full">
        <input
          type="text"
          placeholder="🔍 নাম বা মোবাইল দিয়ে খুঁজুন..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            resetPagination();
          }}
          className="input input-bordered w-full md:w-80"
        />

        {/* ✅ Search থাকলে count */}
        {search && (
          <span className="text-sm text-gray-500">
            {resultCount} জন ডোনার পাওয়া গেছে
          </span>
        )}
      </div>

      {/* 🔄 View Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setView("card")}
          className={`btn btn-sm ${view === "card" ? "btn-primary" : "btn-outline"}`}
        >
          <FaThLarge />
        </button>

        <button
          onClick={() => setView("table")}
          className={`btn btn-sm ${view === "table" ? "btn-primary" : "btn-outline"}`}
        >
          <FaList />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;