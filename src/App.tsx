import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./SignUp.tsx";
import SignIn from "./SignIn.tsx";
import MagicLinkRedirect from "./MagicLinkRedirect.tsx";
import AuthenticatedApp from "./AuthenticatedApp.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AuthenticatedApp />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-in-redirect",
        children: [
          {
            path: ":code",
            element: <MagicLinkRedirect />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

function Layout() {
  return <AuthProvider><Outlet /></AuthProvider>;
}

export default App;
