import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import OwnedClients from "./sections/OwnedClients";
import Contact from "./sections/Contact";
import Intro from "./sections/Intro";
import Content from "./sections/Content";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/clients" element={<OwnedClients />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
