import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Timeline from "./components/Timeline/Timeline";
import Sandbox from "./components/Sandbox/Sandbox";
import Writeups from "./components/Writeups/Writeups";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="writeups" element={<Writeups />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
