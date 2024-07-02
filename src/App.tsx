import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import IntroPage from "./pages/IntroPage";
import "../index.css";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="/project/:name" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
