import { useState } from "react";
import StudentModal from "./StudentModal";
import {
  FaTasks,
  FaQuestionCircle,
  FaCheckCircle,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

const StudentCard = ({ student }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer 
                   backdrop-blur-lg shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 
                   group relative overflow-hidden"
      >
        {/* Gradient Border Overlay */}
        <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500 group-hover:animate-pulse pointer-events-none"></div>

        {/* Student Name */}
        <h3 className="text-white text-xl font-semibold tracking-wide mb-1">
          {student.name}
        </h3>
        <p className="text-sm text-blue-300 mb-4">{student.course}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
          <div className="flex items-center gap-2">
            <FaTasks className="text-green-400" />
            {student.tasksCompleted}/{student.tasksAssigned} Tasks
          </div>

          <div className="flex items-center gap-2">
            <FaQuestionCircle className="text-yellow-400" />
            {student.questionsCompleted}/{student.questionsAssigned} Questions
          </div>

          <div className="flex items-center gap-2">
            <FaChartLine className="text-blue-400" />
            {student.courseCompletion}% Completion
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-purple-400" />
            {student.averageAccuracy}% Accuracy
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <FaClock className="text-pink-400" />
            Time Spent: {student.timeSpent}
          </div>
        </div>
      </div>

      {open && <StudentModal student={student} onClose={() => setOpen(false)} />}
    </>
  );
};

export default StudentCard;
