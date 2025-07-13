import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import Galery from "./pages/Galery";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {}, [location.state, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeri" element={<Galery />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
    </Routes>
  );
}

export default App;
