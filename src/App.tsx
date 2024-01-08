import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import MagicLinkRedirect from "./MagicLinkRedirect.tsx";
import AuthenticatedApp from "./AuthenticatedApp.tsx";
import AuthProvider from "./components/AuthProvider.tsx";
import Authenticator from "./components/Authenticator/Authenticator.tsx";

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
        element: <Authenticator selected="SIGN_UP" />,
      },
      {
        path: "sign-in",
        element: <Authenticator selected="SIGN_IN" />,
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
