import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Error } from "./components/Error";
import { Timeline } from "./components/Timeline";
import { Sandbox } from "./components/Sandbox";
import { Writeups, MATSxTrails, AdventOfCode2025 } from "./components/Writeups";
import { FAQs } from "./components/FAQs";
import { useEffect } from "react";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="writeups">
          <Route path="" element={<Writeups />} />
          <Route path="mats-x-trails" element={<MATSxTrails />} />
          <Route path="advent-of-code-2025" element={<AdventOfCode2025 />} />
        </Route>
        <Route path="faqs" element={<FAQs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
