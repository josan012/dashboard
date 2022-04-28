import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { useState, useEffect } from "react";
import "./style.scss";

const COLORS = ["#3366ff", "#74c043"];

const Dashboard = () => {
  const [chartData, setChartData] = useState([
    { key: "users", name: "Users", number: 0 },
    { key: "posts", name: "Posts", number: 0 },
  ]);
  const [print, setPrint] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPieUserData = () =>
      fetch("http://localhost:3333/users")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json.length);
          setChartData((prevState) =>
            prevState.map((i) =>
              i.key === "users" ? { ...i, number: json.length } : i
            )
          );
        });
    const getPiePostData = () =>
      fetch("http://localhost:4444/posts")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json.length);
          setChartData((prevState) =>
            prevState.map((i) =>
              i.key === "posts" ? { ...i, number: json.length } : i
            )
          );
        });
    getPieUserData();
    getPiePostData();

    const check = localStorage.getItem("email");
    if (check !== null) {
      console.log(`Email address exists`);
    } else {
      console.log(`Email address not found`);
    }
    const data = JSON.parse(localStorage.getItem("email") || "{}");
    if (data) {
      setData(data);
      setPrint(true);
    }
  }, []);

  const clear = () => {
    const data = localStorage.setItem("email", JSON.stringify(null));
    if (data === null) {
      setData(data);
    }
  };

  return (
    <div className="center">
      <PieChart width={400} height={400}>
        <Pie data={chartData} dataKey="number" nameKey="name">
          {chartData.map((item, index) => (
            <Cell
              key={index}
              stroke={"#000"}
              strokeWidth={1}
              fill={COLORS[index]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
export default Dashboard;
