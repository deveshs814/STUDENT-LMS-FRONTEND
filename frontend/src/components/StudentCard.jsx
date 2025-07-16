import { useState } from "react";
import StudentModal from "./StudentModal";

const StudentCard = ({ student }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="bg-white text-gray-800 rounded-xl p-5 shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
      >
        <div className="text-lg font-semibold mb-1">{student.name}</div>
        <p className="text-sm text-gray-500 mb-2">{student.course}</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>📝 {student.tasksCompleted} / {student.tasksAssigned} tasks</p>
          <p>❓ {student.questionsCompleted} / {student.questionsAssigned} Qs</p>
          <p>🎯 {student.averageAccuracy}% accuracy</p>
          <p>📈 {student.courseCompletion}% complete</p>
        </div>
      </div>

      {open && <StudentModal student={student} onClose={() => setOpen(false)} />}
    </>
  );
};

export default StudentCard;
