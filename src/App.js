import Layout from "./components/Layout/index";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import People from "./pages/People";
import Films from "./pages/Films";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import Planets from "./pages/Planets";
import Species from "./pages/Species";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/people" element={<People />} />
        <Route path="/films" element={<Films />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/vechiles" element={<Vehicles />} />
        <Route path="/species" element={<Species />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </Layout>
  );
}

export default App;
