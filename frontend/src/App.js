import "./App.css";
import { Route, Routes } from "react-router-dom";
import EventsPage from "./pages/events";
import HomePage from "./pages/home";
import TeamPage from "./pages/teamPage";
import WorksPage from "./pages/works";
import BlogsPage from "./pages/blogs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/works" element={<WorksPage />}></Route>
      <Route path="/events" element={<EventsPage />}></Route>
      <Route path="/team" element={<TeamPage />}></Route>
      <Route path="/blogs" element={<BlogsPage />}></Route>
    </Routes>
  );
}

export default App;
