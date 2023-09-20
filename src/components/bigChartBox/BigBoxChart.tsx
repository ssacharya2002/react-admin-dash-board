import "./bigBoxChart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    books: 2529,
    clothes: 3573,
    electronics: 2898,
  },
  {
    name: "Mon",
    books: 2605,
    clothes: 2475,
    electronics: 3399,
  },
  {
    name: "Tue",
    books: 2616,
    clothes: 3128,
    electronics: 3699,
  },
  {
    name: "Wed",
    books: 3221,
    clothes: 2421,
    electronics: 1110,
  },
  {
    name: "Thu",
    books: 3806,
    clothes: 2757,
    electronics: 3563,
  },
  {
    name: "Fri",
    books: 3058,
    clothes: 2458,
    electronics: 4712,
  },
  {
    name: "Sat",
    books: 2535,
    clothes: 2436,
    electronics: 3116,
  },
];

const BigBoxChart = () => {
  return (
    <div className="bigBoxChart">
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="electronics"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="clothes"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="books"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BigBoxChart;
