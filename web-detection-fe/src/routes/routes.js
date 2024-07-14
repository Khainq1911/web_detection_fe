import routesConfig from "~/config/routes";

import Chart from "~/pages/chart";
import Home from "~/pages/home";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.chart, component: Chart },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
