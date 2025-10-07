import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Timeline from "./components/Timeline/Timeline";
import Sandbox from "./components/Sandbox/Sandbox";
import Writeups from "./components/Writeups/Writeups";
import MATSxTrails from "./components/Writeups/MATSxTrails";
import FAQs from "./components/FAQs/FAQs";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="writeups">
          <Route path="" element={<Writeups />} />
          <Route path="mats-x-trails" element={<MATSxTrails />} />
        </Route>
        <Route path="faqs" element={<FAQs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
