// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
// import { scroller } from "react-scroll"; // <-- REMOVE THIS LINE
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // This useEffect block here might also be redundant if NavMenu's useEffect handles the scroll.
    // If you've moved the scrolling logic entirely to NavMenu.jsx's useEffect,
    // then this useEffect in AppContent can be removed entirely as well.
    // Check your App.jsx or Home.jsx implementation based on our last discussion.
    /*
    // Example of old logic that would use scroller if it were here:
    if (location.state && location.state.scrollTo) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        // scroller.scrollTo(targetId, { ... }); // <-- This line would use scroller
        window.history.replaceState({}, document.title, location.pathname);
      }, 100);
    }
    */
  }, [location.state, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
      {/* Add other routes if any */}
    </Routes>
  );
}

export default App;
