import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ progress }) => {
  const data = progress.map((val, index) => ({
    week: `W${index + 1}`,
    progress: val,
  }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="progress" stroke="#6366f1" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
