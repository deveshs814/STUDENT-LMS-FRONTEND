import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StudentChart = ({ data }) => {
  return (
    <div className="w-full h-64 mt-6 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
      <h3 className="text-white text-md font-semibold mb-2">📊 Weekly Progress</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="week" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{ backgroundColor: "#111", border: "none", color: "#fff" }}
            itemStyle={{ color: "#00f2fe" }}
          />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#00f2fe"
            strokeWidth={2.5}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentChart;
