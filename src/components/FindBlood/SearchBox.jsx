// components/SearchBox.jsx

const SearchBox = ({ search, setSearch, resetPagination }) => {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        placeholder="🔍 নাম বা মোবাইল দিয়ে খুঁজুন..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          resetPagination();
        }}
        className="input input-bordered w-full md:w-80 shadow-sm"
      />
    </div>
  );
};

export default SearchBox;