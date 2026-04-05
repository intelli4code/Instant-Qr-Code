import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import License from "./pages/License";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/license" element={<License />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
