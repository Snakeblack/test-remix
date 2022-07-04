import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from "~/styles/global.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  {
    rel: "stylesheet",
    href: globalStyles,
  },
];

const Layout = () => {
  return (
    <>
      <header>
        <h4>snakeRemix 🐍</h4>
      </header>
      <Outlet />
      <footer>
        <small>© Copyright 2022. Snake Remix. All rights reserved.</small>
      </footer>
    </>
  );
};

export default function App() {
  return (
    <html lang="es">
      <head>
        <title>Snake Remix 🐍</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
