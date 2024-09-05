import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Layout/Root";
import NewNote from "../Pages/NewNote/NewNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/new",
        element: <NewNote />,
      },
    ],
  },
]);

export default router;
