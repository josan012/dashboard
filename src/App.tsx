import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Sign from "./components/Sign";

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
          <Route
            path="/"
            element={
              <Registration
                active={active}
                handleChangeActive={handleChangeActive}
              />
            }
          />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
