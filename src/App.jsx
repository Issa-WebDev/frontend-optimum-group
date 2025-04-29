import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Devices from "./pages/Devices";
import ServiceInformatique from "./pages/services/Informatique";
import ServiceBureautique from "./pages/services/Bureautique";
import ServiceMaritime from "./pages/services/Maritime";
import ServiceGenieCivil from "./pages/services/GenieCivil";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/services/informatique"
          element={<ServiceInformatique />}
        />
        <Route path="/services/bureautique" element={<ServiceBureautique />} />
        <Route path="/services/maritime" element={<ServiceMaritime />} />
        <Route path="/services/genie-civil" element={<ServiceGenieCivil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
