import { CSVLink } from "react-csv";

const ExportButton = ({ data }) => {
  const headers = [
    { label: "Name", key: "name" },
    { label: "Course", key: "course" },
    { label: "Tasks Assigned", key: "tasksAssigned" },
    { label: "Tasks Completed", key: "tasksCompleted" },
    { label: "Questions Assigned", key: "questionsAssigned" },
    { label: "Questions Completed", key: "questionsCompleted" },
    { label: "Accuracy (%)", key: "averageAccuracy" },
    { label: "Completion (%)", key: "courseCompletion" },
    { label: "Time Spent", key: "timeSpent" },
    { label: "Last Active", key: "lastActive" },
  ];

  return (
    <div className="flex justify-center mt-12">
      <CSVLink
        data={data}
        headers={headers}
        filename="student_progress_report.csv"
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600
                   text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg
                   transition duration-300 ease-in-out"
      >
        ⬇️ Export CSV Report
      </CSVLink>
    </div>
  );
};

export default ExportButton;
