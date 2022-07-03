import { Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Languages from "./sections/Languages";
import OwnedClients from "./sections/OwnedClients";
import Contact from "./sections/Contact";
import Intro from "./sections/Intro";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/languages" element={<Languages />} />
        <Route exact path="/clients" element={<OwnedClients />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
