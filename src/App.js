import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Home from "../src/pages/Home/Home.jsx";
import Video from "../src/pages/Video/Video.jsx";
// import Dialog from "./pages/Dialog/Dialog.jsx";
import HomePage from "./scenes/HomePage/HomePage.jsx";
import LoginPage from "./scenes/LoginPage/LoginPage.jsx";
import ProfilePage from "./scenes/ProfilePage/ProfilePage.jsx";
import "./App.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";

ReactGA.initialize("UA-262042475-1");

function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/social" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
