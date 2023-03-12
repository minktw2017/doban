import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx"
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
