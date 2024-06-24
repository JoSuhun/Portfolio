import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { Suspense, useEffect, useState } from "react";
import Loading from "./components/common/Loading";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev < 90 ? prev + 10 : prev >= 90 && prev < 99 ? prev + 3 : prev
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 99) {
      setProgress(100);
    }
  }, [progress]);
  return (
    <Router>
      <Suspense fallback={<Loading progress={progress} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:name" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
