import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { Suspense, lazy, useEffect, useState } from "react";
import Loading from "./components/common/Loading";

function App() {
  const [progress, setProgress] = useState(0);

  const Home = lazy(() =>
    Promise.all([
      import("./pages/Home"),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]).then(([module]) => module)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev < 90 ? prev + 10 : prev >= 90 && prev < 99 ? prev + 3 : prev
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

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
