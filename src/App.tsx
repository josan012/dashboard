import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Sign from "./components/Sign";
import Panel from "./components/Panel";
import EditPage from "./components/EditPage";

function App() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousEye) => {
      return !previousEye;
    });
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
