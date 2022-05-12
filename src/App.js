import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";

import NoRouter from "./NoRouter";
import WithRouter from "./WithRouter";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="/norouter" element={<NoRouter />} />
        <Route path="/withrouter" element={<Navigate to="/withrouter/1" />} />
        <Route path="/withrouter/:page" element={<WithRouter />} />
      </Routes>
    </div>
  );
}

export default App;
