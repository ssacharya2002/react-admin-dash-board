import "./barChartBox.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#2a4337", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
