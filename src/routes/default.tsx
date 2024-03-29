import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../screens/dashboard";
import { List } from "../screens/list";
import { DefaultLayout } from "../layout/default";

const RouteTemplate = (children: React.ReactElement) => (
  <DefaultLayout>{children}</DefaultLayout>
);

export const routes = createBrowserRouter([
  {
    path: "/list",
    element: RouteTemplate(<List />),
  },
  {
    path: "/*",
    element: RouteTemplate(<Dashboard />),
  },
]);
