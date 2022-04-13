import Style from "./styled";
import { PieChart, Pie, Tooltip } from "recharts";
import { Link } from "react-router-dom";

const data = [
  { name: "Users", number: 2 },
  { name: "Posts", number: 5 },
];

// const postsNumber = fetch("http://localhost:4444/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//     alert("Number of item:" + json.length);
//   });
const Dashboard = () => {
  return (
    <Style>
      <div className="panel">
        <div className="right">
          <div className="users">
            <Link to="/users">Users</Link>
          </div>
          <div className="posts">
            <Link to="/posts">Posts</Link>
          </div>
          <div className="dashboard">
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
        <div className="left">
          <div className="corner">
            <div className="sign">
              <span>
                <Link to="/sign">Sign In</Link>
              </span>
              <span>
                <Link to="/registration">Sign Up</Link>
              </span>
            </div>
          </div>
          <div className="center">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="number"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#1754d8"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Dashboard;
