import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./pages/Sign";
import EditPage from "./pages/EditPage";
import PostEdit from "./pages/PostEdit";
import { Post } from "../src/interfaces";
import SignUp from "./pages/SignUp";
import Panel from "./pages/Panel";
import PanelPosts from "./pages/PanelPosts";
import PanelDashboard from "./pages/PanelDashboard";
import { QueryClientProvider, QueryClient } from "react-query";

export const App: React.FC = () => {
  const [posts] = useState<Post[]>([]);
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PanelDashboard />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/registration" element={<SignUp />} />
            <Route path="/users/edit/:id" element={<EditPage />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/users" element={<Panel />} />
            <Route path="/posts" element={<PanelPosts posts={posts} />} />
            <Route path="/dashboard" element={<PanelDashboard />} />
            <Route path="/panel" element={<Panel />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
