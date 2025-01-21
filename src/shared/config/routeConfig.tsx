import { App } from "app/App";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { PagePage } from "pages/PagePage";
import { StorePage } from "pages/StorePage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PAGE = "page",
  STORE = "store",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PAGE]: "/page",
  [AppRoutes.STORE]: "/store",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRoutes.PAGE]: {
    path: RoutePaths.page,
    element: <PagePage />,
  },
  [AppRoutes.STORE]: {
    path: RoutePaths.store,
    element: <StorePage />,
  },
};
