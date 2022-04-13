import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Sign from "./pages/Sign";
import EditPage from "./pages/EditPage";
import PostEdit from "./pages/PostEdit";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";

interface User {
  id: number;
  fullname: string;
  country: string;
  number: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  user: string;
}

function App() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousEye) => !previousEye);
  };

  const [users] = useState<User[]>([]);

  const [posts] = useState<Post[]>([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign" element={<Sign />} />
          <Route
            path="/registration"
            element={
              <Registration
                active={active}
                handleChangeActive={handleChangeActive}
              />
            }
          />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/users" element={<Users user={users} />} />
          <Route path="/posts" element={<Posts posts={posts} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
