import { FaSearch, FaFilter } from "react-icons/fa";

const FilterBar = ({ setSearchTerm, setCourseFilter, courses }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 md:p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 mb-10">

      {/* Search Field */}
      <div className="flex items-center w-full md:w-1/3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 text-white border border-white/10 focus-within:ring-2 ring-blue-400 shadow-sm transition-all">
        <FaSearch className="mr-2 text-blue-300" />
        <input
          type="text"
          placeholder="Search by student name..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent focus:outline-none text-sm w-full placeholder:text-gray-300"
        />
      </div>

      {/* Course Filter Dropdown */}
      <div className="flex items-center w-full md:w-1/3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 text-white border border-white/10 shadow-sm transition-all">
        <FaFilter className="mr-2 text-green-300" />
        <select
          onChange={(e) => setCourseFilter(e.target.value)}
          className="bg-transparent text-sm w-full focus:outline-none cursor-pointer text-white placeholder-gray-300"
        >
          <option value="">All Courses</option>
          {courses.map((course, idx) => (
            <option key={idx} value={course} className="text-black">{course}</option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default FilterBar;
