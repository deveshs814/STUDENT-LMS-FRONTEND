import { useState } from "react";
import mockStudents from "./data/mockStudents";
import StudentCard from "./components/StudentCard";
import FilterBar from "./components/FilterBar";
import ExportButton from "./components/ExportButton";

import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("");

  const allCourses = [...new Set(mockStudents.map((s) => s.course))];

  const filteredStudents = mockStudents.filter((student) => {
    const nameMatch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const courseMatch = courseFilter ? student.course === courseFilter : true;
    return nameMatch && courseMatch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Main Content */}
      <main className="flex-grow p-8">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide text-center">
            📊 Student Progress Analytics
          </h1>
        </div>

        {/* Filters */}
        <FilterBar
          setSearchTerm={setSearchTerm}
          setCourseFilter={setCourseFilter}
          courses={allCourses}
        />

        {/* Export Button */}
        <div className="mb-6">
          <ExportButton data={filteredStudents} />
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10 mt-20 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
  <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-4 text-gray-300 text-sm">
    
    {/* Made with love text */}
    <p className="flex items-center gap-2">
      Made with <FaHeart className="text-pink-500 animate-pulse" /> by{" "}
      <span className="text-white font-semibold">Devesh Shukla</span>
    </p>

    {/* Social icons */}
    <div className="flex gap-6">
      <a
        href="https://github.com/deveshs814"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-110 transition duration-300"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/devesh-shukla-5b3034232/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-110 transition duration-300"
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
