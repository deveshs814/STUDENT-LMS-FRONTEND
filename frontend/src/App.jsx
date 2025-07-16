import FilterBar from './components/FilterBar';
 import StudentCard from './components/StudentCard';
 import { students } from './data/mockStudents';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Student Progress Analytics</h1>
      
      <FilterBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
