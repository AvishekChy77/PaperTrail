import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
