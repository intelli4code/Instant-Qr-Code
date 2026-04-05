import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import License from "./pages/License";
import BulkGenerator from "./pages/BulkGenerator";
import ScrollToHash from "./components/utils/ScrollToHash";
import { HistoryProvider } from "./context/HistoryContext";
import { ThemeProvider } from "./context/ThemeContext";

import HistoryDrawer from "./components/generator/HistoryDrawer";

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <HistoryProvider>
          <ScrollToHash />
          <div className="min-h-screen bg-white dark:bg-background flex flex-col font-inter text-slate-900 dark:text-slate-200 transition-colors duration-300">
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bulk" element={<BulkGenerator />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/license" element={<License />} />
            </Routes>

            <HistoryDrawer />
            <Footer />
          </div>
        </HistoryProvider>
      </ThemeProvider>
    </Router>
  );
}
