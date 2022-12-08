import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// const Homepage = lazy(() => import("./Routes/HomePage/homepage"));
// const Navigation = lazy(() => import("./Routes/Navigation/Navigation"));
import Homepage from "./Routes/HomePage/homepage";
import Navigation from "./Routes/Navigation/Navigation";
import Workout from "./Routes/Workout/Workout";
import Timer from "./Routes/Timer/timer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="workout" element={<Workout />} />
        <Route path="timer" element={<Timer />} />
      </Route>
    </Routes>
  );
}

export default App;
