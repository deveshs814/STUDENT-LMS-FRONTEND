import { FaTimes, FaUserGraduate, FaClock, FaChartBar, FaMedal } from "react-icons/fa";
import StudentChart from "./StudentChart";

const StudentModal = ({ student, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl w-full max-w-xl p-6 text-white overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 transition"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaUserGraduate className="text-yellow-400" />
            {student.name}
          </h2>
          <p className="text-sm text-blue-300">{student.course}</p>
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
          <div>📝 Tasks: {student.tasksCompleted}/{student.tasksAssigned}</div>
          <div>❓ Questions: {student.questionsCompleted}/{student.questionsAssigned}</div>
          <div>🎯 Accuracy: {student.averageAccuracy}%</div>
          <div>📈 Completion: {student.courseCompletion}%</div>
          <div>⏱ Time Spent: {student.timeSpent}</div>
          <div>📅 Last Active: {student.lastActive}</div>
        </div>

        {/* Milestones */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2 flex items-center gap-2 text-pink-400">
            <FaMedal /> Milestones
          </h3>
          <div className="flex flex-wrap gap-2">
            {student.milestones.map((milestone, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full shadow"
              >
                {milestone}
              </span>
            ))}
          </div>
        </div>

        {/* Chart */}
        <StudentChart
          data={[
            { week: "Week 1", progress: 20 },
            { week: "Week 2", progress: 40 },
            { week: "Week 3", progress: 60 },
            { week: "Week 4", progress: 80 },
            { week: "Week 5", progress: 90 },
          ]}
        />
      </div>
    </div>
  );
};

export default StudentModal;
