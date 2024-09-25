import React from "react";
import Image from "next/image";
import "../css/main-pill.css";

export default function MainPill({ title }: { title: string }) {
  return (
    <div className="main-pill">
      <div className="icon">
        <Image src="/sun.svg" alt="Image" width={20} height={20} />
      </div>
      <div className="label">{title}</div>
    </div>
  );
}
