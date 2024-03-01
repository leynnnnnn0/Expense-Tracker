import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import History from "./pages/History/History";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </HashRouter>
  );
}

export default App
