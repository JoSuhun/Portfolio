import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import Loading from "./components/common/Loading";

const Home = lazy(() => import("./pages/Home"));

function App() {
  const [progress, setProgress] = useState(0);
  const [isIntroLoaded, setIsIntroLoaded] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      const interval = setInterval(() => {
        setProgress((prev) =>
          prev < 90 ? prev + 10 : prev >= 90 && prev < 99 ? prev + 3 : prev
        );
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isInitialLoad]);

  useEffect(() => {
    if (progress >= 100) {
      setIsIntroLoaded(true);
    }
  }, [progress]);

  useEffect(() => {
    if (isIntroLoaded) {
      setProgress(100);
      setIsInitialLoad(false);
    }
  }, [isIntroLoaded]);
  return (
    <Router>
      <Suspense fallback={<Loading progress={progress} />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
