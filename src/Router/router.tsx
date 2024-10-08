import { createBrowserRouter } from "react-router-dom";
import NoteLayout from "../Layout/NoteLayout";
import Root from "../Layout/Root";
import EditNote from "../Pages/EditNote/EditNote";
import Home from "../Pages/Home/Home";
import NewNote from "../Pages/NewNote/NewNote";
import Note from "../Pages/ShowNote/Note";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewNote />,
      },
      {
        path: "/:id",
        element: <NoteLayout />,
        children: [
          {
            path: "",
            element: <Note />,
          },
          {
            path: "edit",
            element: <EditNote />,
          },
        ],
      },
    ],
  },
]);

export default router;
