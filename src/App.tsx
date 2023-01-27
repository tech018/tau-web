import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routing } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {Routing.map((item) => (
          <Route
            path={item.path}
            index={item.index}
            element={item.element}
            key={item.name}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
