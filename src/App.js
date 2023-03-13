import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx";
import Dialog from "./pages/Dialog/Dialog.jsx";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dialog",
    element: <Dialog />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
