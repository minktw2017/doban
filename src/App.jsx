import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MovieList from "./page/MovieList";
import Admin from "./page/Admin";
import AdminCategory from "./fake/AdminCategory";
import AdminMovie from "./fake/AdminMovie";
import Movie from "./componnents/Movie";
import FakeFile from "./fake/FakeFile";
import FakeMovie from "./fake/FakeMovie";
import FakeCategory from "./fake/FakeCategory";
import FakeActivities from "./fake/FakeActivities";
import Hono from "./page/Hono";
import ActList from "./page/ActList";
import Act from "./componnents/Act";
import FakeAct from "./fake/FakeAct";
import TrexMovie from "./componnents/TrexMovie";
import FakeHome from "./fake/FakeHome";
import AdminBanner from "./fake/AdminBanner";
import AdminFrames from "./fake/AdminFrames";
import AdminServicesection from "./fake/AdminServicesection";
import AdminRundown from "./fake/AdminRundown";
import AdminFeature from "./fake/AdminFeature";
import AdminForm from "./fake/AdminForm";
// import Webm from "./componnents/Webm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movielist" element={<MovieList />} />
      <Route path="/actlist" element={<ActList />} />
      <Route path="/admin" element={<Admin />}>
        <Route index element={<FakeHome />} />
        <Route path="/admin/movie" element={<FakeMovie />} />
        <Route
          path="/admin/movie/new"
          element={<AdminMovie outsideNew={true} />}
        />
        <Route
          path="/admin/activities/new"
          element={<FakeActivities outsideNew={true} />}
        />
        <Route path="/admin/category" element={<FakeCategory />} />
        <Route path="/admin/activities" element={<FakeAct />} />
        <Route path="/admin/activities/:itemId" element={<FakeActivities />} />
        <Route path="/admin/movie/:itemId" element={<AdminMovie />} />
        <Route path="/admin/banner" element={<AdminBanner />} />
        <Route path="/admin/frames" element={<AdminFrames />} />
        <Route path="/admin/servicesection" element={<AdminServicesection />} />
        <Route path="/admin/rundown" element={<AdminRundown />} />
        <Route path="/admin/feature" element={<AdminFeature />} />
        <Route path="/admin/form" element={<AdminForm />} />
      </Route>
      <Route path="/admin/category/:itemId" element={<AdminCategory />} />
      <Route path="/movie/:itemId" element={<Movie />} />
      <Route path="/trexmovie" element={<TrexMovie />} />
      <Route path="/act/:itemId" element={<Act />} />
      <Route path="/file" element={<FakeFile />} />
      <Route path="/hono" element={<Hono />} />
      {/* <Route path="/webm" element={<Webm />} /> */}
    </Routes>
  );
};

export default App;
