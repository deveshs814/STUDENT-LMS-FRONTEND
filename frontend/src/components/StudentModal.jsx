import Chart from './Chart';

const StudentModal = ({ student, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-3xl shadow-lg relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">{student.name}</h2>
        <p className="mb-2 text-sm text-gray-500">Course: {student.course}</p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <p>📝 Tasks: {student.tasksCompleted}/{student.tasksAssigned}</p>
          <p>❓ Questions: {student.questionsCompleted}/{student.questionsAssigned}</p>
          <p>🎯 Accuracy: {student.averageAccuracy}%</p>
          <p>📈 Completion: {student.courseCompletion}%</p>
          <p>⏱ Time Spent: {student.timeSpent}</p>
          <p>🕒 Last Active: {new Date(student.lastActive).toLocaleDateString()}</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">🏆 Milestones:</p>
          <ul className="list-disc list-inside text-green-600">
            {student.milestones.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
  <p className="font-semibold text-gray-700 mb-2">📊 Weekly Progress</p>
  <Chart progress={student.weeklyProgress} />
</div>
      </div>
    </div>
  );
};

export default StudentModal;
