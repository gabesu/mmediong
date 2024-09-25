import React from "react";
import { ReactNode } from "react";

export default function WorkLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
