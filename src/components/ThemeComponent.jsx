import React from "react";
import { useTheme } from "./ThemeContext";
export default function ThemeComponent({ children }) {
  const { theme } = useTheme();
  return <div id={theme}>{children}</div>;
}
