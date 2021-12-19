import Layout from "./components/Layout/index";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import People from "./pages/People";
import PeopleId from "./pages/PeopleId";
import Films from "./pages/Films";
import FilmsId from "./pages/FilmsId";
import Starships from "./pages/Starships";
import StarshipsId from "./pages/StarshipsId";
import Vehicles from "./pages/Vehicles";
import VehiclesId from "./pages/VehiclesId";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import PlanetsId from "./pages/PlanetsId";
import SpeciesId from "./pages/SpeciesId";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PeopleId />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmsId />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<StarshipsId />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<VehiclesId />} />
        <Route path="/species" element={<Species />} />
        <Route path="/species/:id" element={<SpeciesId />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<PlanetsId />} />
      </Routes>
    </Layout>
  );
}

export default App;
