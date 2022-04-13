import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Sign from "./components/Sign";
import Panel from "./components/Panel";
import EditPage from "./pages/EditPage";
import PostEdit from "./pages/PostEdit";
import Dialog from "./components/Dialog";
function App() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousEye) => !previousEye);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Panel />} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
