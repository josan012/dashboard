import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Sign from "./pages/Sign";
import EditPage from "./pages/EditPage";
import PostEdit from "./pages/PostEdit";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import { User, Post } from "../src/interfaces";

export const App: React.FC = () => {
  const [users] = useState<User[]>([]);
  const [posts] = useState<Post[]>([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/users/edit/:id" element={<EditPage />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
          <Route path="/users" element={<Users user={users} />} />
          <Route path="/posts" element={<Posts posts={posts} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
