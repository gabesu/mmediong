import React from "react";
import "../css/main-tag.css";

export default function MainTag({ title }: { title: string }) {
  return <div className="main-tag">{title}</div>;
}
