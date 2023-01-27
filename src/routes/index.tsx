import React, { lazy, ReactElement, Suspense } from "react";
const Login = lazy(() => import("../pages/login"));

export interface Routes {
  name: string;
  path: string;
  index: boolean;
  element: ReactElement;
}

export const Routing: Array<Routes> = [
  {
    name: "Login",
    path: "/",
    index: true,
    element: (
      <Suspense fallback={<h1>Loading Please wait..</h1>}>
        <Login />
      </Suspense>
    ),
  },
];
