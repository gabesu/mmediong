import React from "react";
import "../css/scroll-button.css";
import Image from "next/image";
import Link from "next/link";

export default function ScrollButton({ title }: { title: string }) {
  return (
    <Link href="#works" className="scroll-button">
      <div className="title">{title}</div>
      <div className="icon">
        <Image src="/arrow-down.svg" alt="Image" width={20} height={20} />
      </div>
    </Link>
  );
}
