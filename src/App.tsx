import { useEffect, lazy } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Error } from "./components/Error";
import { Timeline } from "./components/Timeline";
import { Sandbox } from "./components/Sandbox";
const ThreeSolar = lazy(() =>
  import("./components/Sandbox").then(({ ThreeSolar }) => ({
    default: ThreeSolar,
  }))
);
import { Writeups, AdventOfCode2025 } from "./components/Writeups";
const MATSxTrails = lazy(() =>
  import("./components/Writeups").then(({ MATSxTrails }) => ({
    default: MATSxTrails,
  }))
);
import { FAQs } from "./components/FAQs";

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
        <Route path="sandbox">
          <Route path="" element={<Sandbox />} />
          <Route path="three-solar" element={<ThreeSolar />} />
        </Route>
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
