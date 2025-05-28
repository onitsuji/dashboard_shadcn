import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
