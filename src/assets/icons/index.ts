// src/assets/icons/index.js
import * as React from "react";

export { default as PythonIcon } from "./python.svg";
export { default as CIcon } from "./C.svg";
export { default as CppIcon } from "./C++.svg";
export { default as JavascriptIcon } from "./javascript.svg";

export { default as ReactIcon } from "./react.svg";
export { default as ViteIcon } from "./vite.svg";
export { default as HTMLIcon } from "./html.svg";
export { default as CSSIcon } from "./css.svg";

export { default as FastAPIIcon } from "./fastapi.svg";

export { default as MySQLIcon } from "./mysql.svg";
export {default as PostgreSQLIcon } from "./postgresql.svg";
export {default as SupabaseIcon } from "./supabase.svg";

export {default as GitIcon } from "./git.svg";
export {default as GitHubIcon } from "./github.svg";
export {default as DockerIcon } from "./docker.svg";
export {default as LinuxIcon } from "./linux.svg";
export {default as CloudflareIcon } from "./cloudflare.svg";
export {default as VercelIcon } from "./vercel.svg";
export {default as VSCodeIcon} from "./vs-code.svg";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>> | string;
export const PlaceholderIcon: IconComponent = (props) =>
  React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "white",
      stroke: "currentColor",
      strokeWidth: 1.5,
      ...props,
    },
    React.createElement("circle", { cx: "12", cy: "12", r: "9" }),
  );