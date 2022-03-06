import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Database from "./components/DataBase";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="database" element={<Database />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
